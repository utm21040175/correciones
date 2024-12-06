import mongoose from "mongoose";
import cors from "cors";
import express from "express";
import dotenv from "dotenv"
//importe testUser
import { testUser } from "./controllers/userController.js";

//config.dotenv();
dotenv.config();

//Elimine una llave {
//mongoose.connect(process.env.urlbd){
mongoose.connect(process.env.urlbd)
    .then(()=>{
        console.log("Funciona la conexion a la base de datos")
    }).catch((error)=>{
        console.log("No funciona la conexion a la base de datos", error)
    })
//Elimine una llave {
//}


//const app = express();
const app = express();
//app.use(cors)
app.use(cors())
app.listen(4000, ()=>{
    console.log("Se escucha correctamente el local")
})

testUser();
