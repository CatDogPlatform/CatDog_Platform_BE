import asyncHandler from 'express-async-handler';
import User from "../models/User.js";

const register = asyncHandler( async ( req, res ) =>
{
    try
    {
        
        res.status( 200 ).json(  )
    } catch ( error )
    {
        res.status( 400 )
        throw new Error( "Cannot register user" )
    }
} )

const login = asyncHandler( async ( req, res ) =>
{
    try
    {
        
        res.status( 200 ).json(  )
    } catch ( error )
    {
        res.status( 400 )
        throw new Error( "Cannot login user" )
    }
} )


const getProfile = asyncHandler( async ( req, res ) =>
{
    try
    {
        
        res.status( 200 ).json(  )
    } catch ( error )
    {
        res.status( 400 )
        throw new Error( "Cannot get user profile" )
    }
} )

export {
    register,
    login,
    getProfile
}