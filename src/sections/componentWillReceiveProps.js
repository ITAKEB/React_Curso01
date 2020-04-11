import React, { Component } from "react"
import PropTypes from "prop-types"

const animalsImages ={
    gato:"url",
    delfin:"url",
    panda:"url",
    perro: "url",
    pato:"url"
}

const objecKeys = Object.keys(animalsImages)

class ComponentWillReceiveProps extends Component{
    //busca en el objeto animalsImages de arriba con []
    //según el estado de prop que se le es enviado desde App.js
    state={src: animalsImages[this.props.animals]}
    
    

    //este motedo o función detecta cuando las props que le llegan
    //cambian y apartir de esos  ejecuta cierto código
    //aparte hay que tener en cuenta que no importa
    //si el antiguo prop es el mismo que el nuevo
    //cuando el metodo detecta que le llegan nuevos props se ejecuta

    componentWillReceiveProps(nextProps){
        console.log(this.state.src)
        this.setState({src: animalsImages[nextProps.animals]})
    }

    render(){
        return(
            
            <div>
                <h4>Component Will Receive Props</h4>        
                <p> Esto es un {this.props.animals}</p>
                <img alt={this.props.animals} src={this.state.src} width="250px"></img>
                </div>
            )
            
    }
}

//Se define que a la prop animals solo le pueden llegar valor 
//tipo gato,delfin o panda con medio de propTypes
ComponentWillReceiveProps.propTypes ={
    animals: PropTypes.oneOf(objecKeys)

}

//Se le pone por defecto el valor panda a la prop animals
//por si en algún momento no se le pasa esta desde App.js

class AnimalButtoms extends Component {
    state={animals:"panda"}

    _renderAnimalButton = (animals)=>{
      return(
       <button 
        disabled={animals===this.state.animals}
        key={animals}
        onClick={()=>this.setState({animals})}>
        {animals}
        </button>
      )
    }
  
    render(){
      //console.log("Render")
      return(
        <div className="App"> 
          {objecKeys.map(animals=>this._renderAnimalButton(animals))}
         <ComponentWillReceiveProps animals={this.state.animals}></ComponentWillReceiveProps>
        </div>
      )
    }  
  }

export default AnimalButtoms


