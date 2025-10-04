import React from "react";
import { useState } from "react";

function Onchange() {
  const [name, setName] = useState("");

  return (
    <>
      <div>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter Your Name"
        />
        <p>Hello, {name}</p>
      </div>
    </>
  );
}

export default Onchange;
