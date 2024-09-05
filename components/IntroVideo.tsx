import React from "react";

export const IntroVideo = () => {
  return (
    <video
      src="/GhaffarReel.mp4"
      id="video"
      controls
      autoPlay
      muted
      loop
      className="lg:w-[59vw] lg:h-[78vh] rounded-lg"
    />
  );
};
