
import { useState } from "react"; // Importar useState desde React

//Aca  usamos eventos que llaman a una función que a su vez llama a otra función

const ControlDeEventos = () => {
    const [counter, setCounter] = useState(0)

    //obtenemos el  evento click del boton y lo asignamos a la variable handleClick
    const handleClick = () => {
        setCounter(counter + 1)
    }
    console.log('rendering by clicked in button...', counter)
    return (
        <div>
            <h1>Control de eventos</h1>
            <div>{counter}</div>
            <br />

            {/* Forma uno de llamar los datos usando intermediarios entre funciones */}
            <button onClick={handleClick}>
                Haz click en mi y llamo a la función para actualizar el numero
            </button>

            <br /><br />

            {/* forma dos de llamar los datos llamando a la funcion internamente sin intermediarios */}
            <button onClick={() => setCounter(counter + 1)}>
                haz click en mi y actualizo el numero sin llamar a la función
            </button>

            <br /><br />

            <button onClick={() => setCounter(0)}>
                Haz click en mi para  reiniciar el contador
            </button>

        </div>
    )
}


export default ControlDeEventos

