import { useState } from "react"; // Importar useState desde React

//Se renderiza  ya quue se hace uso del hook useState
// Se renderiza cada segundo, ya que se hace un setTimeout cada segundo
// es decir de manera  infinita, por lo que se renderiza cada segundo
const ComponentesConEstados = () => {
    const [counter, setCounter] = useState(0)

    setTimeout(
        () => setCounter(counter + 1),
        1000
    )
    // console.log(counter)
    console.log('rendering...', counter)

    return (
        <div>
            <h1>Componentes con estados se renderiza infinitamente</h1>
            {counter}
        </div>
    )
}
export default ComponentesConEstados