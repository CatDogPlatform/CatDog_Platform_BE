import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import routes from "../routes/index.js";
import { errorHandler, notFound } from "../middleware/errorHandler.js";

export default async ( app ) =>
{
    app.use( cors( {
        origin: ""
    } )
    )

    app.use( express.json() )
    app.use( express.urlencoded( { extended: true } ) )
    app.use( cookieParser() )

    //Routes
    app.use( `${ process.env.BASE_API_URL }`, routes )

    //Error handler
    app.use( notFound )
    app.use( errorHandler )

    app.get( '/', () =>
    {
        console.log( "Server is ready" )
    } )
}