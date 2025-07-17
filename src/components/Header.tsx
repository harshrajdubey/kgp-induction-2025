import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import iitkgplogo from "@/assets/iitkgplogo.png"; // Adjust the path as necessary
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = ["Home", "About", "Activities", "Schedule", "Resources", "FAQ", "Contact"];

  const scrollToSection = (sectionId: string) => {
    if (sectionId.toLowerCase() === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const element = document.getElementById(sectionId.toLowerCase().replace(/\s+/g, "-"));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
    setIsMenuOpen(false);
  };

  return (
    <header className='fixed top-0 left-0 right-0 z-50 bg-light-blue/95 backdrop-blur-sm border-b border-iit-blue/10'>
      <div className='container mx-auto px-4 py-4'>
        <div className='flex items-center justify-between'>
          {/* Logo and Title */}
          <div className='flex items-center space-x-4'>
            <div className='w-12 h-12 rounded-full flex items-center justify-center'>
              <img src={iitkgplogo} alt='IIT Kharagpur Logo' className='w-10 h-10 object-contain' />
            </div>
            <div>
              <h1 className='text-xl md:text-2xl font-heading font-bold text-iit-blue uppercase'>Induction 2025</h1>
              <p className='text-sm text-iit-blue/70 hidden md:block'>Indian Institute of Technology Kharagpur</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className='hidden lg:flex items-center space-x-8'>
            {menuItems.map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className='text-iit-blue hover:text-iit-gold transition-colors duration-300 font-medium relative group'>
                {item}
                <span className='absolute bottom-0 left-0 w-0 h-0.5 bg-iit-gold group-hover:w-full transition-all duration-300'></span>
              </button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant='ghost'
            size='sm'
            className='lg:hidden text-iit-blue hover:text-iit-gold hover:bg-iit-blue/5'
            onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className='lg:hidden mt-4 animate-fade-in'>
            <nav className='bg-white rounded-xl shadow-lg p-4 space-y-2'>
              {menuItems.map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className='block w-full text-left px-4 py-2 text-iit-blue hover:bg-light-blue hover:text-iit-gold transition-colors duration-300 rounded-lg'>
                  {item}
                </button>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
