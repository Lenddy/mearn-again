import { useState, useEffect } from "react"

const Api =()=>{
    let [Pokemon,SetPokemon] = useState([])


    useEffect(()=>{
        fetch("https://pokeapi.co/api/v2/pokemon/")
        .then((res)=>{
            return res.json()
        }).then(res=>{
            console.log("this is the response", res)
            SetPokemon(res.results)
        }).catch(err=>{
            console.log("there was an error somewhere" , err)
        })
    },[])


    return(
        <div>
        <h1>this are the pokemon</h1>
        {
            Pokemon.map((p,idx)=>{
                return (
                    <div key={idx}>
                        <h1>{p.name}</h1>
                        <p>{p.slot}</p>
                        <a href={p.url}> go see {p.name}</a>
                        <hr/>
                    </div>
                )
            })
        }
        </div>
    )
}

export default Api