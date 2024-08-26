import { StaticImageData } from "next/image";
import Image from "next/image";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { data } from "../data/Companies";

interface Company {
  id: number;
  image: StaticImageData | null;
  name: string;
  info: string;
  bgColor: string;
}
interface DomainGroup {
  domain: string;
  companies: Company[];
}

export const Companies: React.FC = () => {
  return (
    <div className="">
      {data.map((domain: DomainGroup) => (
        <div
          key={domain.domain}
          className="flex flex-col mb-8 items-center gap-3"
        >
          <h1 className="text-3xl font-bold mb-4">{domain.domain}:</h1>
          <div className="flex lg:flex-row flex-col justify-center gap-4 w-full px-4">
            {domain.companies.map((company: Company) => (
              <div className="w-full sm:w-[100%]" key={company.id}>
                <Card
                  className={`flex flex-col items-center text-center overflow-hidden h-full shadow-2xl `}
                  style={{ background: company.bgColor }}
                >
                  <CardHeader className="flex flex-col items-center h-full justify-between">
                    {company.image ? (
                      <Image
                        src={company.image}
                        alt={`${company.name} logo`}
                        className="lg:w-[20vw] lg:h-[20vh] w-[40vw] h-[10vh] object-contain mx-auto"
                      />
                    ) : (
                      <div className="lg:w-[20vw] lg:h-[20vh]  w-[40vw] h-[10vh] flex items-center justify-center text-[#D72323]">
                        COMPANY
                      </div>
                    )}
                    <div className="flex flex-col justify-between h-full gap-2">
                      <CardTitle className="text-xl font-bold">
                        {company.name}
                      </CardTitle>
                      <CardDescription className="text-sm flex-grow text-black">
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
