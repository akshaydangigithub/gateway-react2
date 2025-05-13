import React from "react";

const Card = ({ userData }) => {
  console.log(userData.name);

  return (
    <div className="w-full h-80 border-2 rounded-xl flex items-center justify-center flex-col gap-4">
      <h1>Name: {userData.name}</h1>
      <h1>Age: {userData.age}</h1>
      <h1>Salary: {userData.salary}</h1>
      <h1>Experience: {userData.exp}</h1>
    </div>
  );
};

export default Card;
