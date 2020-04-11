import React,{Component} from "react"
import PropTypes from "prop-types"


class ComponenteDesmontar extends Component{
    state={windowWidth :0}

    _updateStateWithWindoeWidth = ()=>{
        this.setState({windowWidth: document.body.clientWidth})
    }

    componentDidMount(){
        this._updateStateWithWindoeWidth()
        window.addEventListener(
            "resize",
            this._updateStateWithWindoeWidth
        )
    }

    /*
    Este metodo se da cuenta cuando el componente
    es desmontado y entonces procede a ejecutar
    cierta parde del código 
    Usualmente es para liberar subscripciones
    del elemento y funciones del componente
    que fue desmontado

    Se utuliza para desuscribirse de los metodos
    que no se utilzan cuando ya los hemos desmontado
    
    Eliminar ciertos elementos que no estamos controlando
    con React

    Cancelar peticiones externas

    Liberar intervalos que ya no estamos utilizando más
    */
    componentWillUnmount(){

        console.log("componentWillUnmount")
        window.removeEventListener(
            "resize",
            this._updateStateWithWindoeWidth
        )
    }


    render(){
        return(
            <div>
                <p>Componente Desmontar</p>
                <div>
                    El ancho de la venta es 
                    {` ${this.state.windowWidth}`}       
                </div>
            </div>
        )
    }
}

class EjemploComponentWillUnmount extends Component{
    state = { mostrarComponent: true}


    render(){
        if(this.state.mostrarComponent){
        return(
            <div>
                <h4>Component Will Unmount</h4>
                <ComponenteDesmontar></ComponenteDesmontar>
                <button 
                onClick={()=>this.setState({mostrarComponent:false})
                }>Desmontar Componente</button>
            </div>
        )
        }else{
            return(
                <p>El componente se desmontó</p>
            )
        }
    }
}


export default EjemploComponentWillUnmount


