import asyncHandler from 'express-async-handler';
import PetOrder from "../models/PetOrder.js";
import Pet from '../models/Pet.js';


const payPetOrder = asyncHandler( async ( req, res ) =>
{
    try
    {
        const sellerPet = await Pet.findById( req.params.id ).populate( 'user' )
        // choose pet 
        const { buyerPetId, buyerId } = req.body
        // remove pet from seller
        await sellerPet.findByIdAndUpdate(
            sellerPet._id,
            { user: buyerId },
            { new: true, useFindAndModify: false }
        );

        const buyerPet = await Pet.findById( buyerPetId ).populate( 'user' )
        await buyerPet.findByIdAndUpdate(
            buyerPet._id,
            { user: sellerPet.user._id },
            { new: true, useFindAndModify: false }
        );
        res.status( 200 ).json( "Buy successfully" )
    } catch ( error )
    {
        res.status( 400 )
        throw new Error( "Cannot pay Pet" )
    }
} )


const getPetOrder = asyncHandler( async ( req, res ) =>
{
    try
    {
        const petOrder = await PetOrder.findById( req.params.id )
        res.status( 200 ).json( petOrder )
    } catch ( error )
    {
        res.status( 400 )
        throw new Error( "Cannot create PetOrder" )
    }
} )

const updatePetOrder = asyncHandler( async ( req, res ) =>
{
    try
    {
        const petOrder = await PetOrder.findById( req.params.id )
        await petOrder.updateOne( { $set: req.body } )
        res.status( 200 ).json( petOrder )
    } catch ( error )
    {
        res.status( 400 )
        throw new Error( "Cannot create PetOrder" )
    }
} )


const deletePetOrder = asyncHandler( async ( req, res ) =>
{
    try
    {
        const petOrder = await PetOrder.findById( req.params.id )
        await petOrder.deleteOne()
        res.status( 200 )
    } catch ( error )
    {
        res.status( 400 )
        throw new Error( "Cannot delete PetOrder" )
    }
} )


export
{
    payPetOrder,
    getPetOrder,
    updatePetOrder,
    deletePetOrder,
} 