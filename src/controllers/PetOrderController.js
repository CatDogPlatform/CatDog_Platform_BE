import asyncHandler from 'express-async-handler';
import PetOrder from "../models/PetOrder.js";
import Pet from '../models/Pet.js';

const payPetOrder = asyncHandler( async ( req, res ) =>
{
    try
    {
        const pet = await Pet.findById( req.params.id )
        await pet.updateOne( { $set: req.body } )
        res.status( 200 ).json( pet )
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

const searchPetOrder = asyncHandler( async ( req, res ) =>
{
    try
    {
        const search = req.query.search;
        var condition = search ? { content: { $regex: new RegExp( search ), $options: "i" } } : {};

        const petOrder = PetOrder.find( condition )
        res.status( 200 ).json( petOrder )
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
    searchPetOrder,
    deletePetOrder,
} 