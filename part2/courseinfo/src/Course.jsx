const Course = ({ courses }) => {
  console.log(courses);
  return (
    <div>
      {courses.map((course) => {
        return (
          <div key={course.id}>
            <Header course={course.name} />
            <Content parts={course.parts} />
            <Total parts={course.parts} />
          </div>
        );
      })}
    </div>
  );
};
const Header = (props) => {
  console.log("header + " + props.course);
  return (
    <>
      <h2>{props.course}</h2>
    </>
  );
};
const Part = (props) => {
  return (
    <>
      <p>
        {props.part} {props.exercises}
      </p>
    </>
  );
};
const Content = (props) => {
  console.log("content + " + props.parts[0].name);
  return (
    <>
      {props.parts.map((part) => (
        <Part key={part.id} part={part.name} exercises={part.exercises} />
      ))}
    </>
  );
};
const Total = (props) => {
  const total = props.parts.reduce(
    (accumulator, currentValue) => accumulator + currentValue.exercises,
    0
  );
  return (
    <>
      <p>
        <strong>Total of {total} exercises</strong>
      </p>
    </>
  );
};
export default Course;
