import asyncHandler from 'express-async-handler';
import GoodOrder from "../models/GoodOrder.js";

const payGoodOrder = asyncHandler( async ( req, res ) =>
{
    try
    {
        const sellerGood = await Good.findById( req.params.id ).populate( 'user' )
        // choose Good 
        const { buyerGoodId, buyerId } = req.body
        // remove Good from seller
        await sellerGood.findByIdAndUpdate(
            sellerGood._id,
            { user: buyerId },
            { new: true, useFindAndModify: false }
        );

        const buyerGood = await Good.findById( buyerGoodId ).populate( 'user' )
        await buyerGood.findByIdAndUpdate(
            buyerGood._id,
            { user: sellerGood.user._id },
            { new: true, useFindAndModify: false }
        );
        res.status( 200 ).json( "Buy successfully" )
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