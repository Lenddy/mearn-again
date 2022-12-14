import { useState } from "react"

const Crypto = ()=>{
    
    let [coin, setCoin] = useState([])
    // A promise is something that if promise to you but you dont know when it will arrive //! like an api call 
    //*a promise is  a workflow. you make the computer run(do) other things(code) will it waits for the information that it was promise from the api
    //todo->          api   ==   application programing interface
    // an api call is //! a request to an external sours or data base  to make use of it 

        const getData = ()=>{
            fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false")
                .then(//after we get the data
                    data =>{
                        return data.json({}) //this is so that the computer can read the response(data) as json(dictionary)
                    }
                ).then(data=>{
                    console.log(`this is the response `,data)
                    setCoin(data) //saving the data from the the api call into a state variable
                }).catch(err=>{ //in case something goes wrong with the api 
                    console.log(`something happened getting the api call check the url to see if it is spell wrong `, err)
                })
        // asynchronous code is code that runs different of the order that it was written in example this should come after the api call but comes before//! this is us waiting for the  promise
                console.log("this should come after the api call")
    }

    return(
        <div>
        <button onClick={getData} > click to get a crypto info</button>
        <hr/>
        {
            coin.map((c,idx)=>{
                return(
                    <div key={idx}>
                        <h1>{c.name}</h1>
                        <img src={c.image}  alt=""/>
                        <h2>{c.current_price}</h2>
                        <hr/>
                    </div>
                )
            })
        }
        </div>
    )
}

export default Crypto;