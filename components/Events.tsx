import Image, { StaticImageData } from "next/image";
import event1 from "../public/events1.jpeg";
import event2 from "../public/events2.jpeg";
import event3 from "../public/events3.jpeg";
import event4 from "../public/events4.jpeg";

interface Brand {
  image: StaticImageData;
}

const events: Brand[] = [
  { image: event1 },
  { image: event2 },
  { image: event3 },
  { image: event4 },
];

export default function Brands() {
  return (
    <div className="slider-container overflow-hidden">
      <div className="slider h-full">
        {[...events, ...events, ...events].map((data, index) => (
          <div
            key={index}
            className="slide flex items-center justify-center w-full px-2 lg:px-2 h-full"
          >
            <div className="relative w-full h-full">
              <Image
                src={data.image}
                alt={`Brand ${(index % events.length) + 1}`}
                fill
                className="object-contain rounded-custom "
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                priority
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
