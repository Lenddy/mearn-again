//imports
const express = require("express")
const  app = express();
const port = 8000

//to connect to mongoDb(data base)
require("./server/config/mongoose.config")

//to be able to use post urls
app.use(express.json())
app.use(express.urlencoded({extended:true}))




require("./server/routes/joke.routes")(app) //here we are importing the routes folder and passing app as a parameter so it knows what app is 


app.listen(port,()=>console.log(`listening on port ${port} `))
