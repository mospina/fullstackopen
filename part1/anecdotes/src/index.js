import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState({})  

  const anecdotesCount = props.anecdotes.length

  const handleVoteClick = () => {
    const newVotes = {...votes, [selected]: votes[selected] ? votes[selected] + 1 : 1 }
    setVotes(newVotes)
  }

  const handleNextAnecdoteClick = () => {
    const selection = getRandomInt(anecdotesCount)
    setSelected(selection)
  }  

  return (
    <div>
      <h1>Anecdote of the day</h1>  
      <p>{props.anecdotes[selected]}</p>
      <p>has {votes[selected] ? votes[selected] : 0} votes</p>
      <Button handleClick={handleVoteClick} text={"vote"} />
      <Button handleClick={handleNextAnecdoteClick} text={"next anecdote"} />
      <MostPopular votes={votes} anecdotes={props.anecdotes} />
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

const Button = ({handleClick, text}) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const MostPopular = ({votes, anecdotes}) => {
  const mostPopular = Object.entries(votes).reduce((acc, vote) => {
    if (vote[1] > acc[1]) {
     return vote
    } else {
     return acc
    }
  }, [null, null])

  return (
    <div>
      <h2>Anecdote with most votes</h2>  
      <p>{mostPopular[0] ? anecdotes[mostPopular[0]] : "No votes yet"} </p>
    </div>
  )
}

const getRandomInt = (max) => Math.floor(Math.random() * Math.floor(max));


ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)
