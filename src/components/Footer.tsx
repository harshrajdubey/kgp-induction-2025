import { Facebook, Instagram, Youtube, Linkedin, Mail, Phone, MapPin } from "lucide-react";
import logoWhite from "@/assets/iitlogowhite.png";

const Footer = () => {
  const quickLinks = ["Home", "About", "Schedule", "Activities", "Contact"];

  const socialLinks = [
    {
      icon: Facebook,
      url: "https://www.facebook.com/IITKgp/",
      label: "Facebook",
    },
    {
      icon: Instagram,
      url: "https://www.instagram.com/iit.kgp/",
      label: "Instagram",
    },
    {
      icon: Youtube,
      url: "https://www.youtube.com/@IITKharagpurOnline",
      label: "YouTube",
    },
    {
      icon: Linkedin,
      url: "https://www.linkedin.com/school/indian-institute-of-technology-kharagpur/",
      label: "LinkedIn",
    },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.toLowerCase().replace(/\s+/g, "-"));
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className='bg-gradient-to-r from-iit-blue to-slate-900 text-white'>
      <div className='container mx-auto px-6 py-12'>
        <div className='grid md:grid-cols-4 gap-8'>
          {/* Logo and Description */}
          <div className='md:col-span-2'>
            <div className='flex items-center space-x-4 mb-6'>
              <div className='w-16 h-16'>
                <img src={logoWhite} alt='IIT KGP Logo' className='w-full h-full object-contain' />
              </div>
              <div>
                <h3 className='text-2xl font-heading font-bold uppercase'>Induction 2025</h3>
                <p className='text-iit-gold'>Indian Institute of Technology Kharagpur</p>
              </div>
            </div>

            <p className='text-white/80 mb-6 leading-relaxed'>
              Indian Institute of Technology Kharagpur is committed to excellence in education, research, and
              innovation. Join us for an exciting journey into one of India's premier technological institutes.
            </p>

            <div className='space-y-2 text-sm'>
              <div className='flex items-center'>
                <MapPin className='w-4 h-4 mr-2 text-iit-gold' />
                <span>Kharagpur, West Bengal 721302, India</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className='text-lg  font-bold mb-6'>Quick Links</h4>
            <nav className='space-y-3'>
              {quickLinks.map((link) => (
                <button
                  key={link}
                  onClick={() => scrollToSection(link)}
                  className='block text-white/80 hover:text-iit-gold transition-colors duration-300'>
                  {link}
                </button>
              ))}
              <a
                href='https://www.iitkgp.ac.in'
                target='_blank'
                rel='noopener noreferrer'
                className='block text-white/80 hover:text-iit-gold transition-colors duration-300'>
                Official Website
              </a>
            </nav>
          </div>

          {/* Important Dates */}
          <div>
            <h4 className='text-lg  font-bold mb-6'>Important Dates</h4>
            <div className='space-y-4'>
              <div>
                <p className='text-iit-gold font-semibold'>Induction Program</p>
                <p className='text-white/80 text-sm'>July 19-20, 2025</p>
              </div>
              <div>
                <p className='text-iit-gold font-semibold'>Program Venue</p>
                <p className='text-white/80 text-sm'>Netaji Auditorium</p>
              </div>
            </div>
          </div>
        </div>

        {/* Social Media and Copyright */}
        <div className='border-t border-white/20 mt-12 pt-8'>
          <div className='flex flex-col md:flex-row justify-between items-center'>
            {/* Social Media */}
            <div className='flex items-center space-x-6 mb-6 md:mb-0'>
              <span className='text-white/80 font-medium'>Follow Us:</span>
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.url}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-iit-gold hover:scale-110 transition-all duration-300'
                  aria-label={social.label}>
                  <social.icon className='w-5 h-5' />
                </a>
              ))}
            </div>

            {/* Copyright */}
            <div className='text-center md:text-right text-white/60 text-sm'>
              <p>&copy; 2025 Indian Institute of Technology Kharagpur</p>
              <p>All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Stripe */}
      <div className='bg-black/20 py-4'>
        <div className='container mx-auto px-6 text-center'>
          <p className='text-white text-base'>
            Made with ❤️ for the Indian Institute of Technology Kharagpur Induction Program 2025<br></br>
            Maintained by Devansh Soni & Daksh Yadav
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
