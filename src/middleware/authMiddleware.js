import jwt from "jsonwebtoken";
import asyncHandler from 'express-async-handler';
import User from "../models/User.js";

const generateToken = async ( res, userID ) =>
{
    const token = jwt.sign( { userID }, process.env.JWT_SERCRET, {
        expiresIn: '1d'
    } )

    res.cookie( "jwt", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV !== 'development',
        sameSite: 'strict',
        maxAge: 30 * 24 * 60 * 60 * 1000
    } )
}

const protect = asyncHandler( async ( req, res, next ) =>
{
    let token

    token = req.cookies.jwt

    if ( token )
    {
        try
        {
            const decoded = jwt.verify( token, process.env.JWT_SECRET )

            req.user = await User.findById( decoded.userId )

            next()
        } catch ( error )
        {
            res.status( 401 )
            throw new Error( 'Not authorized, no token' )
        }
    } else
    {
        res.status( 401 )
        throw new Error( 'Not authorized, no token' )
    }
} )

export { generateToken, protect }