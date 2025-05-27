// Header component - Displays the course title
const Header = (props) => {
  const faculty = (props) => {
    return (
      <h1>{props.course}</h1>
    )
  }
}

// Part component - Displays a part's name and number of exercises
const Part = (props) => {
  return (
    <p>
      {props.name} {props.exercises}
    </p>
  )
}

// Content component - jDisplays all parts of the course
const Content = (props) => {
  return (
    <div>
      <Part name={props.parts[0].name} exercises={props.parts[0].exercises} />
      <Part name={props.parts[1].name} exercises={props.parts[1].exercises} />
      <Part name={props.parts[2].name} exercises={props.parts[2].exercises} />
    </div>
  )
}

// Total component - Calculates and displays the total number of exercises
const Total = (props) => {
  const total = props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises

  return (
    <p>Number of exercises: {total}</p>
  )
}

// App component - Organizes the whole course content
const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  // The course object contains the course name and an array of parts, each with a name and number of exercises
  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}

export default App



