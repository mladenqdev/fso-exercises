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

  console.log('test')

  const Header = ({course}) => {
    return (
      <h1>{course.name}</h1>
    )
  }

  const Part = ({partName, noOfExercises}) => <p key={partName}><strong>Part name:</strong> {partName}, <strong>number of exercises</strong>: {noOfExercises}</p>

  const Content = ({courseParts}) => 
    courseParts.map((coursePart) => (
      <Part partName={coursePart.name} noOfExercises={coursePart.exercises} key={coursePart.name} />
    ))

    const Total = ({ courseParts }) => {
      const totalExercises = courseParts.reduce((sum, part) => sum + part.exercises, 0);
      return <p>Total number of exercises: {totalExercises}</p>;
    };
  

  return (
    <div>
      <Header course={course} />
      <Content courseParts={course.parts} />
      <Total courseParts={course.parts} />
    </div>
  )
}

export default App