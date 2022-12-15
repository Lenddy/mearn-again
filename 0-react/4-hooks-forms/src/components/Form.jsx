import { useState } from "react";

const Form = (props)=>{
    let [stateName,setName] = useState("")
    let [stateLName,setLName] = useState("")
    let [stateSpecies,setSpecies] = useState("")
    let [stateDob,setDob] = useState("")
    return(
        <div className="container">
            <h1>fill this form to create an account</h1>
            <form>
                <div className="form-group">
                    <label >name</label>
                    <input type="text" name="" id=""  className="form-control" onChange={(e)=>setName(e.target.value)}/>
                </div>

                <div className="form-group">
                <label >Last Name</label>
                <input type="text" name="" id=""  className="form-control" onChange={(e)=>setLName(e.target.value)}/>
                </div>

                <div className="form-group">
                    <label >species</label>
                    <select className="form-select" onChange={(e)=>setSpecies(e.target.value)}>
                        <option value="" disabled selected hidden >select</option>
                        <option value="human" >human</option>
                        <option value="non-human" >non-human</option>
                    </select>
                </div>

                <div className="form-group">
                    <label>dob</label>
                <input type="date" name="" id="" className="form-control" onChange={(e)=>setDob(e.target.value)}/>
                </div>

                <input type='submit' className="btn btn-success mt-3" />
            </form>
            <hr/>
            <div>
                <h1>name {stateName}</h1>
                <h1>last name {stateLName}</h1>
                <h1>species {stateSpecies}</h1>
                <h1>dob {stateDob}</h1>
            </div>
        </div>
        
    )
}


export default Form;