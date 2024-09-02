import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Affiliate = () => {
  const slides = [
    {
      title: "Akcallers",
      description:
        "Fill out our form or call us to inquire about services and available slots.",
      link: "https://xcellenttires.com/", // Link for the first card
    },
    {
      title: "2",
      description:
        "Provide details about your vehicle, and we will give you a personalized quote.",
      link: "/quote", // Link for the second card
    },
    {
      title: "3",
      description:
        "Choose a convenient time for your service, and we’ll reserve a slot for you.",
      link: "/schedule", // Link for the third card
    },
    {
      title: "4",
      description:
        "Bring your car in at the scheduled time, our expert technicians will handle it.",
      link: "/service", // Link for the fourth card
    },
    {
      title: "1",
      description:
        "Fill out our form or call us to inquire about services and available slots.",
      link: "https://xcellenttires.com/", // Link for the first card
    },
    {
      title: "2",
      description:
        "Provide details about your vehicle, and we will give you a personalized quote.",
      link: "/quote", // Link for the second card
    },
    {
      title: "3",
      description:
        "Choose a convenient time for your service, and we’ll reserve a slot for you.",
      link: "/schedule", // Link for the third card
    },
    {
      title: "4",
      description:
        "Bring your car in at the scheduled time, our expert technicians will handle it.",
      link: "/service", // Link for the fourth card
    },
  ];

  return (
    <div className="relative w-full min-h-screen flex flex-col items-center gap-[12vh] bg-white text-white">
      <div className="flex items-center justify-center gap-2 pt-8 relative z-10">
        {/* Vertical cards for mobile devices */}
        <div className="block lg:hidden w-full px-4">
          {slides.map((data, index) => (
            <a
              key={index}
              href={data.link}
              className="mb-8 p-6 bg-white rounded-xl text-center block transition-transform duration-300 hover:scale-105 hover:shadow-lg border border-10 border-[#D72323] shadow-lg"
            >
              <h2 className="text-black text-4xl font-bold mb-4">
                {data.title}
              </h2>
              <p className="text-black text-xl">{data.description}</p>
            </a>
          ))}
        </div>

        {/* Static cards for larger screens */}
        <div className="hidden lg:flex flex-wrap justify-center items-center gap-10 w-full">
          {slides.map((slide, index) => (
            <a
              key={index}
              href={slide.link}
              target="_blank"
              className="w-64 h-80 bg-white m-4 flex flex-col gap-16 pt-5 items-center text-black transition-transform duration-300 hover:scale-105 hover:shadow-lg rounded-xl border border-10 border-[#D72323] shadow-lg"
            >
              <h2 className="text-3xl font-bold mb-2">{slide.title}</h2>
              <p className="text-center mx-4">{slide.description}</p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Affiliate;
