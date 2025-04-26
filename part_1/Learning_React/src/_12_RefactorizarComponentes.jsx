//Antes que todo es super util usar desestructuracion al refactorizar componentes
// pero  no abusar de ello es mejor usarlo cuando es necesario
// ya que aveces complicamos el codigo y no es necesario
// haciendolo mas dificil de leer


import { useState } from "react";


// Componente para mostrar el númeroComo podemso observar en ela lección 11 usamos props
// pero el componente solo usa el campo de props.counter se puede desestructurizar asi.

// *************************************************
// De esto : forma 1 original mas verboso 

// Componente para mostrar el número - se cambia el nombvre del componente para no dar errror
const Display1 = (props) => {
    return (
        <div>
            <h1>Renderizado de pagina se actualiza el renderizado</h1>
            {props.counter}
        </div>
    )
}

// ************************************
// A esto : ya esta desestructurizado 
// componente forma 2 mas compacto y limpio
const Display = ({counter}) => {
    return (
        <div>
            <h1>Renderizado de pagina se actualiza el renderizado</h1>
            {counter}
        </div>
    )
}

// **********************************************
// Ahora se descompone mas ya quye es una sola  accion  y es usado en direcccion flecha de funcion 
//componente forma 3 mas compacto y mas  directo a su acción

const Display2 = ({counter}) => <div>{counter}</div>

// *********************

// Componente reutilizable para botones - se puede mejorar, abajo lo miraremos
const Button = (props) => {
    return (
        // <div>
        <button onClick={props.onClick}>
            {props.text}
        </button>
        // {/* </div> */ }
    )
}

// desestructurizamos el componente del oton para algo mas limpio 
//ersta tambien la usamos abajo  con dessestructuracion de componentes
const Button1 = ({onClick , text}) => {
    return (
        // <div>
        <button onClick={onClick}>
            {text}
        </button>
        // {/* </div> */ }
    )
}
//otra forma - la  cual la usamos de ejempolo asignandole el valor de onclick a onSmash
const Button2 = ({onSmash , text}) => {
    return (
        // <div>
        <button onClick={onSmash}>
            {text}
        </button>
        // {/* </div> */ }
    )
}

// A mas desestructurizado:
const Button3 = ({onSmash , text}) => <button onClick={onSmash}>{text}</button>

// ****************************************

// Componente principal de renderizado

const RefactorizarComponentes = () => {
    const [counter, setCounter] = useState(0)
    console.log('rendering with counter value', counter)

    // incrementamos el valor de counter
    const increaseByOne = () => {
        console.log('increasing, value before', counter)
        setCounter(counter + 1)
    }

    // decrementamos el valor de counter
    const decreaseByOne = () => {
        console.log('decreasing, value before', counter)
        setCounter(counter - 1)
    }
    
    // reseteamos el valor de counter
    const setToZero = () => {
        console.log('resetting to zero, value before', counter)
        setCounter(0)
    }

    return (
        <div>
            <Display counter={counter} />
            <Button onClick={increaseByOne} text="incrementar" /> <br /><br />
            <Button1 onClick={setToZero} text={"Resetear"} /> <br /><br />
            <Button2 onSmash={decreaseByOne} text={"Decrementar"} /> <br /><br />
        </div>
    )
}
export default RefactorizarComponentes