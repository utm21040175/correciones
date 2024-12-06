import { model, Schema } from "mongoose";

//Agregue parentesis ()
const users = new Schema ({
    /*name = String,
    apepat = String,
    telefono = number*/
    name: String,
    apepat: String,
    //telefono: number
    telefono: Number

})

//Agregue el nombre Users y cambie el nombre a users
//export const userModel = new model(,user)
export const userModel = new model("Users",users)
