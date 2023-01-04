import React from 'react';
import { useEffect,useState } from 'react';
import { Link, useNavigate,useParams } from 'react-router-dom';
import axios from 'axios';

const ViewOne = () => {
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

    const deleteHandler = ()=>{
        axios.delete(`http://localhost:8000/api/products/delete/${id}`)
        .then(res=>{
            console.log(res)
            navigate("/")
        }).catch(err => console.log(err))
    }


    return (
        <div>
            <Link to={"/"} > <button>home</button></Link>
            <button onClick={deleteHandler} > delete {product.name}</button>

            {
                notFound? <img src="https://www.google.com/imgres?imgurl=https%3A%2F%2Fmedia0.giphy.com%2Fmedia%2Fg7GKcSzwQfugw%2Fgiphy.gif&imgrefurl=https%3A%2F%2Fgiphy.com%2Fexplore%2Frick-roll&tbnid=TO273jtapt1rtM&vet=12ahUKEwiHi7Sdz6H8AhVLO98KHVniCKAQMygBegUIARDmAQ..i&docid=wWvRaA2Pn6yDIM&w=250&h=212&q=rick%20roll%20gif&ved=2ahUKEwiHi7Sdz6H8AhVLO98KHVniCKAQMygBegUIARDmAQ" alt="get rick roll" />:
                <div>
                <hr/> 
                <h1>title: {product.title}</h1>
                <h1>price: {product.price}</h1>
                <h1>description: {product.description}</h1>
                </div>
            }

            
        </div>
    );
};



export default ViewOne;