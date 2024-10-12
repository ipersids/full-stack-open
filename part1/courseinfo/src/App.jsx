// const App = () => {
//   console.log("Yo, dev, do you open your console? :)")
//   const course = 'Half Stack application development'
//   const part1 = 'Fundamentals of React'
//   const exercises1 = 10
//   const part2 = 'Using props to pass data'
//   const exercises2 = 7
//   const part3 = 'State of a component'
//   const exercises3 = 14

//   return (
//     <div>
//       <h1>{course}</h1>
//       <p>{part1} {exercises1}</p>
//       <p>{part2} {exercises2}</p>
//       <p>{part3} {exercises3}</p>
//       <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
//     </div>
//   )
// }

const Header = (props) => {
  console.log("Add Header") 

  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}

const Content = (props) => {
  console.log("Add content: " + props.part + ' ' + props.exercises)

  return (
    <div>
      <p>{props.part} {props.exercises}</p>
    </div>
  )
}

const Total = (props) => {
  console.log("Add total amount of exercises: " + props.sum)

    return (
      <div>
        <p>Number of exercises {props.sum}</p>
      </div>
    )
}

const App = () => {
  console.log("Yo, dev, do you open your console? :)")

  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14
  const sum = exercises1 + exercises2 + exercises3

  return (
    <div>
      <Header course={course} />
      <Content part={part1} exercises={exercises1} />
      <Content part={part2} exercises={exercises2} />
      <Content part={part3} exercises={exercises3} />
      <Total sum={sum}/>
    </div>
  )
}

export default App
