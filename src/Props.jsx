import React from 'react'

const Props = () => {

function StudentId(props) {
  return (
    <div>
      <h2>Student ID Card</h2>
      <p>Name: {props.name}</p>
      <p>Roll No: {props.rollNo}</p>
      <p>Age: {props.age}</p>
      <p>Class: {props.studentClass}</p>
    </div>
  );
}


  return (
    <div>
      <StudentId name="Chetan Virendra Prasad" rollNo="1" age="26" studentClass="BCA" />
    </div>
  )
}

export default Props