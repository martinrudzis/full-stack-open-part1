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
      <Part part = {content.parts[0]} />
      <Part part = {content.parts[1]} />
      <Part part = {content.parts[2]} />
    </div>
  )
}

const Total = (nums) => {
  return (
    <p>
      Number of exercises {
        nums.parts[0].exercises + 
        nums.parts[1].exercises + 
        nums.parts[2].exercises
      }
    </p>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }
  return (
    <div>
      <Header course = {course.name} />
      <Content parts = {course.parts} />
      <Total parts = {course.parts} />
    </div>
  )
}

export default App