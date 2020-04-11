import React,{Component} from "react"
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
        console.clear()
        console.log("componentWillReceiveProps")
        console.log(this.state.src)
        this.setState({src: animalsImages[nextProps.animals]})
    }


    //evita el renderizado si devuelve false
    shouldComponentUpdate (nextProps,nexState){
        console.log("shouldComponentUpdate")
        //devuelve true cuando next props y las props 
        //antiguas son distinas si son iguales
        //devuelve false y evita un nuevo 
        //renderizado
        console.log(nextProps)
        console.log(nexState)
        return this.props.animals !== nextProps.animals
    }


    //Este metodo sirve para ejecutar algo en especifico
    //justo antes de que ocurra un renderizado
    componentWillUpdate(nextProps,nexState){
        
        console.log("componentWillupdate")
        console.log(nextProps)
        console.log(nexState)
    }

    //Este metodo se utiliza para consultar
    //las props y los elementos ya actualizados
    //Se ejecuta despues de la actualiazación
    //despues del render

    componentDidUpdate(prevProps,prevState){
        console.log("componentDidUpdate")
        console.log(prevProps)
        console.log(prevState)
    }
    render(){
        console.log("Render")
        return(  
            <div>
                <h4>Should Component Update</h4>        
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
        //disabled={animals===this.state.animals}
        key={animals}
        onClick={()=>this.setState({animals:animals})}>
        {animals}
        </button>
      )
    }
  
    render(){
      return(
        <div> 
          {objecKeys.map(animals=>this._renderAnimalButton(animals))}
         <ComponentWillReceiveProps animals={this.state.animals}></ComponentWillReceiveProps>
        </div>
      )
    }  
  }

export default AnimalButtoms
