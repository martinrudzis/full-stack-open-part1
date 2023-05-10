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

const Statistics = (props) => (
  <div>
    <h1>{props.heading}</h1>
    <div>good {props.good}</div>
    <div>neutral {props.neutral}</div>
    <div>bad {props.bad}</div>
  </div>
)

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  console.log(good)
  console.log(neutral)
  console.log(bad)
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
      <Statistics heading="statistics" good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App