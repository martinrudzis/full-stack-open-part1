const Header = (header) => {
  return (
    <h1>{header.course}</h1>
  )
}

const Part = (props) => {
  return (
    <p>
      {props.part.name} {props.part.exercises}
    </p>
  )
}

const Content = (content) => {
  return (
    <div>
      <Part part = {content.part1} />
      <Part part = {content.part2} />
      <Part part = {content.part3} />
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
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }
  return (
    <div>
      <Header course = {course} />
      <Content part1 = {part1} part2 = {part2} part3 = {part3} />
      <Total ex1 = {part1.exercises} ex2 = {part2.exercises} ex3 = {part3.exercises} />
    </div>
  )
}

export default App