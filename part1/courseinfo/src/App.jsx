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
      <Part part={props.part1} />
      <Part part={props.part2} />
      <Part part={props.part3} />
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
  const course = 'Half Stack application development'
  const parts = [
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

  return (
    <div>
      <Header course={course} />
      <Content parts={parts}/>
      <Total sum={parts[0].exercises + parts[1].exercises + parts[2].exercises} />
    </div>
  )
}

export default App
