import { useState } from "react";

// Componente para mostrar el número
const Display = (props) => {
    return (
        <div>
            <h1>Renderizado de pagina se actualiza el renderizado</h1>
            {props.counter}
        </div>
    )
}

// Componente reutilizable para botones
const Button = (props) => {
    return (
        // <div>
        <button onClick={props.onClick}>
            {props.text}
        </button>
        // {/* </div> */ }
    )
}



const EstadoRenderizado = () => {
    const [counter, setCounter] = useState(0)
    console.log('rendering with counter value', counter)

    const increaseByOne = () => {
        console.log('increasing, value before', counter)
        setCounter(counter + 1)
    }

    const decreaseByOne = () => {
        console.log('decreasing, value before', counter)
        setCounter(counter - 1)
    }

    const setToZero = () => {
        console.log('resetting to zero, value before', counter)
        setCounter(0)
    }

    return (
        <div>
            <Display counter={counter} />
            <Button onClick={increaseByOne} text="incrementar" /> <br /><br />
            <Button onClick={setToZero} text="Resetear" /> <br /><br />
            <Button onClick={decreaseByOne} text="Decrementar" /> <br /><br />
        </div>
    )
}
export default EstadoRenderizado