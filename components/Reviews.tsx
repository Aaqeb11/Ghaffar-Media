import { useState, useEffect } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Image from "next/image";
import { reviews } from "../data/Reviews";

export default function Reviews() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  return (
    <Carousel
      responsive={responsive}
      autoPlay={true}
      infinite={true}
      autoPlaySpeed={4000}
      removeArrowOnDeviceType={["tablet", "mobile"]}
      pauseOnHover
      className=""
    >
      {reviews.map((data: any, index: any) => {
        return (
          <div
            key={index}
            className="flex flex-col bg-white rounded-xl items-center gap-[4vh] lg:gap-[8vh] lg:w-[52vw] lg:h-[60vh] mx-auto p-10 md:h-[30vh] h-[55vh] w-[80%] border border-red-500 shadow-md shadow-black"
          >
            <div className="text-red-500 text-6xl lg:text-8xl self-start ml-4">
              <span>&ldquo;</span>
            </div>
            <div className="flex flex-col w-full px-4">
              <p className="text-black italic lg:text-xl text-lg text-left mb-2">
                {data.text}
              </p>
              <h2 className="font-bold text-black lg:text-3xl text-xl text-right">
                {data.title}
              </h2>
            </div>
          </div>
        );
      })}
    </Carousel>
  );
}
