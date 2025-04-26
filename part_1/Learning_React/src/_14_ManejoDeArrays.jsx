import React, { useState } from 'react'

//Almacenae el estado de los clicks en un array
const ManejoDeArrays = () => {
    const [left, setLeft] = useState(0)
    const [right, setRight] = useState(0)
    const [allClicks, setAll] = useState([])
    console.log('rendering with left value', left)
    console.log('rendering with right value', right)
    console.log('rendering with allClicks value', allClicks)
    const handleLeftClick = () => {
        setAll(allClicks.concat('L'))
        setLeft(left + 1)
    }

    const handleRightClick = () => {
        setAll(allClicks.concat('R'))
        setRight(right + 1)
    }

    return (
        <div>
            {left} <br />
            <button onClick={handleLeftClick}>left</button> <br />
            <button onClick={handleRightClick}>right</button> <br />
            {right}
            <p>{allClicks.join(' ')}</p>
        </div>
    )
}

export default ManejoDeArrays