import React from "react";
import { data } from "../data/Collaborations";

export const Collaborations = () => {
  return (
    <div className="flex flex-wrap items-center justify-center gap-8 w-full px-5">
      {data.map((collab) => (
        <div
          key={collab.id}
          className="relative w-full lg:w-[45vw] lg:h-[45vh] md:w-[35vw] md:h-[20vh] h-[54vw]" // Adjust the height for mobile
        >
          <iframe
            className="absolute top-0 left-0 w-full h-full rounded-lg"
            src={`https://www.youtube.com/embed/${collab.youtubeId}`}
            title={collab.title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      ))}
    </div>
  );
};
