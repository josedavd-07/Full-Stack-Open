
//Version de aprendizaje con variables auxiliares y desestructuracion de props

const Hello = (props) => {

  //Desestructuracion de props pasando lo pvalores de lso props a variables
  const name = props.name
  const age = props.age
  // podemos pasar estos pros desestucturados en una sola linea aso:
  // const { name, age } = props

  // Funcion auxiliar para adividar el año de nacimiento usando la desestructuracion de props
  const bornYear = () => new Date().getFullYear() - age

  // retornamos usando la desestructuración de props
  return (
    <div>
      <p>
        Hello {name}, you are {age} years old
      </p>
      <p>
        So you were probably born in {bornYear()}
      </p>
    </div>
  )
}


const DesestructuracionProps = () => {
  const name = 'Peter'
  const age = 10

  return (
    <div>
      <h1> Desestructuracion de Props - Greetings</h1>
      <Hello name="Maya" age={26 + 10} />
      <Hello name={name} age={age} />
      <Ola nome="Jose David" edade={35} />
    </div>
  )
}



//Ahora bien este cuando estamos desestucturizando el componente Hello 
//de esta cierta manera:
// const { nome, edade } = props 

//  esto es asignado asi:
// lo cual esto le asigna el valor de props a las variables nome y edade
// props = {
//   nome: 'Arto Hellas',
//   edade: 35,
// }

// llevemos esto mas  alla. le pasaremos la desestructuracion  directa al componente
const Ola = ({ nome, edade }) => {
  const bornYear = () => new Date().getFullYear() - edade
  return (
    <div>
      <p>
        Hello {nome}, you are {edade} years old
      </p>
      <p>
        So you were probably born in {bornYear()}
      </p>
    </div>
  )
}


// Los props que se pasan al componente ahora se desestructuran directamente en las variables name y age.

// Esto significa que en lugar de asignar todo el objeto props a una variable llamada props
//  y luego asignar sus propiedades a las variables name y age

const Oi = (props) => {
  const { names, ages } = props
}
// asignamos los valores de las propiedades directamente a las variables al desestructurar
//  el objeto props que se pasa a la función del componente como parámetro:

const Hallo = ({ name, age }) => { }

export default DesestructuracionProps