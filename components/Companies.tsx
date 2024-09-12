import { StaticImageData } from "next/image";
import Image from "next/image";
import React, { useRef } from "react";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { data } from "../data/Companies";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

interface Company {
  id: number;
  image: StaticImageData | null;
  name: string;
  info: string;
  bgColor: string;
  link?: string;
}

interface DomainGroup {
  domain: string;
  companies: Company[];
}

export const Companies: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (containerRef.current) {
        const domains = containerRef.current.querySelectorAll(".domain-group");

        domains.forEach((domain, index) => {
          const isEven = index % 2 === 0;

          gsap.from(domain, {
            xPercent: isEven ? -50 : 50,
            opacity: 0,
            duration: 0.8,
            scrollTrigger: {
              trigger: domain,
              start: "top 80%",
              end: "bottom 20%",
              toggleActions: "play none none reverse",
            },
          });
        });
      }
    },
    { scope: containerRef }
  );

  return (
    <div
      className="flex flex-col gap-4 overflow-x-hidden w-full"
      ref={containerRef}
    >
      {data.map((domain: DomainGroup, index: number) => (
        <div
          key={domain.domain}
          className="flex flex-col mb-8 items-center gap-3 domain-group "
        >
          <h1 className="text-3xl font-bold mb-4">{domain.domain}:</h1>
          <div className="flex lg:flex-row flex-col justify-center gap-4 w-full px-5 items-center">
            {domain.companies.map((company: Company) => (
              <div className="md:w-[70%] w-full  company-card" key={company.id}>
                <Card
                  className={`flex flex-col items-center text-center overflow-hidden h-full shadow-2xl transition-transform duration-300 hover:scale-105 cursor-pointer`}
                  style={{ background: company.bgColor }}
                  onClick={() =>
                    company.link && window.open(company.link, "_blank")
                  } // Open link if it exists
                >
                  <CardHeader className="flex flex-col items-center h-full justify-between">
                    {company.image ? (
                      <Image
                        src={company.image}
                        alt={`${company.name} logo`}
                        className="lg:w-[20vw] lg:h-[20vh] w-[40vw] h-[10vh] object-contain mx-auto"
                        priority
                      />
                    ) : (
                      <div className="lg:w-[20vw] lg:h-[20vh] w-[40vw] h-[10vh] flex items-center justify-center text-[#D72323]">
                        COMPANY
                      </div>
                    )}
                    <div className="flex flex-col justify-between h-full gap-2">
                      <CardTitle className="text-xl font-bold">
                        {company.name}
                      </CardTitle>
                      <CardDescription className="text-sm flex-grow text-black italic">
                        {company.info}
                      </CardDescription>
                    </div>
                  </CardHeader>
                </Card>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
