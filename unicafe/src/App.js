import { useState } from 'react'

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button> 
)

const Feedback = (props) => (
  <h1>
    {props.heading}
    <div>
      <Button handleClick={props.set1} text = {props.text1} />
      <Button handleClick={props.set2} text = {props.text2} />
      <Button handleClick={props.set3} text = {props.text3} />
    </div>
  </h1>
)

const StatisticsLine = (props) => <div>{props.text} {props.value}</div> 

const Statistics = (props) => {
  if (props.all === 0) {
    return (
      <div>No feeback given</div>
    )
  }
  return (
    <div>
      <h1>{props.heading}</h1>
      <StatisticsLine text="good" value={props.good} />
      <StatisticsLine text="neutral" value={props.neutral} />
      <StatisticsLine text="bad" value={props.bad} />
      <StatisticsLine text="all" value={props.all} />
      <StatisticsLine text="average" value={props.average} />
      <StatisticsLine text="positive" value={props.positive} /> 
    </div>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  console.log(good)
  console.log(neutral)
  console.log(bad)
  const total = good + neutral + bad
  return (
    <div>
      <Feedback 
        heading="give feedback"
        set1={() => setGood(good + 1)}
        set2={() => setNeutral(neutral + 1)}
        set3={() => setBad(bad + 1)}
        text1="good"
        text2="neutral"
        text3="bad"
      />
      <Statistics 
        heading="statistics" 
        good={good} 
        neutral={neutral} 
        bad={bad} 
        all={total}
        average={(good - bad) / total}
        positive={(good / total) * 100}
      />
    </div>
  )
}

export default App