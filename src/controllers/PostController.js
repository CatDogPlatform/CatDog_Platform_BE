import asyncHandler from 'express-async-handler';
import Post from "../models/Post.js";
import Comment from '../models/PostComment.js';
import User from '../models/User.js';
import { mongoose } from 'mongoose';
// FOR MEMBERS
const createPost = asyncHandler( async ( req, res ) =>
{
    try
    {
        // Split user and post data from request body
        const { userId, content, imageUrl } = req.body
        const images = imageUrl
        const id = new mongoose.Types.ObjectId( userId );

        const user = await User.find( { _id: id } )
        const newPost = new Post( { content, images } )
        const savedPost = await Post.create( newPost )

        await Post.findByIdAndUpdate(
            savedPost._id,
            { user: user[ 0 ]._id },
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
        throw new Error( "Cannot update post" )
    }
} )

const getPost = asyncHandler( async ( req, res ) =>
{
    try
    {
        const post = await Post.findById( req.params.id ).populate( 'user' );
        res.status( 200 ).json( post )
    } catch ( error )
    {
        res.status( 400 )
        throw new Error( "Cannot get post" )
    }
} )

const getRejectedPosts = asyncHandler( async ( req, res ) =>
{
    try
    {
        const search = req.query.search;
        const posts = await Post.find( {
            content: { $regex: '.*' + search + '.*' },
            status: "REJECTED"
        } ).populate( 'user' );
        res.status( 200 ).json( posts )
    } catch ( error )
    {
        res.status( 400 )
        throw new Error( "Cannot find rejected post" )
    }
} )

const getUserPosts = asyncHandler( async ( req, res ) =>
{
    try
    {

        const { userId } = req.body
        const id = new mongoose.Types.ObjectId( userId );
        const user = await User.find( { _id: id } )
        const posts = await Post.find( {
            user: user[ 0 ]._id
        } ).populate( 'user' );
        res.status( 200 ).json( posts )
    } catch ( error )
    {
        res.status( 400 )
        throw new Error( "Cannot search post" )
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

const getPendingPost = asyncHandler( async ( req, res ) =>
{
    try
    {
        const posts = await Post.find( {
            status: "PENDING"
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
        const id = req.params.id.toString().trim()
        await Post.findByIdAndDelete( id )

        // await pet.deleteOne()
        res.status( 200 ).json( "Delete successfully" )
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
        const postid = req.params.id.toString().trim()
        const post = await Post.findById( postid )
        const { detail, userId } = req.body
        const id = new mongoose.Types.ObjectId( userId );

        const users = await User.find( { _id: id } )
        const user = users[ 0 ]
        const email = user.email
        const fullname = user.fullname
        const comment = new Comment( { detail, postid, userId, email, fullname } )
        const savedComment = await Comment.create( comment )

        res.status( 200 ).json( savedComment )
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
        const postId = req.params.id
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
        const postid = req.params.id.toString().trim()
        const post = await Post.findById( postid )
        await post.updateOne( { status: "APPROVED" } )
        res.status( 200 ).json( post )
    } catch ( error )
    {
        res.status( 400 )
        throw new Error( "Cannot approve post" )
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
    getPost,
    getUserPosts,
    createPost,
    updatePost,
    searchPost,
    deletePost,
    likePost,
    commentPost,
    getPostComments,
    approvePost,
    rejectPost,
    getRejectedPosts,
    getPendingPost
} 