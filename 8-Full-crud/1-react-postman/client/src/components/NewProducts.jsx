import {useState} from "react"
import axios from "axios"
import { useNavigate,Link } from "react-router-dom"

const NewProducts = ()=>{
    const navigate = useNavigate()
    const [fromInfo,setFromInfo] = useState({})
    const [fromErrors,setFromErrors] = useState({})

    const changeHandler = (e)=>{
        setFromInfo({
            ...fromInfo,
            [e.target.name]: e.target.value
        })
    }
    
    const submitHandler = (e)=>{
        e.preventDefault()
    axios.post("http://localhost:8000/api/products",fromInfo)
    .then(
        res =>{
            console.log("this is the result",res)
            if(res.data?.error){
                setFromErrors(res.data.error.errors)
            }else{
                setFromErrors({})
                navigate("/")
            }
        }
    ).catch(err => console.log( "there was an error",err))

    }

    return(
        <div>
            <div>
                <Link to={"/"} > <button>home</button></Link>
            </div>
            <form onSubmit={submitHandler}>
                <div>
                <label htmlFor="">Title</label>
                <input type="text" name="title" onChange={changeHandler}/>
                    <p style={{color:"red"}} >{fromErrors.title?.message}</p>

                </div>
                <div>
                <label htmlFor="">price</label>
                <input type="number" name="price"  onChange={changeHandler}/>
                    <p style={{color:"red"}}> {fromErrors.price?.message} </p>

                </div>
                <div>
                <label htmlFor="">description</label>
                <textarea type="text" name="description"  rows="4" cols="50" onChange={changeHandler}/>
                <p style={{color:"red"}} >{fromErrors.description?.message}</p>
                </div>
                <button >create</button>
            </form>

        </div>
    )
}

export default NewProducts;