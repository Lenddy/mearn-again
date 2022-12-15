import { useState } from "react";

const Form = ()=>{

    let [name,setName] = useState("")
    let [lName,setLName] = useState("")
    let [age,setAge] = useState("")
    let [nationality,setNationality] = useState("")

    let [lOP,setLOP] = useState([]);

    const submit =(e)=>{
        e.preventDefault()
        let person ={name,lName,age,nationality};
        setLOP([...lOP,person])
    }


    let deletePerson =(e,idx)=>{
        //make a copy of the array using [... array name] spread operator //modify the copy
        let copy =lOP.filter((person,i)=>{
            return i !== idx
        })
        //use the set variable to update the array
        setLOP(copy)
    }

    return(
        <div className="container">
            <form onSubmit={submit} className="form-group">
                <div>
                    <label>name</label>
                    <input type="text" name="" id="" className="form-control" onChange={e=>setName(e.target.value)} />
                </div>
                <div>
                    <label>last name</label>
                    <input type="text" name="" id="" className="form-control" onChange={e=>setLName(e.target.value)}/>
                </div>
                <div>
                    <label>age</label>
                    <input type="number" name="" id="" className="form-control" onChange={e=>setAge(e.target.value)}/>
                </div>
                <div>
                    <label>nationality</label>
                    <input type="text" name="" id="" className="form-control" onChange={e=>setNationality(e.target.value)}/>
                </div>
                    <button className="btn btn-success">submit</button>
            </form>
            <div className="person">
            {
                lOP.map((p,idx)=>{
                    return(
                        <div key={idx} className="p">
                            <h3>{p.name} {p.lName}</h3>
                            <button className="btn btn-danger" onClick={e=>deletePerson(e,idx)}>delete</button>
                        </div>
                    )
                })
            }
            </div>
        </div>
    )

}


export default Form;

