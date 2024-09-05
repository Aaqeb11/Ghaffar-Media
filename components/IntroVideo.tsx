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
      className="lg:w-full rounded-lg"
    />
  );
};
