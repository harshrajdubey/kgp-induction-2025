import { useState, useEffect } from "react";
import { Calendar, Clock, MapPin } from "lucide-react";

const CountdownSection = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [isExpired, setIsExpired] = useState(false);

  useEffect(() => {
    // Set target date to July 25, 2025 at 09:00
    const targetDate = new Date("2025-07-25T09:00:00").getTime();
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      } else {
        setIsExpired(true);
        clearInterval(timer);
      }
    }, 1000);
    // Check immediately if expired
    if (Date.now() >= targetDate) {
      setIsExpired(true);
    }
    return () => clearInterval(timer);
  }, []);

  const CountdownCard = ({ value, label }: { value: number; label: string }) => (
    <div className='iit-card p-6 text-center'>
      <div className='text-4xl md:text-6xl font-bold text-iit-blue mb-2'>{value.toString().padStart(2, "0")}</div>
      <div className='text-sm md:text-lg font-medium text-iit-blue/70 uppercase tracking-wider'>{label}</div>
    </div>
  );

  if (isExpired) return null;
  return (
    <section id='countdown' className='py-16 bg-background'>
      <div className='container mx-auto px-6'>
        {/* Header */}
        <div className='text-center mb-6 animate-fade-in'>
          <h2 className='text-3xl md:text-5xl font-heading font-bold text-iit-blue mb-6 uppercase'>
            The countdown has begun!
          </h2>
          <p className='text-lg text-iit-blue/70 max-w-2xl mx-auto'>
            Get ready for an unforgettable experience at the Indian Institute of Technology Kharagpur.
          </p>
          <p className='text-xl text-iit-primary font-bold text-center mt-2'>25th July 2025 09:00 AM</p>
        </div>

        {/* Countdown Grid */}
        <div className='grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-w-4xl mx-auto mb-12'>
          <CountdownCard value={timeLeft.days} label='Days' />
          <CountdownCard value={timeLeft.hours} label='Hours' />
          <CountdownCard value={timeLeft.minutes} label='Minutes' />
          <CountdownCard value={timeLeft.seconds} label='Seconds' />
        </div>
      </div>
    </section>
  );
};

export default CountdownSection;
