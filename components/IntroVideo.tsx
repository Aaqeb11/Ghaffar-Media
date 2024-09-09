import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useRef } from "react";

export const IntroVideo = () => {
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
    return () => {
      if (videoElement) {
        videoElement.pause();
      }
    };
  }, [inView]);
  return (
    <div ref={ref} className="w-full flex items-center justify-center">
      <video
        ref={videoRef}
        className="lg:w-[59vw] lg:h-[70vh] rounded-lg"
        id="video"
        loop
        playsInline
        muted
        controls
      >
        <source src="/GhaffarReel.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};
