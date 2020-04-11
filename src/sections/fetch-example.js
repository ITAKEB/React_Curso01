import React, {Component } from "react";


class FetchExample extends Component{
    state = {bpi : {}}

    componentDidMount(){
        fetch("https://api.coindesk.com/v1/"
        +"bpi/currentprice.json")
        .then((res)=>res.json())
        .then((data)=>{
            const {bpi} = data
            this.setState({bpi:bpi})
            console.log(this.bpi)
        })

    }

    renderCurrencles(){
        const {bpi} = this.state
        const currencias = Object.keys(bpi)
        return currencias.map(currency=>(
            <div key={currency}>
                1 BitCoin es: {bpi[currency].rate}
            <span>
                {" "+ currency}
            </span>
            </div>
                            
        ))
    }
    render(){
        return(
            <div>
                <h4>FetchExample</h4>
                {this.renderCurrencles()}
            </div>
        )
    }
}

//aquí se exporta el componente para poder 
//importarlo desde App.js
export default FetchExample