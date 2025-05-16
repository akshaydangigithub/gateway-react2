import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

const Hero = () => {
  return (
    <>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>
          {" "}
          <div className="h-[90vh] overflow-hidden w-full bg-[#F0E0FF] grid grid-cols-2">
            <div className="h-full w-full flex flex-col justify-center pl-16">
              <p className="font-serif text-2xl">Smart Products</p>
              <h1 className="font-medium text-7xl mt-5">
                Winter Offer <br /> 2025 Collection
              </h1>
              <button className="w-fit mt-8 border border-black py-4 px-14 cursor-pointer relative after:absolute after:w-0 after:h-full after:top-0 after:left-0 after:bg-purple-500 after:z-10 hover:after:w-full after:duration-400 hover:text-white">
                <span className="z-20 relative">SHOP NOW</span>
              </button>
            </div>
            <div className="flex items-end">
              <img
                className="object-cover mt-28 h-[90%] w-[90%]"
                src="https://flone.jamstacktemplates.dev/assets/img/slider/single-slide-hm1-2.png"
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className="h-[90vh] overflow-hidden w-full bg-[#F0E0FF] grid grid-cols-2">
            <div className="h-full w-full flex flex-col justify-center pl-16">
              <p className="font-serif text-2xl">Smart Products</p>
              <h1 className="font-medium text-7xl mt-5">
                Winter Offer <br /> 2025 Collection
              </h1>
              <button className="w-fit mt-8 border border-black py-4 px-14 cursor-pointer relative after:absolute after:w-0 after:h-full after:top-0 after:left-0 after:bg-purple-500 after:z-10 hover:after:w-full after:duration-400 hover:text-white">
                <span className="z-20 relative">SHOP NOW</span>
              </button>
            </div>
            <div className="flex items-end">
              <img
                className="object-cover mt-28 h-[90%] w-[90%]"
                src="https://flone.jamstacktemplates.dev/assets/img/slider/single-slide-hm1-2.png"
              />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      <div className="w-full grid grid-cols-4 gap-4 pt-20 pb-20 px-8">
        <div className="flex gap-6 items-center">
          <img
            className="w-14 object-cover"
            src="https://flone.jamstacktemplates.dev/assets/img/icon-img/support-1.png"
          />
          <div>
            <h1 className="font-semibold text-lg">Free Shipping</h1>
            <p className="text-sm text-gray-700">Free shipping on all order</p>
          </div>
        </div>
        <div className="flex gap-6 items-center">
          <img
            className="w-14 object-cover"
            src="https://flone.jamstacktemplates.dev/assets/img/icon-img/support-2.png"
          />
          <div>
            <h1 className="font-semibold text-lg">Support 24/7</h1>
            <p className="text-sm text-gray-700">Free shipping on all order</p>
          </div>
        </div>
        <div className="flex gap-6 items-center">
          <img
            className="w-14 object-cover"
            src="https://flone.jamstacktemplates.dev/assets/img/icon-img/support-3.png"
          />
          <div>
            <h1 className="font-semibold text-lg">Money Return</h1>
            <p className="text-sm text-gray-700">Free shipping on all order</p>
          </div>
        </div>
        <div className="flex gap-6 items-center">
          <img
            className="w-14 object-cover"
            src="https://flone.jamstacktemplates.dev/assets/img/icon-img/support-4.png"
            alt=""
          />
          <div>
            <h1 className="font-semibold text-lg">Order Discount</h1>
            <p className="text-sm text-gray-700">Free shipping on all order</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
