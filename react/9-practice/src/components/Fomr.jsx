import { useState} from "react";


let color = ""
const Form =()=>{
    let [name,setName] = useState("");
    let [lName,setLName] = useState("");
    let [age,setAge] = useState("");
    let [lista,setLista] = useState([]);
    let [over,setOver] = useState(false)
    let [darkMode,setdarkMode] = useState(false)


    const  submit = (e)=>{
        e.preventDefault()

        let persona ={name,lName,age,over};
        setLista([...lista,persona])
    }

    const deleteOne =(e,idx)=>{
        let copy = lista.filter((p,i)=>{
            return i !==idx
        })
        setLista(copy)
    }

    const toggleOver =(e,idx)=>{
        //we make a copy of the array
        let copy = [...lista];

        // we modify the new copy
        copy[idx].over = e.target.checked;

        setLista(copy)
    }

    const darkMode1 =(e)=>{
        
        if(e.target.checked){
            color = "#121212"
            console.log(color)
        }
        else{
            color = ""
            console.log(color)
        }
    }



    return(
        <div className="dark" style={{backgroundColor:{color}}}>
                <input type="checkbox" onClick={ e=>darkMode1(e)} />
            <form className="form-group" onSubmit={submit}>
                <div className="Container">
                <label>nombre</label>
                <input type="text"className="form-control" onChange={(e)=>setName(e.target.value)}/>
                {name.length >0 && name.length < 3? <p className="text-danger"> nombre nesecita ser por lo menos 3 caracteres</p>:
                null
                }
                </div>
                <div>
                <label>apellido</label>
                <input type="text"className="form-control" onChange={(e)=>setLName(e.target.value)}/>
                {lName.length >0 && lName.length < 3? <p className="text-danger"> apllido nesecita ser por lo menos 3 caracteres</p>:
                null
                }
                </div>
                <div>
                <label>edad</label>
                <input type="number"className="form-control" onChange={(e)=>setAge(e.target.value)}/>
                {age > 0 && age < 10? <p className="text-danger"> nesecitas tener por lo menos 18 años de edad</p>:
                null
                }
                </div>
                <button className="btn btn-success mt-4"  >agregar</button>
            </form>
            {
                lista.map((p,idx)=>{

                    return (
                        <div key={idx} className="container">
                            <h2 style={{}}> {p.name} {p.lName}</h2>
                            <div style={{backgroundColor: p.over?"red" : "gray",color:p.over ?"blue":"red"}}>
                                <label>sobre 18</label>
                                <input type="checkbox" name="" id="" onClick={(e)=>{toggleOver(e,idx)}}  />
                            </div>
                            <button className="btn btn-danger mt-2" onClick={(e)=>deleteOne(e,idx)}>borrar</button>
                        </div>
                    )
                })
            }
        </div>
    )

}


export default Form