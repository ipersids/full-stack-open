const Header = (props) => {
  // console.log("Add Header: " + props.course) 

  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}

const Part = (props) => {
  // console.log("Create Part: " + props.name + ' ' + props.exercises)

  return (
    <div>
      <p>{props.name} {props.exercises}</p>
    </div>
  )
}

const Content = (props) => {
  // console.log("Add content." )

  return (
    <div>
      <Part name={props.parts[0].name} exercises={props.parts[0].exercises} />
      <Part name={props.parts[1].name} exercises={props.parts[1].exercises} />
      <Part name={props.parts[2].name} exercises={props.parts[2].exercises} />
    </div>
  )
}

const Total = (props) => {
  // console.log("Add total amount of exercises: " + props.sum)

    return (
      <div>
        <p>Number of exercises {props.sum}</p>
      </div>
    )
}

const App = () => {
  console.log("Yo, dev, do you open your console? :)")
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

  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts}/>
      <Total sum={
        course.parts[0].exercises 
        +course.parts[1].exercises 
        +course.parts[2].exercises
      } />
    </div>
  )
}

export default App
