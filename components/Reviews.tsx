import { useState, useEffect, useRef } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { reviews } from "../data/Reviews";
import { useInView } from "react-intersection-observer";
import { VideoItems } from "./VideoItems";
export default function VideoCarousel() {
  const [activeIndex, setActiveIndex] = useState<number>(0);
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
      infinite={true}
      pauseOnHover
      afterChange={(previousSlide, { currentSlide }) => {
        setActiveIndex(currentSlide);
      }}
      className="w-full h-full"
    >
      {reviews.map((video, index) => (
        <VideoItems
          key={index}
          video={video}
          isActive={index === activeIndex}
        />
      ))}
    </Carousel>
  );
}
