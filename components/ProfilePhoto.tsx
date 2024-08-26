import React from "react";
import Image from "next/image";
import abdullah2 from "../public/abdullah2.png";
import ellipsel from "../public/Ellipsel.png";
import ellipser from "../public/Ellipser.png";
export const ProfilePhoto = () => {
  return (
    <div className="hidden lg:block relative">
      <Image
        src={ellipsel}
        alt="ellipse"
        className="absolute z-0 right-[22vw] w-[13vw]"
      />

      <div className="bg-[linear-gradient(132deg,_#c2c2c2_0%,_#969696_100%)] p-4 shadow shadow-2xl z-10 relative ">
        <Image
          src={abdullah2}
          alt="abdullah"
          className="w-[160vw] rounded-lg z-10" // This makes the image responsive
        />
      </div>
      <Image
        src={ellipser}
        alt="ellipse"
        className="absolute  z-0 right-[-4vw] top-[28vh] w-[13vw]"
      />
    </div>
  );
};
