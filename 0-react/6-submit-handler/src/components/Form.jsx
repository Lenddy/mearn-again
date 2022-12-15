import { useState } from "react";

const Form = ()=>{
    let [name,setName] = useState("")
    let [lName,setLName] = useState("")
    let [age,setAge] = useState("")
    let [eyeColor,setEyeColor] = useState("")

    let [listOfPeople,setListOfPeople] =useState([])//creating a list where we are going to store dictionary's

    const submitHandler =(e)=>{
        e.preventDefault();//creating a function were we are going to prevent the default way that the submission works so the page dont reload
        console.log("the form was submitted" )
        let pOject ={//creating an object so that we we submit the form a new objet is created
            name,lName,age,eyeColor
        };
        setListOfPeople([...listOfPeople,pOject]);// updating the list of object that we created with that new object that are being submitted//!we make a copy of all that objects that are already in that array and we add a new one when we make a submission 

        alert("hello")
        
    }

    return(
        <div className="container">
                <form className="from-group" onSubmit={submitHandler} >
                    <div>
                        <label>Name</label>
                        <input type="text" name="" id="" className="form-control" onChange={(e)=>setName(e.target.value)}  />
                    </div>
                    <div>
                        <label htmlFor="">last name</label>
                        <input type="text" name="" id="" className="form-control" onChange={(e)=>setLName(e.target.value)}/>
                    </div>
                    <div>
                        <label htmlFor="">age</label>
                        <input type="number" name="" id="" className="form-control"onChange={(e)=>setAge(e.target.value)} />
                    </div>
                    <div>
                        <label htmlFor="">eye color</label>
                        <input type="text" name="" id="" className="form-control" onChange={e=>setEyeColor(e.target.value)}/>
                    </div>
                    <div>
                        <button className="btn btn-success"> click to add person</button>
                    </div>
                </form>

                    <div>
                        <p>name {name}</p>
                        <p>Last name {lName}</p>
                        <p>age {age}</p>
                        <p>eye Color {eyeColor}</p>
                        {
                            listOfPeople.map((p,index)=>{
                                return(
                                    <div key={index}>
                                        <h3>{p.name}</h3>
                                    </div>
                                )
                            })
                        }
                    </div>
            </div>
    )
}


export default Form;