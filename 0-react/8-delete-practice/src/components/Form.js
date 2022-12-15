import {useState} from "react"

const Form =()=>{
    let [name,setName] = useState("");
    let [lName,setLName] = useState("");
    let [age,setAge] = useState("");

    let [listOP,setListOP] = useState([])

    const submit =(e)=>{
        e.preventDefault() //you may want to take the parentheses out

        let people = {name,lName,age};

        setListOP([...listOP,people])

    };

    const deleteP = (idx) =>{
        let copy = listOP.filter((p,i)=>{
            return i !== idx
        })

        setListOP(copy);
    }

    return(
        <div>
            <form onSubmit={submit}>
                <div>
                    <label htmlFor="">name</label>
                    <input type="text" onChange={e=>setName(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="">last name</label>
                    <input type="text" onChange={e=>setLName(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="">age</label>
                    <input type="number" onChange={e=>setAge(e.target.value)} />
                </div>
                <button>submit</button>
            </form>
            {
                listOP.map((p,idx)=>{
                    return(
                        <div key={idx}>
                            <h1>{p.name} {p.lName} {p.age}</h1>
                            <button onClick={()=>deleteP(idx)}>delete</button>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Form;