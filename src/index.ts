import dotenv from "dotenv";
import express from "express";
import path from "path";

dotenv.config();

const port = process.env.SERVER_PORT || 8080;

const app = express();

// Configure Express to use EJS
app.set( "views", path.join( __dirname, "views" ) );
app.set( "view engine", "ejs" );

app.get( "/", ( req, res ) => {
    res.render( "index" );
} );

// start the express server
app.listen( port, () => {
    // tslint:disable-next-line:no-console
    console.log( `server started at http://localhost:${ port }` );
} );