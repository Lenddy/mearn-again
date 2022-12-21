
import {useState,useEffect } from 'react';
import {useParams} from "react-router-dom"
import axios from "axios";

const Result = () => {
    let {option,Id} =useParams()
    let [starWars, setStarWars] = useState()
    useEffect(()=>{
        axios.get(`https://swapi.dev/api/${option}/${Id}`)
        .then(res=>{
            console.log(res);
            setStarWars(res.data);
        })
        .catch(err=>{
            console.log("there is an error some where check the url for problems" , err)
        })
    },[option,Id])

    return (
        <div> 
            {
            <h1>{starWars.name}</h1>
            }
            {/* {
                starWars.map((s,idx)=>{
                    return(
                        <div key={idx}>
                            <h1>{s.name}</h1>
                        </div>
                    )
                })
            } */}
            
        </div>
    );


};


export default Result;