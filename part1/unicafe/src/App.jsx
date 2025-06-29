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
  const all = good + neutral + bad
  const average = (good - bad) / all
  const positive = good / all * 100
  return (
    <div>
      <p> good {good} </p>
      <p> neutral {neutral} </p>
      <p> bad {bad} </p>
	  <p> all {all} </p>
	  <p> average {average} </p>
	  <p> positive {positive}% </p>
    </div>
  )
}

const Button = (props) => <button onClick={props.onClick}>{props.text}</button>

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodClick = () => setGood(good + 1)
  const handleNeutralClick = () => setNeutral(neutral + 1)
  const handleBadClick = () => setBad(bad + 1)

  return (
    <div>
      <Header title="give feedback"/>
      <Button onClick={handleGoodClick} text="good" />
      <Button onClick={handleNeutralClick} text="neutral" />
      <Button onClick={handleBadClick} text="bad" />
      <Header title="statistics" />
      <FeedbackRes good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

export default App