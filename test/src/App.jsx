import React from "react";
import { useState } from "react";

const App = () => {
  
  const [name, setname] = useState("Akshay")

  function clickHandler() {
    setname("Changed")
  }

  return (
    <>
      <h1>{name}</h1>

      <button onClick={() => clickHandler()}>click</button>
    </>
  );
};

export default App;
