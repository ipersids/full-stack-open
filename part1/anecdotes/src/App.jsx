import { useState } from 'react'

const Header = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
    </div>
  )
}

// The maximum is exclusive and the minimum is inclusive
function getRandomInt(max, current) {
  const maxFloored = Math.floor(max);
  let res = Math.floor(Math.random() * maxFloored)
  while (res === current && maxFloored > 1) {
	res = Math.floor(Math.random() * maxFloored)
  }
  return res
}

const Button = (props) => <button onClick={props.onClick}>{props.text}</button>

const TextLine = (props) => <div><p>{props.text}</p></div>

const getMostPopularAnecdote = (votes) => {
	let maxVotes = votes[0]
	let maxIndex = 0
	for (let i = 1; i < votes.length; i++) {
		if (votes[i] > maxVotes) {
			maxVotes = votes[i];
			maxIndex = i
		}
	}
	return maxIndex
}

const DisplayMostPopularAnecdote = (props) => {
	if (props.max === 0) {
		return <TextLine text={"No votes given"} />
	}
	return (
		<div>
			<TextLine text={props.anecdotes[props.index]} />
		</div>
	)
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const size = anecdotes.length
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(Array(size).fill(0))

  const handleVote = () => {
    const copy = [...votes]
    copy[selected] += 1
    setVotes(copy)
  }

  const mostPopularIndex = getMostPopularAnecdote(votes)
  const maxVotes = votes[mostPopularIndex]

  return (
    <div>
	  <Header title="Anecdote of the day"/>
	  <TextLine text={anecdotes[selected]} />
	  <TextLine text={'has ' + votes[selected] + ' votes'} />
	  <Button onClick={handleVote} text="vote" />
	  <Button onClick={() => setSelected(getRandomInt(size, selected))} text="next anecdote" />
	  <Header title="Anecdote with most votes"/>
	  <DisplayMostPopularAnecdote anecdotes={anecdotes} index={mostPopularIndex} max={maxVotes} />
    </div>
  )
}

export default App
