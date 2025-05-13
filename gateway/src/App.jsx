import React from "react";
import Card from "./components/Card.jsx";
// import { greet, greet2 } from "./New";

const App = () => {
  // greet();
  // greet2();

  return (
    <div className="grid grid-cols-4 gap-4">
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
};

export default App;
