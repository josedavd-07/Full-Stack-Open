// import { useState } from "react";

// // Componente para mostrar el número
// const Display = (props) => {
//     return (
//         <div>{props.counter}</div>
//     )
// }

// // Componente reutilizable para botones
// const Button = (props) => {
//     return (
//         <button onClick={props.handleClick}>
//             {props.text}
//         </button>
//     )
// }

// // Componente principal con el estado
// const PasandoEstadoComponenteHijo = () => {
//     const [counter, setCounter] = useState(0)

//     const increaseByOne = () => setCounter(counter + 1)
//     const setToZero = () => setCounter(0)

//     console.log('rendering by clicked in button...', counter)

//     return (
//         <div>
//             <h1>Control de eventos -  pasando  estados a componentes hijos desde el padre</h1> 

//             {/* Mostramos el estado usando el componente hijo */}
//             <Display counter={counter} />

//             <br />

//             {/* Usamos el botón con funciones distintas */}
//             <Button handleClick={increaseByOne} text="Aumentar contador" />
//             <br /><br />
//             <Button handleClick={setToZero} text="Reiniciar contador" />
//         </div>
//     )
// }

// export default PasandoEstadoComponenteHijo

import { useState } from "react";

// Componente para mostrar el número
const Display = (props) => {
    return (
        <div>
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

// Componente principal con el estado
const PasandoEstadoComponenteHijo = () => {
    const [counter, setCounter] = useState(0)

    const increaseByOne = () => setCounter(counter + 1)
    const decreaseByOne = () => setCounter(counter - 1)
    const setToZero = () => setCounter(0)

    return (
        <div>
            <h1>Control de eventos - pasando estados a componentes hijos desde el padre</h1>

            {/* Mostramos el estado usando el componente hijo */}
            <Display counter={counter} />

            <br />

            {/* Botón para aumentar el contador */}
            <Button
                onClick={increaseByOne}  // Aseguramos que se pase onClick
                text="Aumentar contador"
            />
            <br /><br />
            <Button
                onClick={decreaseByOne}
                text="Disminuir contador"
            />

            <br /><br />
            <Button
                onClick={setToZero}
                text="Reiniciar contador"
            />
        </div>
    )
}

export default PasandoEstadoComponenteHijo
