//imports
const mongoose = require("mongoose")



const UsersTable = new mongoose.Schema({
    name:{
        type:String,
        required:[true,"this field is requires"],
        minlength:[2,"you must have at least 2 characters"]
    },
    lastName:{
        type:String,
        required:[true,"this field is requires"],
        minlength:[2,"you must have at least 2 characters"]
    },
    age:{
        type:Number,
        required:[true,"this field is requires"],
        min:[1,"you must have at least 2 characters"]
    }
},{timestamps:true})


const User = mongoose.model("Users",UsersTable);

module.exports = User;
