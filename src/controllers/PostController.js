import asyncHandler from 'express-async-handler';
import Post from "../models/Post.js";
import Comment from '../models/PostComment.js';
import User from '../models/User.js';
// FOR MEMBERS
const createPost = asyncHandler( async ( req, res ) =>
{
    try
    {
        // Split user and post data from request body
        const { userId, content } = req.body
        const newPost = new Post( { content } )
        const savedPost = await newPost.save()

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
        const posts = await Post.find( {
            content: { $regex: '.*' + search + '.*' },
            status: "APPROVED"
        } ).populate( 'user' );
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
        res.status( 200 )
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
        const post = await Post.findById( req.params.id )
        if ( !post.likes.includes( req.body.userId ) )
        {
            await post.updateOne( { $push: { likes: req.body.userId } } )
            res.status( 200 ).json( "The post has been liked" )
        } else
        {
            await post.updateOne( { $pull: { likes: req.body.userId } } )
            res.status( 200 ).json( "The post has been disliked" )
        }
    } catch ( error )
    {
        res.status( 400 )
        throw new Error( "Cannot like post" )
    }
} )


const commentPost = asyncHandler( async ( req, res ) =>
{
    try
    {
        const { detail, postId, userId } = req.body
        const comment = new Comment( { detail, postId, userId } )
        const savedComment = await comment.save()
        res.status( 200 )
    } catch ( error )
    {
        res.status( 400 )
        throw new Error( "Cannot comment post" )
    }
} )

const getPostComments = asyncHandler( async ( req, res ) =>
{
    try
    {
        const { postId } = req.body
        const comments = await Comment.find( { postId: postId } )
        res.status( 200 ).json( comments )
    } catch ( error )
    {
        res.status( 400 )
        throw new Error( "Cannot get comments" )
    }
} )

// FOR STAFF
const approvePost = asyncHandler( async ( req, res ) =>
{
    try
    {
        const post = await Post.findById( req.params.id )
        await post.update( { status: "APPROVED" } )
        res.status( 200 )
    } catch ( error )
    {
        res.status( 400 )
        throw new Error( "Cannot approve comments" )
    }
} )

const rejectPost = asyncHandler( async ( req, res ) =>
{
    try
    {
        const post = await Post.findById( req.params.id )
        await post.update( { status: "REJECTED" } )
        res.status( 200 )
    } catch ( error )
    {
        res.status( 400 )
        throw new Error( "Cannot reject comments" )
    }
} )



export
{
    createPost,
    updatePost,
    searchPost,
    deletePost,
    likePost,
    commentPost,
    getPostComments,
    approvePost,
    rejectPost
} 