"use client";
import Image from "next/image";
import gradient from "../public/gradient.png";
import video from "../public/video.jpeg";
import { Clients } from "@/data/Clients";

export default function Home() {
  return (
    <main>
      <section className="flex flex-col items-center p-4 lg:mt-[100px] mt-[20px] gap-8 ">
        <div className="flex flex-col items-center gap-4">
          <p className="text-[#D72323] flex justify-center border-[1px] border-[#D72323] px-5 py-1 rounded-2xl ">
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
        <button className="border-[1px] border-white shadow-lg shadow-gray-300 px-6 py-4 rounded-xl text-xl  bg-[#D72323] text-white font-bold hover:bg-[white] hover:border-[1px] hover:border-[#D72323] hover:text-black hover:transition hover:duration-500">
          Book a call for free
        </button>
        <Image src={video} alt="bg-video" className="lg:w-[59vw] lg:h-[78vh]" />
      </section>
      <section className="flex flex-col items-center">
        <p className="text-[#13131399] text-xl">OUR CLIENTS</p>
        <div
          className={`grid grid-cols-3 items-center justify-center pt-4 md:grid-cols-${Clients.length}`}
        >
          {Clients.map((data, index) => (
            <Image
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
