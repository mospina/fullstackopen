import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({handleClick, text}) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const Statistic = ({text, value}) => <tr><td>{text}</td><td>{value}</td></tr>

const Statistics = ({good, neutral, bad}) => {
  const all = good + neutral + bad

  const fixedFloat = (digits, value) => Number.parseFloat(value).toFixed(digits)

  return (
    <div>
      <h2>Statistics</h2>
      { all > 0 ?
        <table>
          <tbody>
            <Statistic text={"good"} value={good} />
            <Statistic text={"neutral"} value={neutral} />
            <Statistic text={"bad"} value={bad} />
            <Statistic text={"all"} value={all} />
            <Statistic 
              text={"average"} 
              value={fixedFloat(1, (good - bad) / all) } 
            />
            <Statistic 
              text={"positive"} 
              value={`${fixedFloat(1, (good / all) * 100)} %`} 
            />
          </tbody>
        </table>
        : <p>No feedback given</p>
      }
    </div>
 )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleClick = (current, handler) => () => handler(current + 1)

  return (
    <div>
      <h2>Give Feedback</h2>
      <Button handleClick={handleClick(good, setGood)} text={"good"} />
      <Button handleClick={handleClick(neutral, setNeutral)} text={"neutral"} />
      <Button handleClick={handleClick(bad, setBad)} text={"bad"} />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)
