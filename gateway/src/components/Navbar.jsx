import React, { useContext } from "react";
import { CiSearch } from "react-icons/ci";
import { FaUser } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa6";
import { IoBagOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { DataContext } from "../ContextApi";

const Navbar = () => {
  const { cartData } = useContext(DataContext);

  return (
    <nav className="bg-white flex items-center justify-between py-4 px-8">
      <img
        src="https://flone.jamstacktemplates.dev/assets/img/logo/logo.png"
      />
      <div className="flex items-center gap-6">
        <Link to="/">
          <p className="cursor-pointer font-semibold">Home</p>
        </Link>
        <Link to="/cart">
          <p className="cursor-pointer font-semibold">Cart</p>
        </Link>
        <Link to="/admin">
          <p className="cursor-pointer font-semibold">Admin</p>
        </Link>
        <p className="cursor-pointer font-semibold">Contact Us</p>
      </div>
      <div className="flex gap-6">
        <CiSearch className="cursor-pointer text-lg" />
        <FaUser className="cursor-pointer text-lg" />
        <FaRegHeart className="cursor-pointer text-lg" />
        <Link to="/cart">
          <div className="relative">
            <IoBagOutline className="cursor-pointer text-lg" />
            <div className="h-5 w-5 rounded-full bg-red-500 absolute -top-3 -right-3 flex items-center justify-center">
              <span className="text-white text-sm">{cartData.length}</span>
            </div>
          </div>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
