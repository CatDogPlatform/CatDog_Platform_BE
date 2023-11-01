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

const login = asyncHandler(  ( req, res ) => new Promise(async (resolve, reject ) =>{
    try
    {
        const {email, password } = req.body;
        if ( !email || !password )
            return res.status(400).json({
                err: 1, 
                message: "Invalid email or password"
            });

        //check email and password
        const users = await User.findOne({
            where: { email: email},
            raw: true
        })
        const checkPassword = users && bcrypt.compareSync(password, users.password);
        const token = checkPassword ? jwt.sign({id: users.id, email: users.email, password: users.password }) : null;
        console.log(token);

        const response = req.body;

        res.status(200).send({message: "login successful", token: token, data: response});

        resolve({
            // err: token ? 1 : 0, 
            // mes: token ? "Login successfully" : users ? "Invalid password" : "Email does not match",
            // 'access_token': token ? `Bearer ${token}` : token,
            // data: users
            message: "Access token",
            data: users
        });

        resolve({
            err: 0,
            mes: "register services"
        })  

    } catch ( error )
    {
        reject( "Cannot login user" + error );
    }
}))



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

export {
    register,
    login,
    getProfile
}