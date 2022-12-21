import { useState} from "react"
import { useNavigate } from "react-router-dom";

const Form = ()=>{
    const [option,setOption] = useState("people")
    const [Id,setId] = useState("")
    const navigate = useNavigate()

    const submit = (e)=>{
        e.preventDefault()
        console.log(option,Id)
        navigate(`/${option}/${Id}`)
    }

    return(
        <div>
            <form  onSubmit={submit}>
                <label>Search for:</label>
                <select onChange={(e)=>{setOption(e.target.value)}}>
                    <option value="people">people</option>
                    <option value="planets">planets</option>
                    <option value="films">films</option>
                    <option value="species">species</option>
                    <option value="vehicles">vehicles</option>
                    <option value="starships">starships</option>
                </select>
                <label>Id:</label>
                <input type="number" onChange={(e)=>{setId(e.target.value)}}/>
                <button>search</button>
            </form>
        </div>
    )
}


export default Form;