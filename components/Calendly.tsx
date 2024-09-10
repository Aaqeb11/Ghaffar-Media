import { InlineWidget } from 'react-calendly';

const CalendlyEmbed = () => {
  return (
    <div style={{ height: '600px' }}>
      <InlineWidget url="https://calendly.com/ihustle/10min" />
    </div>
  );
};

export default CalendlyEmbed;
