const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  const courseParts = [{partName: part1, noOfExercises: exercises1}, {partName: part2, noOfExercises: exercises2}, {partName: part3, noOfExercises: exercises3}]

  const Header = ({course}) => {
    return (
      <h1>{course}</h1>
    )
  }

  const Content = ({courseParts}) => 
    courseParts.map((coursePart) => (
      <p key={coursePart.partName}><strong>Part name:</strong> {coursePart.partName}, <strong>number of exercises</strong>: {coursePart.noOfExercises}</p>
    ))

    const Total = ({ courseParts }) => {
      const totalExercises = courseParts.reduce((sum, part) => sum + part.noOfExercises, 0);
      return <p>Total number of exercises: {totalExercises}</p>;
    };
  

  return (
    <div>
      <Header course={course} />
      <Content courseParts={courseParts} />
      <Total courseParts={courseParts} />
    </div>
  )
}

export default App