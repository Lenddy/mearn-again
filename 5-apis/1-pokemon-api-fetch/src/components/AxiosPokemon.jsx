import { useState } from "react";
//you need to install axios  npm install axios
//and then import it 

import axios from "axios"

const AxiosPokemon = ()=>{

    let [pokemon,setPokemon] =useState([]);

    const getPokemon = ()=>{
        
        axios.get("https://pokeapi.co/api/v2/pokemon?limit=1000")
            // .then((data)=>{return data.json()})
            .then(data=>{
                console.log("this is the data" , data)
                setPokemon(data.data.results)
            }).catch(err=>{console.log('there is an error getting the data check the url =>',err)})
    }
    return(
        <div> <h1>Pokemon api with axios</h1>
            <button onClick={getPokemon} >call all the pokemons</button>
            {
                pokemon.length!== 0?pokemon.map((p,idx)=>{
                    return(
                        <div key={idx} style={{border:"solid 1px black"}} >
                            <h1>{p.name} {idx}</h1>
                            <a href={p.url}> see full details about this pokemon </a>
                        </div>
                    )
                }):<><h1>there are no pokemon available at the moment press the button</h1></>
            }
        </div>
    )
}


    export default AxiosPokemon; 