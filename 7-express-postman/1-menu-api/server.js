const express = require("express");   //this is how you import things on the backend //here we are importing express
const app = express()// here we are initializing express and storing it in a variable call app
const port = 8000 // here we are specifying what port our backend app is going to run in //! dont use port 3000 rect runs in t 

//!this goes after the imports and before the routes
//to be able to make post request
app.use(express.json())
app.use(express.urlencoded({extended:true}))


//now we can use a lot of build in methods by using app.   



// we are making hardCoded data because we don't have a database to get it from

const items = [
    {Name:"pizza",price: 10.00},
    {Name:"cheeseBurger",price: 5.00},
    {Name:"ham",price: 1.00}
]



//this appears in  http://localhost:8000/api
app.get("/api",(req,res)=>{
    res.json({message: "holaaaa"})
})


//get all route
app.get("/api/items",(req,res)=>{
    res.json({
        count: items.length,
        results:items
    })
})


//get one routes
app.get("/api/items/:id",(req,res)=>{
    // if(req.params.id > 2){
    //     req.params.id = 2
    // }
    res.json({
        result: items[req.params.id] //here we are requesting the url parameter so we can use it 
    })
})


//post route

app.post("/api/items",(req,res)=>{
    // res.json()
    console.log(req.body)
    items.push(req.body)
    
    res.json({//responding with the items that are in the api + the new item that was added
        count: items.length,
        results:items
    })
})



// update route
app.put("/api/items/:id",(req,res)=>{
    //we need to get a specific item by their id //and then updating the information with the information that was inputted in the body 
    items[req.params.id] = req.body

//responding with the items that are in the api + the new item that was added
    res.json({
        count: items.length,
        results:items
    })
})



//delete route
app.delete("/api/items/delete/:id",(req,res)=>{
    //here we are removing and index(item) using splice 
    items.splice(req.params.id,1) // splice takes 2 parameter the idex that you want to remove and the number of thing that you want to remove

    res.json({
        count: items.length,
        results:items
    })
})












// this needs to be the last line 
app.listen(port,()=>console.log(`listening on port ${port}`))