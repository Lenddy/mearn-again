const  mongoose  = require("mongoose")

require("mongoose")// importing mongoose so that  we can create a table for the data base



const JokeTable = new mongoose.Schema({
    //creating a field that the table will have 
    joke:{
        type: String, //defining the type
        required: [true, "you must give a joke fammmmmm"], //saying if it is required(true) or not(false) then giving a validation message if it is
        minLength: [3,"this joke must be at lest 3 characters long "] //specifying the minimum length that it can have 
    },
    punchLine:{
        type: String,
        required: [true,"you need a punch line fammmmm"],
        minLength: [2,"the punch line must be at leas 2 characters long "]
    },
    ratting:{
        type: Number, //covers floats and whole numbers
        min: [1,"the ratting cant be lower than 1 out of 5 "],// min and max length for numbers
        max: [5, "5 is the highest score"]
    }
},//to be able to use  createdAt and updatedAt you need to create a dictionary after the initial dictionary that is housing all the fields
{timestamps:true}
)


const Joke = mongoose.model("Joke",JokeTable)  //this line is creating the table in mongoDB for us

module.exports = Joke   //exporting the jokes table so we are able to use it in the other files(the controller folder)




// const mongoose = require("mongoose");




// const users = new mongoose.Schema({
//     Name:{
//         type:String,
//         required:[true,"this field is required"],
//         minLength:[2,"you must have at lest 2 characters"],
//         maxLength:[20,"the max length is 20 characters"]
//     },
//     lName:{
//         type: String,
//         required:[2,"this field is required"],
//         minLength:[2,"you must have at lest 2 characters"],
//         maxLength:[20,"the max length is 20 characters"]
//     },
//     age:{
//         type:Number,
//         required:[true,"this field is required"],
//         min:[1,"you cant be less that 1 years old"]
//     }

// },{timestamps:true})



// const User = mongoose.model("Users",users);

// module.export =  User;