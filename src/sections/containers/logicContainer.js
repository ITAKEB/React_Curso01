import React,{Component} from "react"

import BitCoinPriceLayaoutContainer from "./layaoutContainerStateless.js"


//Componente Listo
//Componente Lógico
class BitCoinPriceLogicContainer extends Component{
    state = {bpi:{}}
    componentDidMount(){
    fetch("https://api.coindesk.com/v1/bpi/currentprice.json")
    .then(res => res.json())
    .then(data =>{
        const bpi = data.bpi
        this.setState({bpi:bpi})
    })
    }

    render(){
        return(
            <div>
                <BitCoinPriceLayaoutContainer bpi={this.state.bpi}></BitCoinPriceLayaoutContainer>
            </div>
        )
    }
}

export default BitCoinPriceLogicContainer