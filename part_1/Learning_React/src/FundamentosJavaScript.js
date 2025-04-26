// variables
const x = 1
let y = 5

console.log(x, y)   // se imprime 1 5
y += 10
console.log(x, y)   // se imprime 1 15
y = 'sometext'
console.log(x, y)   // se imprime 1 sometext
x = 4               // provoca un error ya que no se puede cambiar el valor de una variable constante


// Arrays - aunque el array se un connt sus valores internos pueden cambiar 
// porque el array es un objeto este siempre apuntara al mismo objeto 
//su contenido cambia a medida que se le añadan mas elementos.

const t = [1, -1, 3]

t.push(5)

console.log(t.length) // se imprime 4
console.log(t[1])     // se imprime -1

t.forEach(value => {
    console.log(value)  // se imprimen los números 1, -1, 3, 5 cada uno en su propia línea
})

// en el anterior se usa el metodo  push para añadir un nuevo elemento al array pero no muy usado 
// ya que no es una buena practica modificar el array original


// por eso usamos el concat nos devuelve un nuevo array
// con el nuevo elemento añadido y el original sin modificar

const t1 = [1, -1, 3]

const t2 = t.concat(5) // crea un nuevo array

console.log(t1)  // se imprime [1, -1, 3]
console.log(t2) // se imprime [1, -1, 3, 5]

//**************************************************************
//map nos crea un nuevo array con los valores que le pasemos
//aca este se multiplica por 2 y se crea un nuevo array
const t3 = [1, 2, 3]

const m1 = t3.map(value => value * 2)
console.log(m1) // se imprime [2, 4, 6]

//*******************¡*********************************
//aca se crea un nuevo array con el valor de cada elemento
const m2 = t.map(value => '<li>' + value + '</li>')
console.log(m2)
// se imprime [ '<li>1</li>', '<li>2</li>', '<li>3</li>' ]


//**************************************************************
//el array de int se convierte en string
const t4 = [1, 2, 3, 4, 5]

const [first, second, ...rest] = t4

console.log(first, second)  // se imprime 1 2
console.log(rest)          // se imprime [3, 4 ,5]





//**************************************************************

//objetos - se usa aca la foprma de obhetos literales que suscede al enumerar sus propiedades
// entre llaves

const object1 = {
    name: 'Arto Hellas',
    age: 35,
    education: 'PhD',
}

const object2 = {
    name: 'Full Stack web application development',
    level: 'intermediate studies',
    size: 5,
}

const object3 = {
    name: {
        first: 'Dan',
        last: 'Abramov',
    },
    grades: [2, 3, 5, 3],
    department: 'Stanford University',
}


// al hacer el lalamado de las propiedades se llama como un  punto "." o corchetes 
console.log(object1.name)         // se imprime Arto Hellas
const fieldName = 'age'             // Aca se asigno para poder  imprimirla por corchete 
console.log(object1[fieldName])    // se imprime 35


//***********¨************************************
//Tambiénse  puede agregar propiedades a un objeto sobre la marcha usando notación de puntos o corchetes:
// La última de las adiciones debe hacerse usando corchetes,
//  porque cuando se usa la notación de puntos, 
// secret number no es un nombre de propiedad válido debido al carácter de espacio.

object1.address = 'Helsinki'
object1['secret number'] = 12341


//Funciones: 

const sum = (p1, p2) => {
    console.log(p1)
    console.log(p2)
    return p1 + p2
}

// para llamar sus- valores lo haremos de la manera como te lo imaginas
//pasamos el valor de la fucnion a otra variabloe para poderla tomar

const result = sum(1, 6)
console.log(result)


//si recibe  u8n solo parametro se puede excluir los parentesis
const square = p => {
    console.log(p)
    return p * p
}

// si contiene una sola definicion , las llaves ya no son necesarias
const square1 = p => p * p

// la manera anterior es obvia al usar el .map en arrays
const ta = [1, 2, 3]
const tSquared = ta.map(p => p * p)
// tSquared ahora es [1, 4, 9]

//antes de ES6  se usaba function para la declaracion de fucniones asi  ya no es necesario
function product(a, b) {
    return a * b
}

const result1 = product(2, 6)
// result ahora es 12


// Otra forma es usando expresiones de funciones  asi 
//average es 
const average = function (a, b) {
    return (a + b) / 2
}

const result2 = average(2, 5)
// result ahora es 3.5


//**************************************************
// //Metodos  de obhetos y this:
// Podemos crear funciones dentro de objetos, llamadas métodos
const arto = {
    name: 'Arto Hellas',
    age: 35,
    education: 'PhD',
    greet: function () {
        console.log('hello, my name is ' + this.name) // `this` se refiere al objeto `arto`
    },
}

arto.greet() // Imprime: hello, my name is Arto Hellas

//Agregar métodos después de crear el objeto
arto.growOlder = function () {
    this.age += 1
}

console.log(arto.age)   // se imprime 35
arto.growOlder()
console.log(arto.age)   // se imprime 36

//**************************************************************

// Agregar funciones con parámetros

arto.doAddition = function (a, b) {
    console.log(a + b)
}

arto.doAddition(1, 4) // 5

// Podemos guardar una referencia de la función en otra variable
const referenceToAddition = arto.doAddition
referenceToAddition(10, 15) // 25



// Problema de this al usar referencias
// Esto pasa porque al llamar a la función desde otra parte,
//  this ya no apunta al objeto arto, sino al objeto global (en navegador: window).
const referenceToGreet = arto.greet
referenceToGreet() // Imprime: hello, my name is undefined


//Problema de this con setTimeout
setTimeout(arto.greet, 1000) // Pierde el `this`, imprime: hello, my name is undefined

//Solución: Usar bind para fijar this
setTimeout(arto.greet.bind(arto), 1000)


// Clases
// Como se mencionó anteriormente, no existe un mecanismo de clase
//  como los de los lenguajes de programación orientados a objetos. 
// Sin embargo, hay características en JavaScript que hacen posible 
// "simular" clases orientadas a objetos.

class Person {
    constructor(name, age) {
        this.name = name
        this.age = age
    }
    greet() {
        console.log('hello, my name is ' + this.name)
    }
}

const adam = new Person('Adam Ondra', 29)
adam.greet()

const janja = new Person('Janja Garnbret', 23)
janja.greet()


// En React moderno con Hooks: no usamos this
// En este curso usamos React Hooks, por lo que evitamos this y las clases.
// Todo lo hacemos con funciones (function components) y useState / useEffect, 
// lo que simplifica mucho el código.