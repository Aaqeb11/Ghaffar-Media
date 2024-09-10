import { InlineWidget } from "react-calendly";

const CalendlyEmbed = () => {
  return (
    <div className=" ">
      <InlineWidget
        styles={{ height: "100vh" }}
        url="https://calendly.com/ihustle/10min"
      />
    </div>
  );
};

export default CalendlyEmbed;
