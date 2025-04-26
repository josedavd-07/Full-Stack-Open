/**
 * Estado complejo - depurando las aplicaciones de React
 * 
 * En nuestro ejemplo anterior el estado de la aplicación era simple ya que estaba
 *  compuesto por un solo entero. ¿Y si nuestra aplicación requiere un estado más complejo?
 * 
 * En la mayoría de los casos, la mejor, y más fácil, manera de lograr esto es usando
 *  la función useState varias veces para crear "partes" de estado separadas.
 * 
 * En el siguiente código creamos dos partes de estado para la aplicación
 *  llamada left y right que obtienen el valor inicial de 0:
 * 
 */
import { useState } from "react"

//Manejo de estados separados
const EstadoComplejo = () => {
    const [left, setLeft] = useState(0)
    const [right, setRight] = useState(0)

    // console.log('rendering with left value', left)
    // console.log('rendering with right value', right)

    return (
        // <div>
        //     {left}
        //     <button onClick={() => setLeft(left + 1)}>
        //         left
        //     </button>
        //     <button onClick={() => setRight(right + 1)}>
        //         right
        //     </button>
        //     {right}
        // </div>
        <div>
            {/* < EstadoComplejo1 /> */}
            <EstadoComplejo2 />
        </div>
    )
}

export default EstadoComplejo



//Aca  este estamos mirando como se renderiaza el valor con toda la logica en un solo objeto
// // En este caso, el estado de la aplicación se almacena en un solo objeto que contiene
// //  las partes de estado left y right. El valor inicial de este objeto es { left: 0, right: 0 }.

//Manejos de dos estados en un solo objeto
const EstadoComplejo1 = () => {
    const [clicks, setClicks] = useState({
        left: 0,
        right: 0
    })
    console.log('rendering with left value', clicks.left)
    console.log('rendering with right value', clicks.right)

    //creamos fucniones que nos obtenjan el valor de left y right por medio del click
    const handleLeftClick = () => {
        const newClicks = {
            left: clicks.left + 1,
            right: clicks.right
        }
        setClicks(newClicks)
    }

    const handleRightClick = () => {
        const newClicks = {
            left: clicks.left,
            right: clicks.right + 1
        }
        setClicks(newClicks)
    }


    return (
        <div>
            <h1>Estado  complejo - logica en un solo objeto</h1>

            {clicks.left} <br />
            <button onClick={handleLeftClick}>Left clicks</button><br />
            <button onClick={handleRightClick}>Right clicks</button><br />
            {clicks.right}

        </div>
    )
}




// usamos el spread operator para obtener el valor de left y right y luego lo sumamos
// y simplificamos las fucniones de handleLeftClick y handleRightClick

const EstadoComplejo2 = () => {
    const [clicks, setClicks] = useState({
        left: 0,
        right: 0
    })
    console.log('rendering with left value', clicks.left)
    console.log('rendering with right value', clicks.right)

    //creamos fucniones que nos obtenjan el valor de left y right por medio del click
    const handleLeftClick = () => setClicks({ ...clicks, left: clicks.left + 1 })


    const handleRightClick = () => setClicks({ ...clicks, right: clicks.right + 1 })


    return (
        <div>
            <h1>Estado  complejo - logica en un solo objeto</h1>

            {clicks.left} <br />
            <button onClick={handleLeftClick}>Left clicks</button><br />
            <button onClick={handleRightClick}>Right clicks</button><br />
            {clicks.right}

        </div>
    )
}