// A promise is something that if promise to you but you dont know when it will arrive //! like an api call 

//*a promise is  a workflow. you make the computer run(do) other things(code) will it waits for the information that it was promise from the api

//todo->          api   ==   application programing interface
// an api call is //! a request to an external sours or data base  to make use of it 


fetch("https://pokeapi.co/api/v2/pokemon/ditto")
    .then( //after we get the data
    data =>{
        return data.json() //this is so that the computer can read the response(data) as json(dictionary)
    }

    )


