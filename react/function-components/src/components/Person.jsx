// import { useState } from "react"; //to be able to use state variables in function components

// const Person =(props)=>{
//     let {name,age,children}=props
//     //this is how we use state in function components
//     let [stateAges, setAge] = useState(age) 
//     let increase = ()=>{setAge(stateAges + 1); console.log(stateAges)}

//     return(
//         <div>
//             <h1>hello my name is {name}</h1>
//             <h1>and my age is {stateAges}</h1>
//             {children}
//             <button onClick={increase} >click me </button>
//         </div>
//     )
// }


// export default Person



import { useState } from "react"


const Person =(props)=>{
    let {name,age,children} = props
    let [stateAge,setAge] = useState(age)

    let ageUp = ()=>{
        setAge(stateAge + 1)
    }
    return (
        <div>
            <h1> my name is {name}</h1>
            <h1> my age is {stateAge}</h1>
            <button onClick={ageUp} > click for age to go up</button>
            <br/>
            some more info {children}
        </div>
    )
}


export default Person;