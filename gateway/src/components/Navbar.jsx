import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="w-full py-3 px-10 bg-gray-200 flex items-center justify-between">
      <h1 className="font-bold text-lg">Logo</h1>
      <div className="flex items-center gap-10">
        <Link to="/">
          <p className="cursor-pointer">Home</p>
        </Link>
        <Link to="/about">
          <p className="cursor-pointer">About</p>
        </Link>
        <Link to="/contact">
          Contact Us
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
