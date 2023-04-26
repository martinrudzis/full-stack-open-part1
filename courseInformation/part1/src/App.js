const Header = (header) => {
  return (
    <h1>{header.course}</h1>
  )
}

const Part = (props) => {
  return (
    <p>
      {props.part} {props.exs}
    </p>
  )
}

const Content = (content) => {
  return (
    <div>
      <Part part = {content.part1} exs = {content.ex1} />
      <Part part = {content.part2} exs = {content.ex2} />
      <Part part = {content.part3} exs = {content.ex3} />
    </div>
  )
}

const Total = (nums) => {
  return (
    <p>
      Number of exercises {nums.ex1 + nums.ex2 + nums.ex3}
    </p>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course = {course} />
      <Content part1 = {part1} ex1 = {exercises1} part2 = {part2} ex2 = {exercises2} part3 = {part3} ex3 = {exercises3} />
      <Total ex1 = {exercises1} ex2 = {exercises2} ex3 = {exercises3} />
    </div>
  )
}

export default App