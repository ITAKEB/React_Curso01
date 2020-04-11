import React,{Component} from "react"

/*statelees Componets 
        O
 Componentes Funcionales Puros
*/


/*Otra forma de escribir componentes
es la se statelessComponents

en la cual las clases (componentes)
se pueden escribir como funciones o 
como arrow functions 

Hay que tener en cuenta que cuando 
se esta de forma de declarar
los componentes no se puede
acceder a los metodos del cilo
de vida de los componentes

Unicanmente se puede retornar
el codigo JSX

Un aspecto bueno es que gracias a volverlo 
funciones o arrow function
ya no es necesario usar la palabra this
para referirnos a las props de la clase
*/


//Primera forma (Funciones)

function Article (props){
    return(
        <section>
            <h2>
                {props.tittle}
            </h2>
            <p><em>Escrito por{props.author}</em></p>
            <date>{props.date}</date>
            <article>
                {props.children}
            </article>
        </section>
    )
}


//Forma de arrowFunctions ()=> ()

/*Podemos desestructurar la key (prop)
que llega para así tener un código un poco 
más limpio
*/
const Button = ({borderColor,label})=>(
     /* Tambíen hay que tener en cuenta
     que existe una opción para tener un código
     más limpio cuando la prop y el state
     o la cualidad es la misma que la asinación
     
     En este caso donde dice borderColor:borderColor
     se puede resumir poniendo solo borderColor*/
    <button style={{borderColor:borderColor,display:"block"}}>
            {label}
    </button>


)