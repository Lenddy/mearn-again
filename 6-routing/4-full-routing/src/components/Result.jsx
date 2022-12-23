import React,{useState,useEffect} from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Result = () => {
    const {name} = useParams()
    const [pokemon,setPokemon] = useState([])



    useEffect(()=>{
        axios.get(`https://pokeapi.co/api/v2/pokemon/${name}?limit=1000`)
        .then(res=>{
            console.log(res)
            setPokemon(res.data.abilities)
        }).catch(err=>{
            console.log("there is an error" , err)
        })
    },[name])



    return (
        <div>
            <h1>{name}</h1>
            <hr/>
            {
                pokemon.map((a,idx)=>{
                    return(
                        <div key={idx}>
                            <h4>{a.ability.name}</h4>
                        </div>
                    )
                })
            }
        </div>
    );
};



export default Result;