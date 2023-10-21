import expressLoader from "./expressLoader.js";
import connectDB from "../config/db.js";

export default async ( app ) =>
{
    //Connect DB
    connectDB()
    console.log( 'DB Initialized' );

    //Initialize app
    await expressLoader( app )
    console.log( 'Express Initialized' );
}