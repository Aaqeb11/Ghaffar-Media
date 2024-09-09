import React from "react";
import { useState, useEffect, useRef } from "react";
import "react-multi-carousel/lib/styles.css";
import { reviews } from "../data/Reviews";
import { useInView } from "react-intersection-observer";
interface VideoData {
  video: string; // Assuming the video property is a string URL
  // Add other properties if needed
}

interface VideoItemsProps {
  video: VideoData;
  isActive: boolean;
}
export const VideoItems: React.FC<VideoItemsProps> = ({ video, isActive }) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: false,
  });
  useEffect(() => {
    const videoElement = videoRef.current;
    if (videoElement) {
      if (inView) {
        videoElement.play().catch((error) => {
          console.error("Error playing video:", error);
        });
      } else {
        videoElement.pause();
      }
    }

    // Cleanup function
    return () => {
      if (videoElement) {
        videoElement.pause();
      }
    };
  }, [inView]);
  return (
    <div ref={ref} className="flex justify-center items-center">
      <video
        ref={videoRef}
        className="md:h-[75vh] h-[57vh] rounded-xl "
        controls
        loop
        playsInline
        muted
      >
        <source src={video.video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};
