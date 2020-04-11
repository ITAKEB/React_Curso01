import React, {Component} from "react"

class LoginButtom extends Component{
    render(){
        return <button>Iniciar Sesión</button>
    }
}

class LogoutButtom extends Component{
    render(){
        return (
            <div>
                <h1>Bienvenido usuario</h1>
                <button>Cerrar Sesión</button>
            </div>
        
        );
    }
}

export default class ConditionalSection extends Component {
    constructor(){
        super()
        this.state = {isUserLogged:  false}
    }
    
    render(){

        return(
            <div>
                <h4> Conditional Rendering</h4>
                {/* El rendirazaco condiconal, utilizando la constantes 
                conditionalComponent 
                {conditionalComponent}
                renderizado utilziando la la función useConditional
                {useConditional(this.state.mostrarA)}*/}
                {this.state.isUserLogged ? <LoginButtom></LoginButtom> 
                : <LogoutButtom></LogoutButtom>}

            </div>
        )
    }
}