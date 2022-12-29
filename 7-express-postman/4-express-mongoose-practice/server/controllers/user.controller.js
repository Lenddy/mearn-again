const User = require("../models/user.models")




module.exports.message = (req,res)=>{
    res.json({message: "i am tired"})
}


module.exports.showAll = (req,res)=>{
    User.find()
    .then(Users =>{
        res.json(
            {
                count: Users.length,
                results: Users
            }
        )
    })
    .catch(
        err => res.json({message:"there is an error on shoAll", error:err})
    )
}




module.exports.showOne = (req,res) =>{
    User.findOne({_id:req.params.id})
    .then(userFound =>{
        res.json({
            results: userFound
        })
    })
    .catch(
        err => res.json({message:"there is an error on show one",error:err})
    )
}



module.exports.createUser = (req,res) =>{
    User.create(req.body)
    .then(newUse =>{
        res.json({
            results: newUse
        })
    })
    .catch(
        err => res.json({message:"there is an error on create one",error:err})
    )
}



module.exports.updateUser = (req,res) =>{
    User.findOneAndUpdate(
        {_id:req.params.id},
        req.body,
        {new:true, useValidators:true}
        )
    .then(updatedUser =>{
        res.json({
            results: updatedUser
        })
    })
    .catch(
        err => res.json({message:"there is an error on update one",error:err})
    )
}



module.exports.deleteUser = (req,res)=>{
    User.deleteOne({_id:req.params.id})
    .then(deletedUser =>{
        res.json({
            result: deletedUser
        })
    })
    .catch(err =>res.json({message: "theres is a problem on delete",error:err}))
}