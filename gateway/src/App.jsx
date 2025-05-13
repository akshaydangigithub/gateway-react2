import React from "react";
import Card from "./components/Card";

const App = () => {
  let data = {
    name: "Akshay",
    age: 23,
    salary: 30,
    exp: "3 years",
  };

  // console.log(data);

  return (
    <div className="grid grid-cols-4 gap-3">
      <Card userData={data} />
    </div>
  );
};

export default App;
