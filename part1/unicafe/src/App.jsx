import { useState } from 'react'

const Header = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
    </div>
  )
}

const FeedbackRes = ({good, neutral, bad}) => {
  // console.log("Counter:", {good, neutral, bad})
  return (
    <div>
      <p style={{ margin: '0' }}>good {good}</p>
      <p style={{ margin: '0' }}>neutral {neutral}</p>
      <p style={{ margin: '0' }}>bad {bad}</p>
    </div>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <Header title="give feedback"/>
      <button onClick={() => {setGood(good + 1)}}>{"good"}</button>
      <button onClick={() => {setNeutral(neutral + 1)}}>{"neutral"}</button>
      <button onClick={() => {setBad(bad + 1)}}>{"bad"}</button>
      <Header title="statistics" />
      <FeedbackRes good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

export default App