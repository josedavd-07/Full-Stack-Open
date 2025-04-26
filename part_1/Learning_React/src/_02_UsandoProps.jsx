// Using props
const Hello = (props) => {
    return (
        <div>

            <p>Hello {props.name}</p>
        </div>
    )
}


const UsandoProps = () => {
    return (
        <div>
            <h1>Usando Props - Greetings</h1>

            {/* Import the Hello component using multiple component and props */}
            <Hello name='John' />
            <Hello name='carlos' />
        </div>
    )
}

export default UsandoProps
