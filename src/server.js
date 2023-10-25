import express from "express";
import cors from "cors"
import dotenv from "dotenv"
import cookieParser from "cookie-parser";
import { notFound, errorHandler } from "./middleware/errorHandler.js";
import User from "./models/User.js";
import Post from "./models/Post.js";
import connectDB from "./config/db.js";
import bable from "bable"



dotenv.config()
const PORT = process.env.PORT || 5000;

connectDB()

// const createUser = function ( user )
// {
//     return User.create( user ).then( docUser =>
//     {
//         console.log( "\n>> Created User:\n", docUser );
//         return docUser;
//     } );
// };

// const createPost = function ( post )
// {
//     return Post.create( post ).then( docPost =>
//     {
//         console.log( "\n>> Created Post:\n", docPost );
//         return docPost;
//     } );
// };

// const addPostToUser = function ( userId, postId )
// {
//     return Post.findByIdAndUpdate(
//         postId,
//         { user: userId },
//         { new: true, useFindAndModify: false }
//     );
// };

// const run = async function ()
// {
//     var user = await createUser( {
//         email: "John Doe",
//         password: "123"
//     } );

//     var post = await createPost( {
//         content: "Dog",
//     } );

//     post = await addPostToUser( user._id, post._id );
//     console.log( "\n>> Post:\n", post );
// };

// run()


const app = express();


app.use( express.json() )
app.use( express.urlencoded( { extended: true } ) )

app.use( cookieParser() )

// app.use( "/api/users", userRoutes )

app.get( '/', () =>
{
    console.log( "Server is ready" )
} )

app.use( notFound )
app.use( errorHandler )

app.listen( PORT, () =>
{
    console.log( `Server started on port ${ PORT }` )
} )


app.get( '/hi', (req, res) =>
{
    res.json("Welcome to MongoDB")
} )

app.get( '/hi', ( req, res ) =>
{
  res.send( "Hello from express server." )
} )
