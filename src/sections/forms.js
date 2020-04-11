import React,{Component }from "react"

export default class Forms extends Component{
    constructor(){
        super()
        this.state={
            inputName:" ",
            inputTwitter:"@",
            inputTerms:true            
        }

    }
    handleSumbit = (e)=>{
        e.preventDefault()
        console.log(this.state)
    }

    handleChange = (e) =>{
        console.log("handleChange")
        console.log(e.target.checked)
        this.setState({inputTerms:e.target.checked})
        
    }
    render(){
        return(
         <div>
             <form onSubmit={this.handleSumbit}>
                <p>
                    <label htmlFor="name">Nombre: </label>
                    <input id="name"
                    name="Username"
                    placeholder="Introduce el nombre"
                    ref={inputElement=>this.inputName = inputElement}
                    value={this.state.inputName}
                    onChange={e=>this.setState({inputName:e.target.value})}>
                    </input>
                </p>
                <p>
                    <label htmlFor="twitter">Twitter: </label>
                    <input id="twitter"
                    name="twitterAccount"
                    placeholder="Introduce tu twitter"
                    ref={inputElement=>this.inputTwitter = inputElement}
                    value={this.state.inputTwitter}
                    onChange={e=>this.setState({inputTwitter: e.target.value})}>
                    </input>
                </p>

                <p>
                    <label>
                        <input onChange={this.handleChange}
                        type="checkbox"
                        checked={this.state.inputTerms}
                        >
                        </input>
                        Aceptar Terminos
                    </label>
                </p>
                <button>Enviar
                </button>
             </form>
         </div>
            
        )
    }
}