import React from "react";

const Blog = () => {
  return (
    <div className="mt-10 px-8  pb-20">
      <div className="h-12 w-full flex items-center justify-center">
        <div className="h-[2px] w-20 bg-black" />
        <h1 className="font-bold text-xl px-4">OUR BLOG</h1>
        <div className="h-[2px] w-20 bg-black" />
      </div>
      <div className="grid grid-cols-3 gap-6 mt-10">
        <div className="w-full group relative">
          <div className="flex items-center gap-4 absolute top-4 left-4 z-10">
            <h1 className="bg-[#A749FF] text-white w-fit px-2 text-sm  ">
              lifestyle
            </h1>
            <h1 className="bg-[#A749FF] text-white w-fit px-2 text-sm  ">
              Men
            </h1>
          </div>
          <div className="h-64 w-full overflow-hidden">
            <img
              className="h-full w-full object-cover group-hover:scale-115 duration-400"
              src="https://flone.jamstacktemplates.dev/assets/img/blog/blog-1.jpg"
              alt=""
            />
          </div>
          <div className="bg-white h-fit w-fit px-14 py-4 block m-auto -mt-20 relative">
            <h1 className="font-medium text-center text-2xl hover:text-[#a749ff] duration-100 cursor-pointer">
              A guide to latest <br /> trends
            </h1>
            <p className="text-center text-gray-700 mt-2">By Admin</p>
          </div>
        </div>
        <div className="w-full group relative">
          <div className="flex items-center gap-4 absolute top-4 left-4 z-10">
            <h1 className="bg-[#A749FF] text-white w-fit px-2 text-sm  ">
              lifestyle
            </h1>
            <h1 className="bg-[#A749FF] text-white w-fit px-2 text-sm  ">
              Men
            </h1>
          </div>
          <div className="h-64 w-full overflow-hidden">
            <img
              className="h-full w-full object-cover group-hover:scale-115 duration-400"
              src="https://flone.jamstacktemplates.dev/assets/img/blog/blog-2.jpg"
              alt=""
            />
          </div>
          <div className="bg-white h-fit w-fit px-14 py-4 block m-auto -mt-20 relative">
            <h1 className="font-medium text-center text-2xl hover:text-[#a749ff] duration-100 cursor-pointer">
              A guide to latest <br /> trends
            </h1>
            <p className="text-center text-gray-700 mt-2">By Admin</p>
          </div>
        </div>
        <div className="w-full group relative">
          <div className="flex items-center gap-4 absolute top-4 left-4 z-10">
            <h1 className="bg-[#A749FF] text-white w-fit px-2 text-sm  ">
              lifestyle
            </h1>
            <h1 className="bg-[#A749FF] text-white w-fit px-2 text-sm  ">
              Men
            </h1>
          </div>
          <div className="h-64 w-full overflow-hidden">
            <img
              className="h-full w-full object-cover group-hover:scale-115 duration-400"
              src="https://flone.jamstacktemplates.dev/assets/img/blog/blog-3.jpg"
              alt=""
            />
          </div>
          <div className="bg-white h-fit w-fit px-14 py-4 block m-auto -mt-20 relative">
            <h1 className="font-medium text-center text-2xl hover:text-[#a749ff] duration-100 cursor-pointer">
              A guide to latest <br /> trends
            </h1>
            <p className="text-center text-gray-700 mt-2">By Admin</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
