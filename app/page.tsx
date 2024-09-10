"use client";
import Image from "next/image";
import gradient from "../public/gradient.png";
// import video from "../public/video.jpeg";
import { Clients } from "@/data/Clients";
import dynamic from "next/dynamic";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
// import { ScrollSmoother } from "gsap/all";
import { useEffect, useRef, useState } from "react";
import { GiAsparagus } from "react-icons/gi";
import { AboutUs } from "@/components/AboutUs";
import { useRouter } from "next/router";
import { Companies } from "@/components/Companies";
import { Collaborations } from "@/components/Collaborations";
import Reviews from "@/components/Reviews";
import AppointmentForm from "@/components/AppointmentForm";
import Events from "@/components/Events";
import CalendlyEmbed from "@/components/Calendly";
import { Footer } from "@/components/Footer";
import Affiliate from "@/components/Affiliate";
import { ScriptForm } from "@/components/ScriptForm";
import { IntroVideo } from "@/components/IntroVideo";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);
export default function Home() {
  const scope = useRef(null);
  const t1 = gsap.timeline();
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
          start: "-230px center",
          toggleActions: "play none none reverse",
          // markers: true,
        },
      });
      gsap.from("#about-content", {
        xPercent: -100,
        opacity: 0,
        duration: 0.8,
        scrollTrigger: {
          trigger: "#about-sec",
          start: "top center",
          // markers: true,
        },
      });
      gsap.from("#company", {
        yPercent: -100,
        opacity: 0,
        duration: 0.8,
        scrollTrigger: {
          trigger: "#companies",
          start: "top center",
          toggleActions: "play none none reverse",
          // markers: true,
        },
      });
      gsap.from("#events", {
        yPercent: -100,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: "#events-sec",
          start: "-230px center",
          toggleActions: "play none none reverse",
          // markers: true,
        },
      });
      gsap.from("#event-content", {
        xPercent: -100,
        opacity: 0,
        duration: 1,
        delay: 0.2,
        scrollTrigger: {
          trigger: "#events-sec",
          start: "-230px center",
          toggleActions: "play none none none",
          // markers: true,
        },
      });
      gsap.from("#collaboration", {
        yPercent: -100,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: "#collaboration-sec",
          start: "-230px center",
          toggleActions: "play none none reverse",
          // markers: true,
        },
      });
      gsap.from("#reviews", {
        yPercent: -100,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: "#reviews-sec",
          start: "-230px center",
          toggleActions: "play none none reverse",
          // markers: true,
        },
      });
      gsap.from("#affiliate", {
        yPercent: -100,
        opacity: 0,
        duration: 1.3,
        delay: 0.3,
        scrollTrigger: {
          trigger: "#affiliate-sec",
          start: "-230px center",
          toggleActions: "play none none reverse",
          // markers: true,
        },
      });
      gsap.from("#affiliate-content", {
        xPercent: 100,
        opacity: 0,
        duration: 1.3,
        delay: 0.3,
        scrollTrigger: {
          trigger: "#affiliate-sec",
          start: "-230px center",
          toggleActions: "play none none none",
          // markers: true,
        },
      });
      gsap.from("#resources", {
        yPercent: -100,
        opacity: 0,
        duration: 1,
        delay: 0.3,
        scrollTrigger: {
          trigger: "#resource-sec",
          start: "-230px center",
          toggleActions: "play none none reverse",
          // markers: true,
        },
      });
      gsap.from("#pricing", {
        yPercent: -100,
        opacity: 0,
        duration: 1,
        delay: 0.3,
        scrollTrigger: {
          trigger: "#pricing-sec",
          start: "-230px center",
          toggleActions: "play none none reverse",
          // markers: true,
        },
      });

      gsap.from("#form", {
        xPercent: -100,
        opacity: 0,
        duration: 1.3,
        delay: 0.3,
        scrollTrigger: {
          trigger: "#pricing-sec",
          start: "-230px center",
          toggleActions: "play none none none",
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
          toggleActions: "play none none none", // Define actions based on scroll position
          once: true, // Ensure it only plays once
        });
      }
    },
    { scope: scope }
  );
  const SectionScroll = (targetSectionId: string) => {
    if (targetSectionId) {
      const section = document.getElementById(targetSectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  };
  return (
    <main className="mt-20 " ref={scope} id="#scroll-smoother">
      <section
        className="flex flex-col items-center p-4  gap-8 md:gap-20 min-h-[calc(100vh-30vh)] lg:h-auto scroll-mt-20"
        id="home"
      >
        <div
          className="flex flex-col items-center  lg:mt-[50px] mt-[30px] gap-4"
          id="intro"
        >
          <div className="flex flex-col items-center gap-6 md:gap-12">
            <p
              className="text-[#D72323] text-center border-[1px] border-[#D72323] px-5 py-1 rounded-2xl "
              id="limited"
            >
              GET TO KNOW MORE ABOUT ME!
            </p>
            <h1 className="lg:text-9xl text-4xl md:text-7xl font-medium gradient-text text-center">
              Ghaffar Enterprises
            </h1>
          </div>
          <p className="text-[21px] lg:w-[45vw] w-[85vw] lg:text-3xl text-center leading-8 italic font-medium">
            Where Your Vision Meets Our Expertise
          </p>
        </div>
        <button
          className="border-[1px] border-white shadow-lg shadow-gray-300 px-6 py-4 rounded-xl text-xl  bg-[#D72323] text-white font-bold hover:bg-[white] hover:border-[1px] hover:border-[#D72323] hover:text-black hover:transition hover:duration-500"
          id="button"
          onClick={() => {
            SectionScroll("pricing");
          }}
        >
          Book a call for free
        </button>
        <IntroVideo />
      </section>
      <section
        className="flex flex-col items-center  lg:gap-[6vh] gap-[6vh] min-h-screen overflow-hidden"
        id="about-sec"
      >
        <div
          className="flex flex-col items-center gap-4 justify-center lg:justify-start pt-[5vh] "
          id="about"
        >
          <p className="text-[#D72323] text-center border-[1px] border-[#D72323] px-8 py-1 rounded-2xl text-sm tracking-wider">
            WHO AM I
          </p>
          <h1 className="text-center text-3xl lg:text-6xl ">About Us</h1>
        </div>
        <div className=" flex items-center justify-center" id="about-content">
          <AboutUs />
        </div>
      </section>
      <section
        id="companies"
        className="flex flex-col items-center min-h-screen  lg:gap-[6vh] gap-[6vh] overflow-hidden scroll-mt-6"
      >
        <div
          className="flex flex-col items-center gap-4 justify-center lg:justify-start pt-[5vh]"
          id="company"
        >
          <p className="text-[#D72323] text-center border-[1px] border-[#D72323] px-8 py-1 rounded-2xl text-sm tracking-wider">
            COMPANIES
          </p>
          <h1 className="text-center text-3xl lg:text-6xl  ">
            Companies and Clientele
          </h1>
        </div>
        <Companies />
      </section>
      <section
        className="min-h-screen flex flex-col lg:gap-[6vh] gap-[6vh] overflow-hidden"
        id="events-sec"
      >
        <div
          className="flex flex-col items-center gap-4 justify-center lg:justify-start pt-[5vh]"
          id="events"
        >
          <p className="text-[#D72323] text-center border-[1px] border-[#D72323] px-8 py-1 rounded-2xl text-sm tracking-wider">
            EVENTS
          </p>
          <h1 className="text-center text-3xl lg:text-6xl  ">
            The Events We Host
          </h1>
        </div>
        <div className="flex flex-col gap-8" id="event-content">
          <p
            className="text-lg lg:text-xl text-justify  md:px-14 px-7 "
            style={{ lineHeight: "1.85" }}
          >
            At the heart of our enterprises is a strong commitment to community
            and collaboration, and this is best exemplified through our dynamic
            events. Our events are not just gatherings but curated experiences
            where entrepreneurs, investors, and professionals from various
            industries come together to share knowledge, forge connections, and
            explore new opportunities.{" "}
            <span className="hidden md:flex md:pt-4">
              Hosted by our Visionary founder, these events focus on empowering
              individuals to start or build their own business, while showcasing
              the innovative solutions we offer across a diverse range of
              industries, including lead generation, real estate wholesaling,
              marketing, coaching, and more. We invite you to browse through the
              moments captured at our events, where like-minded individuals
              engage in insightful discussions, spark new ideas, and lay the
              foundation for future collaborations. Join us at our next event
              and become part of this growing, dynamic community.
            </span>
          </p>
          <Events />
        </div>
      </section>
      <section
        className="flex flex-col items-center lg:min-h-screen  lg:gap-[6vh] gap-[6vh] overflow-hidden"
        id="collaboration-sec"
      >
        <div
          className="flex flex-col items-center gap-4 justify-center lg:justify-start pt-[5vh]"
          id="collaboration"
        >
          <p className="text-[#D72323] text-center border-[1px] border-[#D72323] px-8 py-1 rounded-2xl text-sm tracking-wider items-center">
            COLLABORATIONS
          </p>
          <h1 className="text-center text-3xl lg:text-6xl  ">
            Our Collaborations
          </h1>
        </div>
        <Collaborations />
      </section>
      <section
        className="bg-white flex flex-col lg:gap-[6vh] gap-[6vh] overflow-hidden"
        id="reviews-sec"
      >
        <div
          className="flex flex-col items-center gap-4 justify-center lg:justify-start pt-[5vh]"
          id="reviews"
        >
          <p className="text-[#D72323] text-center border-[1px] border-[#D72323] px-8 py-1 rounded-2xl text-sm tracking-wider">
            Reviews
          </p>
          <h1 className="text-center text-3xl lg:text-6xl">
            Customer Testimonial
          </h1>
        </div>
        <Reviews />
      </section>
      <section
        className=" flex flex-col lg:gap-[6vh] gap-[6vh] overflow-hidden"
        id="resource-sec"
      >
        <div
          className="flex flex-col items-center gap-4 justify-center lg:justify-start pt-[5vh]"
          id="resources"
        >
          <p className="text-[#D72323] text-center border-[1px] border-[#D72323] px-8 py-1 rounded-2xl text-sm tracking-wider">
            RESOURCES
          </p>
          <h1 className="text-center text-3xl lg:text-6xl px-1">
            Close More Deals Using My Script!
          </h1>
          <p className="md:text-lg text-sm text-center px-2">
            Refined with 7 years of experience
          </p>
        </div>
        <ScriptForm />
      </section>
      <section
        id="affiliate-sec"
        className="flex flex-col items-center lg:gap-[6vh] gap-[6vh] overflow-hidden scroll-mt-6"
      >
        <div
          className="flex flex-col items-center gap-4 justify-center lg:justify-start pt-[5vh]"
          id="affiliate"
        >
          <p className="text-[#D72323] text-center border-[1px] border-[#D72323] px-8 py-1 rounded-2xl text-sm tracking-wider">
            AFFILIATE LINKS
          </p>
          <h1 className="text-center text-3xl lg:text-6xl  ">
            Unlock Benefits
          </h1>
          <h1 className="text-center text-xl lg:text-3xl  ">
            Tap a card to explore more details!
          </h1>
        </div>
        <div id="affiliate-content">
          <Affiliate />
        </div>
      </section>

      <section
        className=" flex flex-col lg:gap-[6vh] gap-[6vh] overflow-hidden"
        id="pricing-sec"
      >
        <div
          className="flex flex-col items-center gap-4 justify-center lg:justify-start pt-[5vh]"
          id="pricing"
        >
          <p className="text-[#D72323] text-center border-[1px] border-[#D72323] px-8 py-1 rounded-2xl text-sm tracking-wider">
            PRICING
          </p>
          <h1 className="text-center text-3xl lg:text-6xl px-1">
            Ready to Grow Your Business Empire?
          </h1>
          <p className="md:text-lg text-sm text-center px-2">
            Connect with our experts and explore how our diverse services can
            drive your success!
          </p>
        </div>
        <div id="form">
          <AppointmentForm />
        </div>
      </section>
      <section
        className=" flex flex-col lg:gap-[6vh] gap-[6vh]  overflow-hidden"
        id="calendar-sec"
      >
        <div
          className="flex flex-col items-center gap-4 justify-center lg:justify-start pt-[5vh]"
          id="calendar"
        >
          <p className="text-[#D72323] text-center border-[1px] border-[#D72323] px-8 py-1 rounded-2xl text-sm tracking-wider">
            Book A Meeting
          </p>
          <h1 className="text-center text-3xl lg:text-6xl px-4">
            Book A Call With Us To Know More!
          </h1>
        </div>
        <div id="calendar">
          <CalendlyEmbed />
        </div>
      </section>
      <Footer />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        limit={1}
        closeButton={false}
      />
    </main>
  );
}
