//imports
const express = require("express");
const app = express();
const port = 8000
const mongoose = require("./server/config/user.config")




//to be able to use post routes
app.use(express.json())
app.use(express.urlencoded({extended:true}))




//import routes
require("./server/routes/user.Routes")(app)





app.listen(port,()=> console.log(`listening on port ${port}`))