const Product = require("../models/product.model")


module.exports.message = (req,res)=>{
    res.json({message:"hello from the product model"})
}


module.exports.getAll = (req,res)=>{
    Product.find()
    .then( products =>
        res.json({
            count: products.length,
            results: products
        })
    )
    .catch(err => res.json({message:"something went wrong finding the products", error:err}))
}



module.exports.getOne =(req,res)=>{
    Product.findOne({_id:req.params.id})
    .then(product=> res.json({
        results: product
    }))
    .catch(
        err => res.json({message:"something went wrong finding the products", error:err})
    )
}


module.exports.create =(req,res)=>{
    Product.create(req.body)
    .then(newProduct=> res.json({
        results: newProduct
    }))
    .catch(
        err => res.json({message:"something went wrong finding the products", error:err})
    )
}



module.exports.updateOne =(req,res)=>{
    Product.findOneAndUpdate(
        {_id:req.params.id},
        req.body,
        {new:true,runValidators:true}
    )
    .then(
        updatedProduct => res.json({
            results: updatedProduct
        })
    )
    .catch(err=> res.json({message: "there was something wrong on the update",error: err}))
}


module.exports.deleteOne = (req,res)=>{
    Product.deleteOne({_id:req.params.id})
    .then(deleted => res.json({
        results: deleted
    }))
    .catch(err =>res.json({message:"there was something wrong on the delete",error:err}))
}