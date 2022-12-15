import { useState } from "react";

const  Practice = (props)=>{

    let [stateName,setName] = useState("")


    return (
        <div>
            <h1>welcome {props.name}</h1>
            <div className="">
                <div className="container">
                    <label > name</label>
                    <input type="text" className="form-control" onChange={(e)=>setName(e.target.value)}  placeholder="give me a name" />
                    {
                        stateName.length > 0 && stateName.length < 3? <p className="text-danger">must be at lest 3 character long</p>:null
                    }
                </div>
            </div>
            {
            stateName.length >= 3?
                <p>hello {stateName}</p>:
                null
            }
        </div>
    )
}


export default Practice;