//the controller need to be able to reach the model file so it can use it 
const Joke = require("../models/jokes.model")
const jokeRoutes = require("../routes/joke.routes")



module.exports.message = (req,res)=>{
    res.json({message : "hello from this api controler"})
}




module.exports.allJokes = (req,res)=>{
    Joke.find() //to fine all the jokes
    .then(allFoundJokes =>{ // when we get all the jokes we are going to return them as a json dictionary  as a response(res)
        res.json({
            count: allFoundJokes.length ,
            results: allFoundJokes
        })
    })
    .catch(
        err =>res.json({ //if there is an error getting the joke we`ll return a json dictionary with a message and the error as keys 
            message: "there was an error getting all the jokes",
            error: err
        })
    )
}



//for creating a joke
module.exports.createJoke = (req,res)=>{
    Joke.create(req.body)  //we pass in the information that is on form (req.body)
    .then(newJoke => {
        res.json({ // we return a json object with the new information    
            results: newJoke
        })
    })
    .catch(err=>{ // in case there is an error creating a joke
        res.json({message:"there was something wrong creating a joke", error: err})
    })
}



//for getting one joke by its id//it can be something ese thoo
module.exports.oneJoke = (req,res)=>{
    Joke.findOne({_id:req.params.id})  //getting a joke by its id in this occasion//*_id is how mongodb stores the ides 
    .then(joke =>{ //we return the joke that was found 
        res.json({
            results:joke
        })
    })
    .catch(err => res.json({//if something goes wrong retrieving the joke 
        message: "something went wrong getting one joke",error: err
    }))
}


//for updating one 
module.exports.updateJoke = (req,res)=>{
    Joke.findOneAndUpdate(//takes some parameters
        {_id:req.params.id},//getting the id from the url  so it know what to update
        req.body,//gets the information submitted from the form
        {new:true,runValidators:true}//returns the new information and runs the validations on ne new information 
    )
    .then(updatedJoke => {
        res.json({
            results:updatedJoke
        })
    })
    .catch(err => res.json({message:"there was an error updating the joke",error: err}))
}


//for deleting one 

module.exports.deleteJOke = (req,res)=>{
    Joke.deleteOne({_id: req.params.id})
    .then(deletedJoke => res.json({
        results:deletedJoke
    }))
    .catch(err => res.json({message:"there was an error deleting the joke",error: err}))
}