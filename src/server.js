import express from "express";
import cors from "cors"
import admin from "firebase-admin"
import serviceAccountKey from "./petdom-563bd-firebase-adminsdk-9kse4-b09a58d9bb.json"
import dotenv from "dotenv"
import cookieParser from "cookie-parser";
import { notFound, errorHandler } from "./middleware/errorHandler.js";
import connectDB from "./config/db.js";
import { run } from "./db_test.js"
import postRoutes from "./routes/PostRoutes.js"
import petRoutes from "./routes/PetRoutes.js"
import goodRoutes from "./routes/GoodRoutes.js"
import userRoutes from "./routes/UserRoutes.js"

dotenv.config()
const PORT = process.env.PORT || 5000;

connectDB()

//initialize the app
admin.initializeApp( {
    credential: admin.credential.cert( serviceAccountKey ),
    storageBucket: 'your_bucket_name.appspot.com' //you can find in storage.
} );

//get your bucket
var bucket = admin.storage().bucket();

const app = express();

app.use( cors() );
app.use( express.json() )
app.use( express.urlencoded( { extended: true } ) )

app.use( cookieParser() )

app.use( "/api/posts", postRoutes )
app.use( "/api/pets", petRoutes )
app.use( "/api/goods", goodRoutes )
app.use( "/api/user", userRoutes )

app.get( '/', ( req, res ) =>
{
    res.status( 200 ).json( "Server is ready" )
    console.log( "Server is ready" )
} )

app.use( notFound )
app.use( errorHandler )

app.listen( PORT, () =>
{
    console.log( `Server started on port ${ PORT }` )
} )