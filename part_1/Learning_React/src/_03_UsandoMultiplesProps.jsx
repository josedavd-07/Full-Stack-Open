// using multiple props

// Using props and multiple components
const Hello = (props) => {
    console.log(props)
    return (
        <div>

            <p>Hello {props.name} you are {props.age} years old </p>
        </div>
    )
}


const sandoMultiplesProps = () => {
    // Members variables
    const name = 'John'
    const age = 30

    //Array of objects - rendering multiple  data
    const friends = [
        { name: 'Peter', age: 4 },
        { name: 'Maya', age: 10 },
    ]

    return (
        <div>
            <h1>Usando Multiples Props - Greetings</h1>

            {/* Import the Hello component using multiple component and props */}
            {/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */}

            {/* Using firts prop */}
            <Hello name='Carlos' age={30 + 10} />

            {/* Using second prop */}
            <Hello name={name} age={age} />

            <p>{friends[0].name} {friends[0].age}</p>
            <p>{friends[1].name} {friends[1].age}</p>
        </div>
    )
}

export default UsandoMultiplesProps