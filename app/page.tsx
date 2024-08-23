"use client";
import Image from "next/image";
import gradient from "../public/gradient.png";
import video from "../public/video.jpeg";
import { Clients } from "@/data/Clients";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react";
import { GiAsparagus } from "react-icons/gi";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);
export default function Home() {
  const scope = useRef(null);
  const t1 = gsap.timeline();
  const isMobile = window.matchMedia("(max-width: 768px)").matches;
  useGSAP(
    () => {
      t1.from("#intro", {
        yPercent: -100,
        duration: 1.3,
        opacity: 0,
        delay: 0.3,
      })
        .from("#button", {
          duration: 1.0,
          opacity: 0,
          delay: 0.3,
        })
        .from("#limited", {
          yPercent: -100,
          duration: 1.0,
          opacity: 0,
          delay: 0.3,
        });
      if (isMobile) {
        // Mobile animation: simple fade in
        gsap.from("#video", {
          yPercent: 100,
          delay: 0.3,
          opacity: 0,
          duration: 1.3,
        });
      } else {
        gsap.fromTo(
          "#video",
          {
            clipPath: "inset(100% 0 0 0)", // Start fully clipped
            opacity: 0,
          },
          {
            scrollTrigger: {
              trigger: "#video",
              start: "top 60%",
              end: "bottom bottom",
              scrub: 1, // Add a small amount of smoothing
              markers: true, // Remember to remove this in production
              onUpdate: (self) => {
                // Only update the animation when scrolling down
                if (self.direction === 1) {
                  self?.animation?.progress(self.progress);
                }
              },
            },
            clipPath: "inset(0% 0 0 0)", // End with no clipping
            opacity: 1,
            duration: 4.0,
            ease: "none", // Linear easing for smooth progression
          }
        );
      }
    },
    { scope: scope }
  );
  return (
    <main className="" ref={scope}>
      <section className="flex flex-col items-center p-4 lg:mt-[100px] mt-[20px] gap-8 ">
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
      <section className="flex flex-col items-center">
        <p className="text-[#13131399] text-xl">OUR CLIENTS</p>
        <div
          className={`grid grid-cols-3 items-center justify-center pt-4 md:grid-cols-${Clients.length}`}
        >
          {Clients.map((data, index) => (
            <Image
              key={index}
              src={data.img}
              alt={data.alt}
              className="w-[50px] h-[50px] flex"
            />
          ))}
        </div>
      </section>
    </main>
  );
}
