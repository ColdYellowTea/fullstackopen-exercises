import { useState } from 'react'

const getRandomInt = (max) => {
  return Math.floor(Math.random() * max);
}


const getMostVotedIndex = (votes) => {
  if (votes.length === 0) {
      return -1;
  }

  let max = votes[0];
  let maxIndex = 0;

  for (let i = 1; i < votes.length; i++) {
      if (votes[i] > max) {
          maxIndex = i;
          max = votes[i];
      }
  }
  return maxIndex;
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
  
 
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0))
  const [mostVoted, setMostVoted] = useState(0)

  const choseNextAnecdote = () => {
    let randomNumber = getRandomInt(anecdotes.length)
    setSelected(randomNumber)
  }
  
 const incrementVote =(props) =>{
  console.log(props)
  let newVotes = [...votes]
  console.log(newVotes)
  newVotes[props] += 1
  console.log(props)
  setVotes(newVotes)
  setMostVoted(getMostVotedIndex(newVotes))
 }
  
  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p>{anecdotes[selected]}</p>
      <p>has {votes[selected]} votes</p>
      <button onClick={() => incrementVote(selected)}>Vote</button>
      <button onClick={choseNextAnecdote}>Next anecdote</button>
      <h2>Anecdote with most votes</h2>
      <p>{anecdotes[mostVoted]}</p>
      <p>has {votes[mostVoted]} votes</p>
    </div>
  )
}

export default App