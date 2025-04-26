const Hello = (props) => {
    // Funcion auxiliar para adividar el año de nacimiento
    const bornYear = () => {
        const year = new Date().getFullYear()
        return year - props.age
    }
    return (
        <div>
            <p>
                Hello {props.name}, you are {props.age} years old
            </p>
            <p>
                So you were probably born in {bornYear()}
            </p>
        </div>
    )
}

const FuncionesAuxiliares = () => {
    const name = 'Peter'
    const age = 10

    return (
        <div>
            <h1>Funciones Auxiliares - Greetings</h1>
            <Hello name="Maya" age={26 + 10} />
            <Hello name={name} age={age} />
        </div>
    )
}

export default FuncionesAuxiliares