import asyncHandler from 'express-async-handler';
import User from "../models/User.js";
import bcrypt from 'bcryptjs'
import generateToken from '../middleware/authMiddleware.js'
import jwt from 'jsonwebtoken'
const db = {};

const register = asyncHandler( async ( req, res ) =>
{
    try
    {
        const { email, password } = req.body;
        const newUser = new User( { email, password } )
        const savedUser = await newUser.save()
        res.status( 200 ).json( savedUser )
    } catch ( error )
    {
        res.status( 400 )
        throw new Error( "Cannot register user" )
    }
} )

const login = asyncHandler( ( req, res ) => new Promise( async ( resolve, reject ) =>
{
    try
    {
        const { email, password } = req.body;
        if ( !email || !password )
            return res.status( 400 ).json( {
                err: 1,
                message: "Invalid email or password"
            } );

        // check email and password


        const users = await User.findOne( { email } );

        const checkPassword = users && bcrypt.compareSync( password, users.password );
        const token = checkPassword ? jwt.sign( { email: users.email, password: users.password }, process.env.JWT_SECRET, { expiresIn: '5d' } ) : "Khong nhận đc token";

        res.status( 200 ).send( {
            err: token ? 1 : 0,
            message: token ? "Login successfully" : users ? "Invalid password" : "Email does not match",
            'access_token': token ? `Bearer ${ token }` : token,
            //token: token, 
            data: users
        } );

        // resolve({
        //     err: token ? 1 : 0, 
        //     mes: token ? "Login successfully" : users ? "Invalid password" : "Email does not match",
        //     'access_token': token ? `Bearer ${token}` : token,
        //     data: users
        //     // message: "Access token",
        //     // data: users
        // });

        // resolve({
        //     err: 0,
        //     mes: "register services"
        // })  

    } catch ( error )
    {
        reject( "Cannot login user" + error );
    }
} ) )



const getProfile = asyncHandler( async ( req, res ) =>
{
    try
    {
        const profile = await User.findById( req.params.id )
        res.status( 200 ).json( profile )
    } catch ( error )
    {
        res.status( 400 )
        throw new Error( "Cannot get user profile" )
    }
} )

const getMembers = asyncHandler( async ( req, res ) =>
{
    try
    {
        const members = await User.find( { role: "MEMBER" } )
        res.status( 200 ).json( members )
    } catch ( error )
    {
        res.status( 400 )
        throw new Error( "Cannot get members" )
    }
} )

const getBannedMembers = asyncHandler( async ( req, res ) =>
{
    try
    {
        const members = await User.find( { role: "MEMBER", status: "BANNED" } )
        res.status( 200 ).json( members )
    } catch ( error )
    {
        res.status( 400 )
        throw new Error( "Cannot get members" )
    }
} )


const banAccount = asyncHandler( async ( req, res ) =>
{
    try
    {
        const userid = req.params.id;
        const profile = await User.findById( userid )
        await profile.update( { status: "BANNED" } )
        res.status( 200 ).json( profile )
    } catch ( error )
    {
        res.status( 400 )
        throw new Error( "Cannot ban user" )
    }
} )

const unbanAccount = asyncHandler( async ( req, res ) =>
{
    try
    {
        const userid = req.params.id;
        const profile = await User.findById( userid )
        await profile.update( { status: "ACTIVE" } )
        res.status( 200 ).json( profile )
    } catch ( error )
    {
        res.status( 400 )
        throw new Error( "Cannot ban user" )
    }
} )

const createStaffAccount = asyncHandler( async ( req, res ) =>
{
    try
    {
        const { email, password } = req.body;
        const newUser = new User( { email, password } )
        const savedUser = await newUser.save()
        res.status( 200 ).json( savedUser )
        const profile = await User.findById( req.params.id )
        res.status( 200 ).json( profile )
    } catch ( error )
    {
        res.status( 400 )
        throw new Error( "Cannot get user profile" )
    }
} )

export
{
    register,
    login,
    getProfile,
    getMembers,
    getBannedMembers,
    banAccount,
    unbanAccount,
    createStaffAccount
}