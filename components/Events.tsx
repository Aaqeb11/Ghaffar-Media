
import Image, { StaticImageData } from 'next/image';
import event1 from "../public/events1.jpg";
import event2 from "../public/events2.jpg";
import event3 from "../public/events3.jpg";
import event4 from "../public/events4.jpg";



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
      <div className="slider">
        {[...events, ...events].map((data, index) => (
          <div
            key={index}
            className="slide flex items-center justify-center h-[30vh] lg:h-[60vh] w-full px-4"
          >
            <div className="relative w-full h-full flex items-center justify-center">
              <Image
                src={data.image}
                alt={`Brand ${(index % events.length) + 1}`}
                width={200}
                height={100}
                className="object-contain"
              />
            </div>
          </div>
        ))}
        
      </div>
    </div>
  );
}