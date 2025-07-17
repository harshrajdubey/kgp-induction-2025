import { FileText, Bus, Map, Globe, Users, BookOpen, Backpack, Heart, ExternalLink } from "lucide-react";

const ResourceSection = () => {
  const links = [
    {
      icon: Users,
      title: "Technology Students' Gymkhana",
      description: "Technology Students' Gymkhana official portal",
      url: "https://gymkhana.iitkgp.ac.in/",
      color: "bg-primary",
    },
    // {
    //   icon: FileText,
    //   title: "Induction Handbook",
    //   description: "Complete guide with all information about the induction program",
    //   url: "#",
    //   color: "bg-primary",
    // },
    {
      icon: Bus,
      title: "Bus Schedule",
      description: "Transportation timetables and routes within campus",
      url: "/docs/welcome freshers slots (3).pdf",
      color: "bg-primary",
    },
    {
      icon: Map,
      title: "Campus Map",
      description: "Interactive map of Indian Institute of Technology Kharagpur campus with all locations",
      url: "http://www.rajbhasha.iitkgp.ac.in/download/20150215082923.jpg",
      color: "bg-primary",
    },
    {
      icon: FileText,
      title: "Academic Calendar 2025-26",
      description: "Important academic dates and examination schedules (PDF)",
      url: "https://www.iitkgp.ac.in/assets/pdf/AcademicCalendar2025-26.pdf",
      color: "bg-primary",
    },
    {
      icon: BookOpen,
      title: "ERP Portal",
      description: "Academic ERP system for course registration and grades",
      url: "https://erp.iitkgp.ac.in/",
      color: "bg-primary",
    },
    {
      icon: Globe,
      title: "IIT KGP Website",
      description: "Official website of Indian Institute of Technology Kharagpur",
      url: "https://www.iitkgp.ac.in",
      color: "bg-primary",
    },
    {
      icon: Heart,
      title: "SARTH",
      description: "Mental health and counselling services for students",
      url: "https://sarth.iitkgp.ac.in/",
      color: "bg-primary",
    },
    {
      icon: Backpack,
      title: "Campus Tour",
      description: "Mental health and counselling services for students",
      url: "/docs/Campus Tour _ SWG.pdf",
      color: "bg-primary",
    },
  ];

  return (
    <section id='resources' className='py-16 bg-background'>
      <div className='container mx-auto px-6'>
        <div className='max-w-6xl mx-auto'>
          {/* Header */}
          <div className='text-center mb-12 animate-fade-in'>
            <h2 className='text-3xl md:text-5xl font-heading font-bold text-iit-blue mb-6 uppercase'>Resources</h2>
            <p className='text-lg text-iit-blue/70 max-w-3xl mx-auto'>
              Essential resources and important links to help you navigate your journey at Indian Institute of
              Technology Kharagpur.
            </p>
          </div>

          {/* Links Grid */}
          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {links.map((link, index) => (
              <a
                key={index}
                href={link.url}
                // target={link.url.startsWith("http") ? "_blank" : "_self"}
                target={"_blank"}
                rel={link.url.startsWith("http") ? "noopener noreferrer" : ""}
                className='iit-card p-6 group cursor-pointer animate-slide-up hover:scale-105 transition-all duration-300'
                style={{ animationDelay: `${index * 0.05}s` }}>
                {/* Icon and External Link Indicator */}
                <div className='flex items-center justify-between mb-4'>
                  <div
                    className={`w-12 h-12 ${link.color} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <link.icon className='w-6 h-6 text-white' />
                  </div>
                  {link.url.startsWith("http") && (
                    <ExternalLink className='w-4 h-4 text-iit-blue/40 group-hover:text-iit-gold transition-colors duration-300' />
                  )}
                </div>

                {/* Title */}
                <h3 className='text-lg font-bold text-iit-blue mb-3 group-hover:text-iit-gold transition-colors duration-300'>
                  {link.title}
                </h3>

                {/* Description */}
                <p className='text-iit-blue/70 text-sm leading-relaxed'>{link.description}</p>

                {/* Hover Effect */}
                <div className='absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-iit-gold/40 transition-colors duration-300'></div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResourceSection;
