import React from 'react';
import { useEffect,useState } from 'react';
import { Link, useNavigate,useParams } from 'react-router-dom';
import axios from 'axios';

const Update = () => {
    const navigate = useNavigate()
    const {id} = useParams()
    const [product,setProduct] = useState({})
    const [notFound,setNotFound]= useState(false)

    useEffect(()=>{
    axios.get(`http://localhost:8000/api/products/${id}`)
    .then(res =>{
        console.log("show one response", res )
        if(res.data.results){
        setProduct(res.data.results)
        }else{
            setNotFound(true)
        }
    }).catch(err=>console.log("there was an error getting one product",err))
    },[])

        const changeHandler = (e) =>{
            setProduct({
                ...product,
                [e.target.name]: e.target.value
            })
        }

        const deleteHandler = () =>{
            axios.delete(`http://localhost:8000/api/products/delete/${id}`)
            .then(res=>{
                console.log(res)
                navigate("/")
            }).catch(err=>console.log(err))
        }



        const submitHandler = (e) =>{
            e.preventDefault()
            axios.put(`http://localhost:8000/api/products/update/${id}`,product)
            .then(
                res =>{ console.log("this is the response",res)}
            )
            .catch(err=>{console.log(err)})
            navigate(`/products/${id}`)
        }

    return (
        <div>

            <div>
                <Link to={"/"} > <button>home</button></Link>
                <button onClick={deleteHandler} >delete {product.name}</button>
            </div>
            {
                notFound?<img src="https://www.google.com/imgres?imgurl=https%3A%2F%2Fmedia0.giphy.com%2Fmedia%2Fg7GKcSzwQfugw%2Fgiphy.gif&imgrefurl=https%3A%2F%2Fgiphy.com%2Fexplore%2Frick-roll&tbnid=TO273jtapt1rtM&vet=12ahUKEwiHi7Sdz6H8AhVLO98KHVniCKAQMygBegUIARDmAQ..i&docid=wWvRaA2Pn6yDIM&w=250&h=212&q=rick%20roll%20gif&ved=2ahUKEwiHi7Sdz6H8AhVLO98KHVniCKAQMygBegUIARDmAQ" alt="get rick roll" />:
            <form  onSubmit={submitHandler} >
                <div> 
                    <label htmlFor="">title</label>
                <input type="text" name="title"  value={product.title}  placeholder={product.title} onChange={changeHandler} />
                    {/* <p style={{color:"red"}} >{fromErrors.title?.message}</p> */}

                </div>
                <div>
                <label htmlFor="">price</label>
                <input type="number" name="price"  value={product.price} placeholder={product.price} onChange={changeHandler}/>
                    {/* <p style={{color:"red"}}> {fromErrors.price?.message} </p> */}
                </div>

                <div>
                <label htmlFor="">description</label>
                <textarea type="text" name="description"  rows="4" cols="50" value={product.description} placeholder={product.description} onChange={changeHandler} />
                {/* <p style={{color:"red"}} >{fromErrors.description?.message}</p> */}
                </div>
                <button >update</button>
            </form>
                }

        </div>
    );
};



export default Update;



