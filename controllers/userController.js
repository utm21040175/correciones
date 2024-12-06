import { userModel } from "../models/userModel.js";


//Cambie a userModel.create
//create.userModel({
userModel.create({
    //Cambie de = a :
    /*name = "Leslie",
    apepat = "Arjona",
    telefono = 4494124075*/
    name: "Leslie",
    apepat: "Arjona",
    telefono: 4494124075
})

//Agregue const
export  const testUser = () => {
    console.log("Funciona el controlador")
}