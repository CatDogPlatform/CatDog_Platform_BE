import asyncHandler from 'express-async-handler';
import Good from "../models/Good.js";


const createGood = asyncHandler( async ( req, res ) =>
{
    try
    {
        // Split user and Good data from request body
        const { userId, content } = req.body
        const newGood = new Good( { content } )
        const savedGood = await newGood.save()
        // Add user to Good 
        Good.findByIdAndUpdate(
            savedGood._id,
            { user: userId },
            { new: true, useFindAndModify: false }
        );
        res.status( 200 ).json( savedGood )
    } catch ( error )
    {
        res.status( 400 )
        throw new Error( "Cannot create Good" )
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

        const goods = await Good.find( { name: { $regex: '.*' + search + '.*' } } )
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
        const good = await Good.findById( req.params.id )
        await good.deleteOne()
        res.status( 200 )
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
    createGood,
    sellGood,
    updateGood,
    getGood,
    searchGood,
    deleteGood,
    buyGood
} 