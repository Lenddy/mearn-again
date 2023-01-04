const productController = require("../controllers/product.controller")


module.exports = (app)=>{
    app.get("/api",productController.message)
    app.get("/api/products",productController.getAll)
    app.get("/api/products/:id",productController.getOne)
    app.post("/api/products",productController.create)
    app.put("/api/products/update/:id",productController.updateOne)
    app.delete("/api/products/delete/:id",productController.deleteOne)
}



