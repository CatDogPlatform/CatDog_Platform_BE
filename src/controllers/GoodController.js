import asyncHandler from 'express-async-handler';
import Good from "../models/Good.js";
import User from '../models/User.js';
import { mongoose } from 'mongoose';

const createGood = asyncHandler( async ( req, res ) =>
{
    try
    {
        // Split user and Good data from request body
        const { userId, name, description, price, imageUrl } = req.body
        const images = imageUrl
        const id = new mongoose.Types.ObjectId( userId );
        const users = await User.find( { _id: id } )
        const user = users[ 0 ]
        const newGood = new Good( { name, description, price, images } )
        const savedGood = await newGood.save()
        // Add user to Good 
        Good.findByIdAndUpdate(
            savedGood._id,
            { user: user._id },
            { new: true, useFindAndModify: false }
        );
        res.status( 200 ).json( savedGood )
    } catch ( error )
    {
        res.status( 400 )
        throw new Error( "Cannot create Good" )
    }
} )

const getUserGoods = asyncHandler( async ( req, res ) =>
{
    try
    {

        const { userId } = req.body
        const id = new mongoose.Types.ObjectId( userId );
        const user = await User.find( { _id: id } )
        const goods = await Good.find( {
            user: user[ 0 ]._id
        } ).populate( 'user' );
        res.status( 200 ).json( goods )
    } catch ( error )
    {
        res.status( 400 )
        throw new Error( "Cannot search user goods" )
    }
} )

const sellGood = asyncHandler( async ( req, res ) =>
{
    try
    {
        // Change good status from "available" to "for exchange"
        const good = await Good.findById( req.params.id )
        res.status( 200 ).json( good )
    } catch ( error )
    {
        res.status( 400 )
        throw new Error( "Cannot sell Good" )
    }
} )

const updateGood = asyncHandler( async ( req, res ) =>
{
    try
    {
        const good = await Good.findById( req.params.id )
        await good.updateOne( { $set: req.body } )
        res.status( 200 ).json( good )
    } catch ( error )
    {
        res.status( 400 )
        throw new Error( "Cannot create Good" )
    }
} )

const getGood = asyncHandler( async ( req, res ) =>
{
    try
    {
        const good = await Good.findById( req.params.id )
        res.status( 200 ).json( good )
    } catch ( error )
    {
        res.status( 400 )
        throw new Error( "Cannot create Good" )
    }
} )

const searchGood = asyncHandler( async ( req, res ) =>
{
    try
    {
        const search = req.query.search;
        var condition = search ? { content: { $regex: new RegExp( search ), $options: "i" } } : {};

        const goods = await Good.find( { name: { $regex: '.*' + search + '.*' } } ).populate( 'user' )
        res.status( 200 ).json( goods )
    } catch ( error )
    {
        res.status( 400 )
        throw new Error( "Cannot search Good" )
    }
} )

const deleteGood = asyncHandler( async ( req, res ) =>
{
    try
    {
        const id = req.params.id.toString().trim()
        await Good.findByIdAndDelete( id )

        // await pet.deleteOne()
        res.status( 200 ).json( "Delete successfully" )
    } catch ( error )
    {
        res.status( 400 )
        throw new Error( "Cannot delete Good" )
    }
} )

const buyGood = asyncHandler( async ( req, res ) =>
{
    try
    {
        const good = await Good.findById( req.params.id )
        await good.update( { status: "BOUGHT" } )
        res.status( 200 ).json( good )
    } catch ( error )
    {
        res.status( 400 )
        throw new Error( "Cannot create Good" )
    }
} )



export
{
    getUserGoods,
    createGood,
    sellGood,
    updateGood,
    getGood,
    searchGood,
    deleteGood,
    buyGood
} 