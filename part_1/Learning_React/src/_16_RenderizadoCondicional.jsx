import { useState } from "react";

//original
const History = (props) => {
    if (props.allClicks.length === 0) {
        return (
            <div>
                The app is used by pressing the buttons
            </div>
        )
    }
    return (
        <div>
            Button press history: {props.allClicks.join(' ')}
        </div>
    )
}

//Componente desestructurizado - guardamos  el historial de letras del click en un array
const History1 = ({ allClicks }) => {
    if (allClicks.length === 0) {
        return (
            <div>
                The app is used by pressing the buttons
            </div>
        )
    }
    return (
        <div>
            Button press history: {allClicks.join(' ')}
        </div>
    )
}

const Button = ({ handleClick, text }) => (
    <button onClick={handleClick}>
        {text}
    </button>
)
const RenderizadoCondicional = () => {
    const [left, setLeft] = useState(0)
    const [right, setRight] = useState(0)
    //guardamos el historial de clicks en un array
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
            {left} <br />
            <Button handleClick={handleLeftClick} text='left' />
            <Button handleClick={handleRightClick} text='right' />
            {right}
            <p>Total: {total}</p>
            <History1 allClicks={allClicks} />
        </div>
    )
}
export default RenderizadoCondicional