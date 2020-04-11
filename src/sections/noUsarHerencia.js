import React,{Component } from "react"

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

class ButtonDanger extends Component{
    render(){
        return(
            <Button borderColor="red" label="Danger"></Button>
        )
    }
}

class OtherButton extends Component{
    render(){
        return(
            <Button borderColor="pink" label="Pantera rosa"></Button>
        )
    }
}

Button.defaultProps = {
    borderColor:"red"

}