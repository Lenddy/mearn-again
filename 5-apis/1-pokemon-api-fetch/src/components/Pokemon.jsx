import { useState } from "react";


const Pokemon = ()=>{

    let [pokemon,setPokemon] =useState([]);

    const getPokemon = ()=>{
        
        fetch("https://pokeapi.co/api/v2/pokemon?limit=1000")
            .then((data)=>{return data.json()})
            .then(data=>{
                console.log("this is the data" , data)
                setPokemon(data.results)
            }).catch(err=>{console.log('there is an error getting the data check the url =>',err)})
    }
    return(
        <div>
            <h1>pokemon api with fetch</h1>
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


export default Pokemon; 