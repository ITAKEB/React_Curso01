import React,{Component} from "react"

class BotonQueLanzaError extends Component{
    state = {throwError:false}

    render(){
        if(this.state.throwError){
            throw new Error("Error lanzado por el botón")
        }
        return(
            <button 
            onClick={()=>this.setState({throwError:true})}>
                Tirar mensaje de error 
            </button>
        )
    }
}

class EjemploComponentDidCatch extends Component{
    state ={hasError: false , errorMsg:""}


    /* Una vez que el componente detecte un error
    en los componentes Children y evitar que se 
    descomponga por completo el componente padre 
    
    Este entra a componentDidCatch() y ejecuta 
    el código que sea neccesario
    por ejemplo, en éste el state de hasError es true
    renderiza un código que dice que ocurrió un error
    y da la opción de devolverse a la parte dónde el error
    no ocurría (hasError = false)


    */
    componentDidCatch(error,errorInfo){
        console.log("componentDidCatch")
        console.log(error)
        console.log(errorInfo)

        this.setState({hasError:true, errorMsg: error.toString()})
        
    }

    render(){
        if(this.state.hasError){
            return(
            <dvi>
                <p>{this.state.errorMsg}</p>
                <button onClick={()=>this.setState({hasError:false})}>Volver a la aplicación</button>
            </dvi>
            

            )
        }
        return(
            <div>
                <h4>
                    Componente Did Catch
                </h4>
                <BotonQueLanzaError></BotonQueLanzaError>
            </div>
        )
    }
}

export default EjemploComponentDidCatch