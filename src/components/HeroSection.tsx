import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import campus1 from "@/assets/iit-campus-1.jpg";
import campus2 from "@/assets/iit-campus-2.jpg";
import campus3 from "@/assets/iit-campus-3.jpg";

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image:
        "https://images.unsplash.com/photo-1620496009285-ac853df7b9b6?fm=jpg&q=60&w=1920&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aWl0JTIwa2hhcmFncHVyfGVufDB8fDB8fHww",
      title: "Welcome to IIT Kharagpur",
      subtitle: "Induction Program 2025",
    },
    {
      image: "https://www.iitkgpfoundation.org/images/vault/2998.jpg",
      title: "Begin Your Journey",
      subtitle: "19th July 2025",
    },
    {
      image: "https://images.indianexpress.com/2024/12/IIT-Kharagpur-3.jpg",
      title: "Experience Excellence",
      subtitle: "Join the Legacy",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const scrollToNext = () => {
    const element = document.getElementById("countdown");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className='relative h-[calc(100vh-7rem)] flex items-center justify-center hero-gradient pt-20'>
      {/* Background Carousel */}
      <div className='absolute inset-0 overflow-hidden'>
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}>
            <img src={slide.image} alt={slide.title} className='w-full h-full object-cover' />
            <div className='absolute inset-0 bg-gradient-to-b from-iit-blue/20 to-iit-blue/40'></div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <Button
        variant='ghost'
        size='lg'
        className='absolute left-8 top-1/2 transform -translate-y-1/2 text-white hover:text-iit-gold hover:bg-white/10 z-10'
        onClick={prevSlide}>
        <ChevronLeft size={32} />
      </Button>

      <Button
        variant='ghost'
        size='lg'
        className='absolute right-8 top-1/2 transform -translate-y-1/2 text-white hover:text-iit-gold hover:bg-white/10 z-10'
        onClick={nextSlide}>
        <ChevronRight size={32} />
      </Button>

      {/* Content */}
      <div className='relative z-10 text-center text-white max-w-4xl mx-auto px-6 animate-fade-in'>
        <h1 className='text-5xl md:text-7xl font-bold mb-6 leading-tight'>{slides[currentSlide].title}</h1>
        <div className='flex justify-center mb-8'>
          <div
            className='px-8 py-4 rounded-2xl backdrop-blur-md bg-white/20 border border-white/30 shadow-lg inline-block'
            style={{ WebkitBackdropFilter: "blur(12px)", backdropFilter: "blur(12px)" }}>
            <p className='text-xl md:text-3xl font-semibold text-iit-blue m-0'>{slides[currentSlide].subtitle}</p>
          </div>
        </div>
        <p className='text-lg md:text-xl mb-12 opacity-90 max-w-2xl mx-auto'>
          Join us for an exciting journey into one of India's premier technological institutes. Your adventure begins
          here.
        </p>

        <Button
          onClick={scrollToNext}
          className='btn-iit-primary text-lg px-8 py-4 hover:scale-105 transform transition-all duration-300'>
          Explore More
        </Button>
      </div>

      {/* Slide Indicators */}
      <div className='absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-10'>
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? "bg-iit-gold scale-125" : "bg-white/50 hover:bg-white/75"
            }`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
