import React from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <h1 className="text-center text-2xl mt-10 font-bold">This is homepage</h1>
    </div>
  );
};

export default HomePage;
