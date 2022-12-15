import { useState } from "react";

const Human = () =>{
    let [name,setName]=useState("")
    let [LName,setLName]=useState("")
    let [select,setSelect]=useState("")
    return(
        <div className="container">
            <h1>this is a new form for practice</h1>
            <form className="form-group">
                <div>
                    <label >what is your name</label>
                    <input type="text" className="form-control" onChange={(e)=>setName(e.target.value)} />
                    {
                        name.length >0 && name.length  < 3? <p className="text-danger">name must be at lest 3 characters long</p>:
                        null
                    }
                </div>

                <div>
                    <label >what is your last name</label>
                    <input type="text" className="form-control" onChange={(e)=>setLName(e.target.value)} />
                    {
                        LName.length > 0 && LName.length <3? <p className="text-danger">name must be at lest 3 characters long</p>:null
                    }
                </div>

                <div>
                    <label >select something</label>
                    <select name="" id="" className="form-select" onChange={(e)=>setSelect(e.target.value)} >
                        <option value="" selected disabled hidden > select something</option>
                        <option value="item1"> item1</option>
                        <option value="item2" >item2</option>
                    </select>
                    {
                    select === null || select ===""? <p className="text-danger"> you must select a values </p>:
                    <p>thanks</p>
                    }
                </div>
                <button  className="btn btn-danger" >click me </button>
            </form>


            <p>{name}</p>
            <p>{LName}</p>
            <p>{select} </p>
        </div>
    )
}



export default Human;