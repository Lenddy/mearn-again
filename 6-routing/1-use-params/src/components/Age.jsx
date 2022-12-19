import {useParams} from "react-router-dom"

const Age =() =>{
    const {num} = useParams()

    return(
        <div>{
            isNaN(num)?
            <h1>there is no number inserted in you url    or  the value inserted is not a number</h1>:
            <h1>the number in the url that you inserted is {num}</h1>
            }
        </div>
    )
}

export default Age