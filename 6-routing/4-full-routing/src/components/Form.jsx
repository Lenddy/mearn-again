import { useState, useEffect } from "react";
import {useNavigate} from "react-router-dom"
import axios from 'axios';

const Form = ()=>{
    const navigate = useNavigate()
    const [pokemon,setPokemon] = useState([])
    const [name,setName] = useState("")

    useEffect(()=>{
        axios.get("https://pokeapi.co/api/v2/pokemon?limit=1000")
        .then(res=>{
            console.log(res)
            setPokemon(res.data.results)
        })
        .catch(err =>{
            console.log("there is an error check the url",err)
        })
    },[])

    const submit = (e)=>{
        e.preventDefault();
        navigate(`/${name}`)

    }


    return(
        <div>
            <form className="form-group" onSubmit={submit} >
                <label htmlFor="">search for:</label>
                <select className="form-select" onChange={e=>{setName(e.target.value)}} >
                    {
                        pokemon.map((p,idx)=>{
                            return(
                                <>
                                <option key={idx}  value={p.name}>{p.name}</option>
                                </>
                            )
                        })
                    }
                </select>
                <button className="btn btn-success" >search</button>

            </form>

        </div>
    )
}

export default Form;