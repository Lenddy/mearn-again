const express = require("express");
const app = express();
const port = 8000;
//to be able to use post rotes
app.use(express.json())
app.use(express.urlencoded({extended:true}))


//hard coded data
const people = [
    {Name:"Lenddy",age: 19},
    {Name:"rady",age: 19},
    {Name:"Luis",age: 26},

]


//get all route
app.get("/api/people",(req,res)=>{
    res.json({
        count:people.length,
        result: people
    })
})


//get one route
app.get("/api/people/:id",(req,res)=>{
    res.json({
    result: people[req.params.id]
    })
})


//post route

app.post("/api/people/new",(req,res)=>{
    people.push(req.body)
    res.json({
        count: people.length,
        result: people
    })
})


//update route
app.put("/api/people/edit/:id",(req,res)=>{
    people[req.params.id] = req.body
    res.json({
        count: people.length,
        result: people
    })
})



// delete route 

app.delete("/api/people/delete/:id",(req,res)=>{
    people.splice(req.params.id,1)
    res.json({
        count: people.length,
        result: people
    })
})












app.listen(port,()=>{console.log(`listening on port ${port}`)})