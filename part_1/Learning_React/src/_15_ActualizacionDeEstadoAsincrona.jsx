import { useState } from "react";
// Se utiliza actualizacion asinvcrona ya que  que si no  no se actualiza el estado
// y no se renderiza el componente de nuevo 
// ya que el estado no se actualiza de inmediato, sino que se programa para actualizarse en el futuro

// por eso usamos despues el updateLeft y updateRight para obtener el valor de left y right
// y luegoa actualizarle el valor de  setTotal
const ActualizacionDeEstadoAsincrona = () => {
    const [left, setLeft] = useState(0)
    const [right, setRight] = useState(0)
    const [allClicks, setAll] = useState([])
    const [total, setTotal] = useState(0)

    const handleLeftClick = () => {
        setAll(allClicks.concat('L'))
        const updatedLeft = left + 1
        setLeft(updatedLeft)
        setTotal(updatedLeft + right)
    }

    const handleRightClick = () => {
        setAll(allClicks.concat('R'))
        const updatedRight = right + 1
        setRight(updatedRight)
        setTotal(updatedRight + left)
    }

    return (
        <div>
            <h1>Actualización de estado asincrono</h1>
            {left}
            <button onClick={handleLeftClick}>left</button>
            <button onClick={handleRightClick}>right</button>
            {right}
            <p>{allClicks.join(' ')}</p>
            <p>total: {total}</p>
        </div>
    )
}

export default ActualizacionDeEstadoAsincrona