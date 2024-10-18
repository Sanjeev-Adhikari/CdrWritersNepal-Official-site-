import express, { Application, Request, Response } from 'express';
import './config/connection.js';
import homeRoute from './routes/homeRoute.js';
import { BACKEND_PORT } from './config/config.js';

const app:Application = express();


app.set("view engine", "ejs");
app.set("views", "./src/views");
app.use(express.static("src/public/"));

app.use("/", homeRoute);
const PORT:number = parseInt(BACKEND_PORT as string);

app.listen(PORT, ()=>{
    console.log("Express started at PORT:" + PORT);
});