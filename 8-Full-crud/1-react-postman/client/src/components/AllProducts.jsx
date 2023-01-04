import {useState,useEffect} from "react"
import axios from "axios"
import {Link} from "react-router-dom"

const AllProduct = ()=>{
    const [Product,setProduct] = useState([])
    const [deleted,setDeleted] = useState(false)

    useEffect(()=>{
        axios.get("http://localhost:8000/api/products")
        .then(
            res =>{
                console.log("this is the result",res)
                setProduct(res.data.results)
            }
        ).catch(err => console.log( "there was an error",err))
    },[deleted])

    const deleteHandler = (id)=>{
        axios.delete(`http://localhost:8000/api/products/delete/${id}`)
        .then(res =>{
            console.log(res)
            setDeleted(!deleted)
        }).catch(err=>console.log(err))
    }

    return(
        <div>
            <Link to={"/product/create"} >  <button> create a product</button> </Link>
            {
                Product.map((p,idx)=>{
                    return(
                        <div key={p._id}>
                            <h1>{p.title}</h1>
                            <Link to={`/products/${p._id}`}  ><button>see Product</button></Link>
                            <Link to={`/products/edit/${p._id}`}  ><button>edit Product</button></Link>
                            <button onClick={()=>{deleteHandler(p._id)}} > delete {p.title} </button>
                            <hr/>
                        </div> 
                    )
                })
            }
        </div>
    )
}

export default AllProduct;