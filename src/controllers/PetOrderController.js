import asyncHandler from 'express-async-handler';
import PetOrder from "../models/PetOrder.js";


const payPetOrder = asyncHandler( async ( req, res ) =>
{
    try
    {
        const Pet = await Pet.findById( req.params.id )
        await Pet.updateOne( { $set: req.body } )
        res.status( 200 ).json( Pet )
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
        const PetOrder = await PetOrder.findById( req.params.id )
        res.status( 200 ).json( PetOrder )
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
        const PetOrder = await PetOrder.findById( req.params.id )
        await PetOrder.updateOne( { $set: req.body } )
        res.status( 200 ).json( PetOrder )
    } catch ( error )
    {
        res.status( 400 )
        throw new Error( "Cannot create PetOrder" )
    }
} )

const searchPetOrder = asyncHandler( async ( req, res ) =>
{
    try
    {
        const search = req.query.search;
        var condition = search ? { content: { $regex: new RegExp( search ), $options: "i" } } : {};

        const PetOrders = PetOrder.find( condition )
        res.status( 200 ).json( PetOrders )
    } catch ( error )
    {
        res.status( 400 )
        throw new Error( "Cannot search PetOrder" )
    }
} )

const deletePetOrder = asyncHandler( async ( req, res ) =>
{
    try
    {
        const PetOrder = await PetOrder.findById( req.params.id )
        await PetOrder.deleteOne()
        res.status(200)
    } catch ( error )
    {
        res.status( 400 )
        throw new Error( "Cannot delete PetOrder" )
    }
} )






export {
    payPetOrder,
    getPetOrder,
    updatePetOrder, 
    searchPetOrder, 
    deletePetOrder, 
} 