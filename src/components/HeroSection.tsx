import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const scrollToNext = () => {
    const element = document.getElementById("countdown");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className='relative h-[calc(100vh-7rem)] flex items-center pt-20'>
      {/* Video Background */}
      <video
        className='absolute inset-0 w-full h-full object-cover'
        src='/iitkgpvideo1.webm'
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Gradient Overlay - Left Black to Right Transparent */}
      <div className='absolute inset-0 ' />

      {/* Content */}
      <div className='container mx-auto px-6 relative z-10'>
        <div className='text-white animate-fade-in text-center md:text-left max-w-4xl'>
          <h1 className='text-4xl md:text-7xl font-bold mb-6 leading-tight'>
            Welcome to IIT <span className='text-5xl md:text-7xl'>Kharagpur</span>
          </h1>
          <p className='text-lg md:text-xl mb-12 opacity-90 max-w-2xl'>
            Join us for an exciting journey into one of India's premier technological institutes. Your adventure begins
            here.
          </p>

          <Button
            onClick={scrollToNext}
            className='bg-iit-blue border border-white/50 shadow-lg text-lg px-12 py-6 hover:scale-105 transform transition-all duration-300'>
            Explore More
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
