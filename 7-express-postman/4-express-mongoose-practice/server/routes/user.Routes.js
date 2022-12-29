const userController = require("../controllers/user.controller")


module.exports = (app)=>{
    app.get("/api",userController.message);
    app.get("/api/users",userController.showAll)
    app.get("/api/Users/:id",userController.showOne)
    app.post("/api/users/new",userController.createUser)
    app.put("/api/users/update/:id",userController.updateUser)
    app.delete("/api/users/delete/:id", userController.deleteUser)
}