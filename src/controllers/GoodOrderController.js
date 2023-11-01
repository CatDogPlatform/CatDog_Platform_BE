import asyncHandler from 'express-async-handler';
import GoodOrder from "../models/GoodOrder.js";

const payGoodOrder = asyncHandler( async ( req, res ) =>
{
    try
    {
        const goodOrder = await GoodOrder.findById( req.params.id )
        await goodOrder.updateOne( { $set: req.body } )
        res.status( 200 ).json( goodOrder )
    } catch ( error )
    {
        res.status( 400 )
        throw new Error( "Cannot pay GoodOrder" )
    }
} )

const getGoodOrder = asyncHandler( async ( req, res ) =>
{
    try
    {
        const goodOrder = await GoodOrder.findById( req.params.id )
        res.status( 200 ).json( goodOrder )
    } catch ( error )
    {
        res.status( 400 )
        throw new Error( "Cannot create GoodOrder" )
    }
} )

const updateGoodOrder = asyncHandler( async ( req, res ) =>
{
    try
    {
        const goodOrder = await GoodOrder.findById( req.params.id )
        await goodOrder.updateOne( { $set: req.body } )
        res.status( 200 ).json( goodOrder )
    } catch ( error )
    {
        res.status( 400 )
        throw new Error( "Cannot create GoodOrder" )
    }
} )


const deleteGoodOrder = asyncHandler( async ( req, res ) =>
{
    try
    {
        const goodOrder = await GoodOrder.findById( req.params.id )
        await goodOrder.deleteOne()
        res.status( 200 )
    } catch ( error )
    {
        res.status( 400 )
        throw new Error( "Cannot delete GoodOrder" )
    }
} )


export
{
    payGoodOrder,
    getGoodOrder,
    updateGoodOrder,
    deleteGoodOrder,
} 