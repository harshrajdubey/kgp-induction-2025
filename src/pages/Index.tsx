import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import CountdownSection from "@/components/CountdownSection";
import AboutSection from "@/components/AboutSection";
import DividerSection from "@/components/DividerSection";
import AnnouncementsSection from "@/components/AnnouncementsSection";
import ActivitiesSection from "@/components/ActivitiesSection";
import ScheduleSection from "@/components/ScheduleSection";
import SocietiesSection from "@/components/SocietiesSection";
import LinksSection from "@/components/LinksSection";
import FAQSection from "@/components/FAQSection";
import MapSection from "@/components/MapSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  const Divider = () => <div className='w-full h-px bg-iit-blue'></div>;

  return (
    <div className='min-h-screen'>
      <Header />
      <div className='w-full bg-iit-blue mt-20 flex items-center overflow-hidden min-h-[44px]'>
        <marquee
          behavior='scroll'
          direction='left'
          scrollamount='7'
          className='text-white text-base font-semibold tracking-wide'>
          Freshers must report to Netaji Auditorium by 9:00 AM on 19th July 2025 for the Welcome Ceremony.
        </marquee>
      </div>
      <HeroSection />
      <CountdownSection />
      <AboutSection />
      <ActivitiesSection />
      <ScheduleSection />
      <LinksSection />
      <FAQSection />
      <MapSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
