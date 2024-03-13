import { useState } from 'react'

const Button = (props) => {
  console.log(props)
  return(
    <button onClick={props.handler}>{props.text}</button>
  )
}

const StatisticLine = (props) => {
  console.log(props)
  return(
    <tr>
      <td>{props.textBeforeValue}</td> 
      <td>{props.value} {props.textAfterValue}</td>
    </tr>
  )
}

const Statistics = (props) => {
  console.log(props)
  let {good, neutral, bad, total} = props.statistics
  let [handleGood, handleNeutral, handleBad] = props.statisticsHandlers
  let avgStatistics = ((good * 1) + (bad * -1)) / total
  let positiveStatistics = (good / total) * 100.0

  if(total > 0){
    return(
    <div>
      <h1>give feedback</h1>
      <Button text="good" handler={handleGood}/>
      <Button text="neutral" handler={handleNeutral}/>
      <Button text="bad" handler={handleBad}/>
      <h2>statistics</h2>
      <table>
        <StatisticLine textBeforeValue="good"  textAfterValue="" value={good}/>
        <StatisticLine textBeforeValue="neutral" textAfterValue="" value={neutral}/>
        <StatisticLine textBeforeValue="bad" textAfterValue="" value={bad}/>
        <StatisticLine textBeforeValue="all" textAfterValue="" value={total}/>
        <StatisticLine textBeforeValue="average" textAfterValue="" value={avgStatistics}/>
        <StatisticLine textBeforeValue="positive" textAfterValue="%" value={positiveStatistics}/>
      </table>
    </div>
    )
  } else {
    return(
      <div>
          <h1>give feedback</h1>
          <Button text="good" handler={handleGood}/>
          <Button text="neutral" handler={handleNeutral}/>
          <Button text="bad" handler={handleBad}/>
          <h2>statistics</h2>
          <p>No feedback given</p>
      </div>
      )
  }

}

const App = () => {
  const [statistics, setStatistics] = useState({
    good: 0, neutral: 0, bad: 0, total: 0
  })

  const handleGood = () => {
    const newStatistics = {
      ...statistics,
      good: statistics.good + 1,
      total: statistics.total + 1
    }
    setStatistics(newStatistics)
  }
  const handleNeutral = () => {
    const newStatistics = {
      ...statistics,
      neutral: statistics.neutral + 1,
      total: statistics.total + 1
    }
    setStatistics(newStatistics)
  }
  const handleBad = () => {
    const newStatistics = {
      ...statistics,
      bad: statistics.bad + 1,
      total: statistics.total + 1
    }
    setStatistics(newStatistics)
  }

  const statisticsHandlers = []
  statisticsHandlers.push(handleGood,handleNeutral,handleBad)
  return (
    <div>
      <Statistics statistics={statistics} statisticsHandlers={statisticsHandlers}/>
    </div>
  )
}

export default App