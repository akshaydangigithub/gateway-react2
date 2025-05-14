import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="h-screen w-full flex flex-col items-center justify-center">
      <h1 className="text-5xl text-red-500">404</h1>
      <p className="text-xl">Page not found</p>
      <Link to="/">
        <button className="bg-blue-500 p-2.5 rounded-xl text-white cursor-pointer mt-5">
          Go to Homepage
        </button>
      </Link>
    </div>
  );
};

export default NotFound;
