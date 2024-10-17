const Header = (props) => {
  // console.log("Add Header: " + props.course) 

  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}

const Part = (props) => {
  // console.log("Create Part: " + props.part.name + ' ' + props.part.exercises)

  return (
    <div>
      <p>{props.part.name} {props.part.exercises}</p>
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

const sum = (ex1, ex2, ex3) => ex1 + ex2 + ex3

const App = () => {
  console.log("Yo, dev, do you open your console? :)")
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <div>
      <Header course={course} />
      <Content part1={part1} part2={part2} part3={part3}/>
      <Total sum={sum(part1.exercises, part2.exercises, part3.exercises)} />
    </div>
  )
}

export default App
