const mongoose = require("mongoose")



const productTable = mongoose.Schema({
    title:{
        type:String,
        required:[true,"you must enter a title"] ,
        minLength: [2,"must be at least 2 characters long"]
    },
    price:{
        type: Number,
        required: [true, "you must give a price"],
        min:[1,"price cant be lower than 1.00 dollars"]
    },
    description:{
        type:String,
        required:[true, "you must give a description"],
        minLength:[5,"must be at least 5 characters long"]
    }
},{timestamps:true})



const Product = mongoose.model("product",productTable);

module.exports = Product;