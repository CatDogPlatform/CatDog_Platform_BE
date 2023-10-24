import asyncHandler from 'express-async-handler';
import Post from "../models/Post.js";

// FOR MEMBERS
const createPost = asyncHandler( async ( req, res ) =>
{
    try
    {
        // Split user and post data from request body
        const { userId, content } = req.body
        const newPost = new Post( { content } )
        const savedPost = await newPost.save()
        // Add user to post 
        Post.findByIdAndUpdate(
            savedPost._id,
            { user: userId },
            { new: true, useFindAndModify: false }
        );
        res.status( 200 ).json( savedPost )
    } catch ( error )
    {
        res.status( 400 )
        throw new Error( "Cannot create post" )
    }
} )

const updatePost = asyncHandler( async ( req, res ) =>
{
    try
    {
        const post = await Post.findById( req.params.id )
        await post.updateOne( { $set: req.body } )
        res.status( 200 ).json( post )
    } catch ( error )
    {
        res.status( 400 )
        throw new Error( "Cannot create post" )
    }
} )

const searchPost = asyncHandler( async ( req, res ) =>
{
    try
    {
        const search = req.query.search;
        var condition = search ? { content: { $regex: new RegExp( search ), $options: "i" } } : {};

        const posts = Post.find( condition )
        res.status( 200 ).json( posts )
    } catch ( error )
    {
        res.status( 400 )
        throw new Error( "Cannot search post" )
    }
} )

const deletePost = asyncHandler( async ( req, res ) =>
{
    try
    {
        const post = await Post.findById( req.params.id )
        await post.deleteOne()
        res.status(200)
    } catch ( error )
    {
        res.status( 400 )
        throw new Error( "Cannot delete post" )
    }
} )


const likePost = asyncHandler( async ( req, res ) =>
{
    try
    {
        await Post.updateOne( { $push: { likes: req.body.userId } } )
    } catch ( error )
    {

    }
} )


const unlikePost = asyncHandler( async ( req, res ) =>
{
    try
    {

    } catch ( error )
    {

    }
} )

const commentPost = asyncHandler( async ( req, res ) =>
{
    try
    {

    } catch ( error )
    {

    }
} )

// FOR STAFF



export {
    createPost, 
    updatePost, 
    searchPost, 
    deletePost, 
    likePost, 
    unlikePost, 
    commentPost
} 