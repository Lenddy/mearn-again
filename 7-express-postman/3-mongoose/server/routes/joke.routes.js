//importing the controller so the routes  knows about them 
const jokeController = require("../controllers/joke.controller");


module.exports = (app)=>{
    app.get("/api",jokeController.message);
    app.get("/api/Jokes",jokeController.allJokes)
    app.get("/api/jokes/:id",jokeController.oneJoke)
    app.post("/api/jokes/create",jokeController.createJoke)
    app.put("/api/jokes/update/:id",jokeController.updateJoke)
    app.delete("/api/jokes/delete/:id",jokeController.deleteJOke)
}