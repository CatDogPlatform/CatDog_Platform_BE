import jwt from "jsonwebtoken"

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

export default generateToken