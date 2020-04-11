import React from "react"
import BitCoinPriceLogicContainer from "./logicContainer"

//Componente Tanto
//Componente Presentacional
const _renderCurrencies = (bpi) => (
    Object.keys(bpi).map(currency => (
       <div key={currency}>
        1 BTC is {bpi[currency].rate}
        <span> {bpi[currency].code}</span>
       </div>
    ))
  )

  function BitCoinLayaoutContainerStateless  (props) {
      return (   
    <div>
      <h4>Bitcoin Price Index</h4>
      {_renderCurrencies(props.bpi)}
    </div>
    )
}

  export default BitCoinLayaoutContainerStateless



