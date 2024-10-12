const Header = (props) => {
  // console.log("Add Header") 

  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}

const Part = (props) => {
  // console.log("Create Part: " + props.part + ' ' + props.ex)

  return (
    <div>
      <p>{props.part} {props.ex}</p>
    </div>
  )
}

const Content = (props) => {
  // console.log("Add content")

  return (
    <div>
      {props.parts.map(item => (
        <Part key={item.id} part={item.part} ex={item.ex} />
      ))}
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
    {id:0, part:'Fundamentals of React', ex:10},
    {id:1, part:'Using props to pass data', ex:7},
    {id:2, part:'State of a component', ex:14}
  ]
  const sum = parts[0].ex + parts[1].ex + parts[2].ex

  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total sum={sum}/>
    </div>
  )
}

export default App
