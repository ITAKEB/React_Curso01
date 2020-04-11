import React,{Component} from "react"

/* Es mucho mejor tener los componentes por separados
en:

Contenedor layaout: es el que está relacionado 
con todo lo visual y tiene como props lo que le
envia el logic container

Contendor logic: es el contenedor que es el encargador
de todo lo lógico y enviarselo como prop a el contenedor
layaout para que convierta la información en lo visual 
va ser exoportado
*/

//Componente Tanto
//Componente Presentacional

class BitCoinPriceLayaoutContainer extends Component{

    _renderCurrencies(){
        const bpi = this.props.bpi
        
        console.log(
            Object.keys(bpi).map(
                currency=>(
                    bpi[currency]
                )
            )
        )

        return Object.keys(bpi).map(
            currency=>(
                <div key={currency}>
                    1 BTC es {bpi[currency].rate}
            <span> {currency}</span>
                </div>
            )
        )
    }



    render(){
        return(
        <div>
            <h4>Bitcoin Price</h4>
            {this._renderCurrencies()}
        </div>
        )
    }
}
export default BitCoinPriceLayaoutContainer