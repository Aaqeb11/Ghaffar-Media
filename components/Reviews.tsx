import { useState, useEffect } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { reviews } from "../data/Reviews"; // Assume we have this import

export default function VideoCarousel() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      slidesToSlide: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      slidesToSlide: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };

  return (
    <Carousel
      responsive={responsive}
      // autoPlay={true}
      infinite={true}
      autoPlaySpeed={4000}
      // removeArrowOnDeviceType={["tablet", "mobile"]}
      pauseOnHover
      className="w-full h-full"
    >
      {reviews.map((video, index) => (
        <div key={index} className=" flex justify-center items-center">
          <video
            className="md:h-[75vh] h-[57vh] rounded-xl "
            controls
            autoPlay
            muted
            loop
          >
            <source src={video.video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      ))}
    </Carousel>
  );
}
