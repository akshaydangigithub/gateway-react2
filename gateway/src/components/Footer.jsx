import React from "react";

const Footer = () => {
  return (
    <div className="py-20 w-full mt-10 px-8 bg-[#F6F6F8]">
      <div className="grid grid-cols-5 gap-4 h-full w-full">
        <div className="flex h-full w-full flex-col justify-center">
          <img
            className="w-[50%]"
            src="https://flone.jamstacktemplates.dev/assets/img/logo/logo.png"
            alt=""
          />
          <p className="mt-2">© 2025 Flone. All Rights Reserved</p>
        </div>
        <div >
          <h1 className="font-semibold">ABOUT US</h1>
          <p className="mt-3 text-lg text-gray-700 cursor-pointer hover:text-[#a749ff]">
            About us
          </p>
          <p className="mt-1 text-lg text-gray-700 cursor-pointer hover:text-[#a749ff]">
            Store location
          </p>
          <p className="mt-1 text-lg text-gray-700 cursor-pointer hover:text-[#a749ff]">
            Contact
          </p>
          <p className="mt-1 text-lg text-gray-700 cursor-pointer hover:text-[#a749ff]">
            Orders tracking
          </p>
        </div>
        <div>
          <h1 className="font-semibold">USEFUL LINKS</h1>
          <p className="mt-3 text-lg text-gray-700 cursor-pointer hover:text-[#a749ff]">
            About us
          </p>
          <p className="mt-1 text-lg text-gray-700 cursor-pointer hover:text-[#a749ff]">
            Store location
          </p>
          <p className="mt-1 text-lg text-gray-700 cursor-pointer hover:text-[#a749ff]">
            Contact
          </p>
          <p className="mt-1 text-lg text-gray-700 cursor-pointer hover:text-[#a749ff]">
            Orders tracking
          </p>
        </div>
        <div >
          <h1 className="font-semibold">FOLLOW US</h1>
          <p className="mt-3 text-lg text-gray-700 cursor-pointer hover:text-[#a749ff]">
            About us
          </p>
          <p className="mt-1 text-lg text-gray-700 cursor-pointer hover:text-[#a749ff]">
            Store location
          </p>
          <p className="mt-1 text-lg text-gray-700 cursor-pointer hover:text-[#a749ff]">
            Contact
          </p>
          <p className="mt-1 text-lg text-gray-700 cursor-pointer hover:text-[#a749ff]">
            Orders tracking
          </p>
        </div>
        <div >
          <h1 className="font-semibold">SUBSCRIBE</h1>
          <p className="mt-3 text-sm text-gray-700">
            Get E-mail updates about our latest shop and special offers.
          </p>
          <input
            type="email"
            placeholder="Enter your email address"
            className="mt-3 outline-none border-b border-gray-600 py-4"
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
