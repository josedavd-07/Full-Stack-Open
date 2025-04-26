// Multiple Components
const Hello = () => {
    return (
        <div>
            <p>Hello world</p>
        </div>
    )
}


const MultipleComponentes = () => {
    return (
        <div>
            <h1>Usando Multiples Componentes - Greetings</h1>

            {/* Import the Hello component using multiple component */}
            <Hello />
            <Hello />

        </div>
    )
}

export default MultipleComponentes