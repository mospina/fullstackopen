import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({handleClick, text}) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const Statistic = ({text, value}) => <tr><td>{text}</td><td>{value}</td></tr>

const Statistics = ({good, neutral, bad, total}) => {

  const fixedFloat = (digits, value) => Number.parseFloat(value).toFixed(digits)

  return (
    <div>
      <h2>Statistics</h2>
      { total > 0 ?
        <table>
          <tbody>
            <Statistic text={"good"} value={good} />
            <Statistic text={"neutral"} value={neutral} />
            <Statistic text={"bad"} value={bad} />
            <Statistic text={"all"} value={total} />
            <Statistic 
              text={"average"} 
              value={fixedFloat(1, (good - bad) / total) } 
            />
            <Statistic 
              text={"positive"} 
              value={`${fixedFloat(1, (good / total) * 100)} %`} 
            />
          </tbody>
        </table>
        : <p>No feedback given</p>
      }
    </div>
 )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal] = useState(0)

  const handleClick = (current, handler) => () => {
    handler(current + 1)
    setTotal(total + 1)
  }

  return (
    <div>
      <h2>Give Feedback</h2>
      <Button handleClick={handleClick(good, setGood)} text={"good"} />
      <Button handleClick={handleClick(neutral, setNeutral)} text={"neutral"} />
      <Button handleClick={handleClick(bad, setBad)} text={"bad"} />
      <Statistics good={good} neutral={neutral} bad={bad} total={total}/>
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)
