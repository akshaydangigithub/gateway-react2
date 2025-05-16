import React from "react";
import { Link } from "react-router-dom";
import AddProducts from "../components/AddProducts";
import AllProducts from "../components/AllProducts";

const AdminDashboard = () => {
  return (
    <div className="flex">
      <aside className="w-[25%] h-screen bg-gray-200 p-4 sticky top-0 left-0">
        <h1 className="font-semibold text-xl">Dashboard</h1>
        <Link to="/" className="mt-5 block bg-gray-400 w-full py-2 px-3">
          Home
        </Link>
      </aside>

      <main className="w-[75%] p-5">
        <h1 className="font-semibold text-xl">Add Products</h1>
        <AddProducts />

        <h1 className="font-semibold text-xl mt-5">All Products</h1>
        <AllProducts />
      </main>
    </div>
  );
};

export default AdminDashboard;
