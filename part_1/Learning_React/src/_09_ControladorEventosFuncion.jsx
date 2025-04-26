import { useState } from "react"; // Importar useState desde React

//** un xontrolador de esventos es una fucnion
//*******************************

//Aca declaramos espacios de memoria que obtienen la fucnion que luegop es llamada por el evento
// por medio de una funcion  funciones de eventos
const ControladorEventosFuncion = () => {
    const [counter, setCounter] = useState(0)

    //obtenemos  el evento en funciones
    const increaseByOne = () => setCounter(counter + 1)
    const setToZero = () => setCounter(0)


    console.log('rendering by clicked in button...', counter)
    return (
        <div>
            <h1>Control de eventos es una funcion</h1>
            <div>{counter}</div>
            <br />

            {/* Forma uno de llamar los datos usando intermediarios entre eventos en  funciones */}
            <button onClick={increaseByOne}>
                Haz click en mi y llamo a la función para actualizar el numero
            </button>

            <br /><br />

            <button onClick={increaseByOne}>
                haz click en mi y actualizo el numero sin llamar a la función
            </button>

            <br /><br />

            {/* llamamos a la funcion evento setToZero */}
            <button onClick={setToZero}>
                Haz click en mi para  reiniciar el contador
            </button>

        </div>
    )
}

export default ControladorEventosFuncion