import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Forms from "./sections/forms.js"
import PropTypes from "prop-types"
import FetchExample from "./sections/fetch-example.js"
import AnimalButtoms from "./sections/componetDidUpdate.js"
//import AnimalButtoms from "./sections/componentWillUpdate.js"
//import AnimalButtoms from "./sections/shouldComponentUpdate.js"
//import AnimalButtoms from "./sections/componentWillReceiveProps.js"
import EjemploComponentWillUnmount from "./sections/componentWillUnmount.js"
import EjemploComponentDidCatch from "./sections/componentDidCatch.js"
import BitCoinPriceLogicContainer from "./sections/containers/logicContainer.js"
class Button extends Component{
  render(){
      return(
          <div>
              <button 
              style={{borderColor:this.props.borderColor
              ,display:"block"}}>
              {this.props.label}
              </button>
          </div>
      )
  }
}

class App extends Component {

  render(){
    return(
      <div className="App"> 
        <BitCoinPriceLogicContainer></BitCoinPriceLogicContainer>
      </div>
    )
  }  
}

export default App;
