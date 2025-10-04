import React from "react";

function List({ items }) {
  return (
    <div>
      {items.map((item, i) => (
        <div>
          <h2>Student ID Card</h2>
          <p>Name: {item.Name}</p>
          <p>Roll No: {item.RollNo}</p>
          <p>Age: {item.Age}</p>
          <p>Class: {item.Class}</p>
          <p>Class: {item.City}</p>
        </div>
      ))}
    </div>
  );
}

const Funimplement = () => {
  const students = [
    { Name: "Chetan", RollNo: "1", Age: "26", Class: "BCA", City: "Nashik" },
    { Name: "Ketan", RollNo: "2", Age: "21", Class: "BA", City: "Nashik" },
  ];

  return (
    <div id="List">
      <List items={students} />
    </div>
  );
};

export default Funimplement;
