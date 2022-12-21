import { useNavigate ,Link} from "react-router-dom";



const Form = ()=>{
    const redirect = useNavigate()
    const submit = (e)=>{
        e.preventDefault()
        redirect("/home")
    }

    return(
        <div>
            <Link to="/home" > go to the home url </Link>

            <form onSubmit={submit}>
                <label htmlFor="">name</label>
                <input type="text" name="" id="" />
                    <button>submit</button>
            </form>
        </div>
    )



}



export default Form;