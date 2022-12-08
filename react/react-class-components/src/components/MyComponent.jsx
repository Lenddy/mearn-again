import  React,{Component} from "react"
class MyComponent extends Component{
    constructor(props){
        super(props)
        this.state = {
            age: this.props.age
        }
    }
    render(){
        return (
            <div>
                <h1>hello my name is {this.props.name}</h1>
                <h1>and my age is {this.state.age}</h1>
                {this.props.children}
                <button onClick={()=>{this.setState({age: this.state.age +1 }); console.log(`age is going up ${this.state.age + 1}`)}} > click for age to go up</button>
            </div>
        )
    }
}


export default MyComponent; 