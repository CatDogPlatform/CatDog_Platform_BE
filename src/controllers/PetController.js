import asyncHandler from 'express-async-handler';
import Pet from "../models/Pet.js";
import User from '../models/User.js';
import { mongoose } from 'mongoose';

const createPet = asyncHandler( async ( req, res ) =>
{
    try
    {
        const { userId, name, description, price, petType, imageUrl } = req.body
        const images = imageUrl
        const id = new mongoose.Types.ObjectId( userId );
        const user = await User.find( { _id: id } )
        const newPet = new Pet( { name, description, price, petType, images } )
        const savedPet = await newPet.save()
        // Add user to Pet 
        Pet.findByIdAndUpdate(
            savedPet._id,
            { user: user._id },
            { new: true, useFindAndModify: false }
        );
        res.status( 200 ).json( savedPet )
    } catch ( error )
    {
        res.status( 400 )
        throw new Error( "Cannot create Pet" )
    }
} )

const sellPet = asyncHandler( async ( req, res ) =>
{
    try
    {
        // Change pet status from "available" to "for exchange"
        const pet = await Pet.findById( req.params.id )
        await pet.update( { status: "FOR EXCHANGE" } )
        res.status( 200 ).json( pet )
    } catch ( error )
    {
        res.status( 400 )
        throw new Error( "Cannot sell Pet" )
    }
} )

const getPet = asyncHandler( async ( req, res ) =>
{
    try
    {
        const pet = await Pet.findById( req.params.id )
        res.status( 200 ).json( pet )
    } catch ( error )
    {
        res.status( 400 )
        throw new Error( "Cannot create Pet" )
    }
} )

const updatePet = asyncHandler( async ( req, res ) =>
{
    try
    {
        const petid = req.params.id.toString().trim()
        const pet = await Pet.findById( petid )
        await pet.updateOne( { $set: req.body } )
        res.status( 200 ).json( pet )
    } catch ( error )
    {
        res.status( 400 )
        throw new Error( "Cannot create Pet" )
    }
} )

const searchPet = asyncHandler( async ( req, res ) =>
{
    try
    {
        const search = req.query.search;
        const pets = await Pet.find( { name: { $regex: '.*' + search + '.*' } } ).populate( 'user' )
        res.status( 200 ).json( pets )
    } catch ( error )
    {
        res.status( 400 )
        throw new Error( "Cannot search Pet" )
    }
} )

const deletePet = asyncHandler( async ( req, res ) =>
{
    try
    {
        const petid = req.params.id.toString().trim()
        await Pet.findByIdAndDelete( petid )

        // await pet.deleteOne()
        res.status( 200 ).json( "Delte successfully" )
    } catch ( error )
    {
        res.status( 400 )
        throw new Error( "Cannot delete Pet" )
    }
} )

const buyPet = asyncHandler( async ( req, res ) =>
{
    try
    {
        const pet = await Pet.findById( req.params.id )
        await pet.update( { status: "BOUGHT" } )
        res.status( 200 ).json( pet )
    } catch ( error )
    {
        res.status( 400 )
        throw new Error( "Cannot create Pet" )
    }
} )


export
{
    createPet,
    sellPet,
    getPet,
    updatePet,
    searchPet,
    deletePet,
    buyPet,
} 