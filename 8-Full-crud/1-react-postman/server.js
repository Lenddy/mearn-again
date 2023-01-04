// imports
const express = require("express");
const app = express();
const port = 8000;
const cors = require("cors") //cors allow you so chare resources form the backend to the front end
require("./server/config/mongoose.config")

// so you can use post routes
app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(cors())



//import the rotes
require("./server/routes/product.routes")(app)







app.listen(port, ()=>console.log(`listening on port ${port}`))