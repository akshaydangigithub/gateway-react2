import React from "react";
import Card from "./components/Card";

const App = () => {
  let data = [
    {
      name: "Akshay",
      age: 23,
      salary: 30,
      exp: "3 years",
    },
    {
      name: "Naman",
      age: 23,
      salary: 30,
      exp: "3 years",
    },
    {
      name: "Akshay",
      age: 23,
      salary: 30,
      exp: "3 years",
    },
    {
      name: "Akshay",
      age: 23,
      salary: 30,
      exp: "3 years",
    },
    {
      name: "Akshay",
      age: 23,
      salary: 30,
      exp: "3 years",
    },
  ];

  // console.log(data);

  return (
    <div className="grid grid-cols-4 gap-3">
     {
      data.map((user)=>(
         <Card userData={user} />
      ))
     }
    </div>
  );
};

export default App;
