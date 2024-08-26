"use client";
import Image from "next/image";
import gradient from "../public/gradient.png";
import video from "../public/video.jpeg";
import { Clients } from "@/data/Clients";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
// import { ScrollSmoother } from "gsap/all";
import { useEffect, useRef, useState } from "react";
import { GiAsparagus } from "react-icons/gi";
import { AboutUs } from "@/components/AboutUs";
import { Companies } from "@/components/Companies";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);
export default function Home() {
  const scope = useRef(null);
  const t1 = gsap.timeline();
  const t2 = gsap.timeline();
  // const [isMobile, setIsMobile] = useState(false);

  // useEffect(() => {
  //   setIsMobile(window.matchMedia("(max-width: 768px)").matches);
  // }, []);
  const isMobile =
    typeof window !== "undefined" &&
    window.matchMedia("(max-width: 768px)").matches;
  useGSAP(
    () => {
      // Animation for the "intro" and "button" elements

      t1.from("#intro", {
        yPercent: -100,
        duration: 1.3,
        opacity: 0,
        delay: 0.3,
      })
        .from("#button", {
          duration: 1.0,
          opacity: 0,
          delay: 0.2,
        })
        .from("#limited", {
          yPercent: -100,
          duration: 1.0,
          opacity: 0,
          delay: 0.2,
        });
      gsap.from("#about", {
        yPercent: -100,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: "#about-sec",
          start: "top center",
          // markers: true,
        },
      });
      gsap.from("#about-content", {
        xPercent: -100,
        opacity: 0,
        duration: 1.3,
        delay: 0.8,
        scrollTrigger: {
          trigger: "#about-sec",
          start: "top center",
          // markers: true,
        },
      });

      if (isMobile) {
        // Mobile animation: simple fade in for the video element
        gsap.from("#video", {
          yPercent: 100,
          delay: 0.3,
          opacity: 0,
          duration: 1.3,
        });
      } else {
        // Desktop animation: Scroll-triggered animation for the video element
        const videoAnimation = gsap.from("#video", {
          clipPath: "inset(0 0 100% 0)", // Start fully clipped
          opacity: 0,
          paused: true, // Start the animation in a paused state
          duration: 1.3,
          // Set the duration for the animation
        });

        // ScrollTrigger for desktop
        ScrollTrigger.create({
          trigger: "#video",
          start: "top 60%", // Adjust start point
          end: "bottom bottom", // Adjust end point
          scrub: 1, // Smooth scrolling effect
          // markers: true, // Remove in production
          onEnter: () => videoAnimation.play(), // Play the animation on entering the viewport
          onLeaveBack: () => videoAnimation.pause(), // Pause the animation when scrolling back up
          onEnterBack: () => videoAnimation.play(), // Resume the animation when scrolling back down
          toggleActions: "play pause resume none", // Define actions based on scroll position
          once: true, // Ensure it only plays once
        });
      }
    },
    { scope: scope }
  );

  return (
    <main className="" ref={scope} id="#scroll-smoother">
      <section className="flex flex-col items-center p-4 lg:mt-[100px] mt-[20px] gap-8 min-h-[calc(100vh-30vh)] lg:h-auto">
        <div className="flex flex-col items-center" id="intro">
          <div className="flex flex-col items-center gap-4">
            <p
              className="text-[#D72323] flex justify-center border-[1px] border-[#D72323] px-5 py-1 rounded-2xl "
              id="limited"
            >
              LIMITED SPOTS
            </p>
            <h1 className="lg:text-9xl text-4xl font-medium gradient-text text-center">
              Ghaffar Enterprises
            </h1>
          </div>
          <p className="text-[21px] lg:w-[45vw] w-[85vw] lg:text-2xl text-center leading-8 ">
            We help enterpreneurs produce top-tier social media content taking
            their brand and business to the next level.
          </p>
        </div>
        <button
          className="border-[1px] border-white shadow-lg shadow-gray-300 px-6 py-4 rounded-xl text-xl  bg-[#D72323] text-white font-bold hover:bg-[white] hover:border-[1px] hover:border-[#D72323] hover:text-black hover:transition hover:duration-500"
          id="button"
        >
          Book a call for free
        </button>
        <Image
          src={video}
          id="video"
          alt="bg-video"
          className="lg:w-[59vw] lg:h-[78vh]"
        />
      </section>
      <section
        className="flex flex-col items-center  lg:gap-[14vh] gap-[6vh] min-h-screen"
        id="about-sec"
      >
        <div
          className="flex flex-col items-center gap-4 justify-center lg:justify-start pt-[5vh]"
          id="about"
        >
          <p className="text-[#D72323] flex justify-center border-[1px] border-[#D72323] px-8 py-1 rounded-2xl text-sm tracking-wider">
            WHO AM I
          </p>
          <h1 className="text-center text-4xl lg:text-6xl ">About Us</h1>
        </div>
        <div className=" flex items-center justify-center" id="about-content">
          <AboutUs />
        </div>
      </section>
      <section
        id="companies"
        className="flex flex-col items-center min-h-screen  lg:gap-[14vh] gap-[6vh]"
      >
        <div
          className="flex flex-col items-center gap-4 justify-center lg:justify-start pt-[5vh]"
          id="about"
        >
          <p className="text-[#D72323] flex justify-center border-[1px] border-[#D72323] px-8 py-1 rounded-2xl text-sm tracking-wider">
            COMPANIES
          </p>
          <h1 className="text-center text-4xl lg:text-6xl  ">
            Companies and Clientele
          </h1>
        </div>
        <Companies />
      </section>
    </main>
  );
}
