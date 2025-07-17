import { useState } from "react";
import { ChevronDown, ChevronUp, HelpCircle } from "lucide-react";
import { faqs } from "../assets/faq.js";
const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  // const faqs = [
  //   {
  //     question: "What is the Induction Program?",
  //     answer:
  //       "The Induction Program is a comprehensive orientation designed to help new students transition smoothly into academic life at Indian Institute of Technology Kharagpur. It includes welcome ceremonies, campus tours, academic orientation, and cultural activities to familiarize you with the institute's culture and facilities.",
  //   },
  //   {
  //     question: "What should I bring to the Induction Program?",
  //     answer:
  //       "During induction, nothing special is required. Just bring a water bottle and a notepad with a pen to note down important details.",
  //   },
  //   {
  //     question: "How do I get my ERP details and set my ID passwords?",
  //     answer:
  //       "After physical document verification, you will receive your ERP (Enterprise Resource Planning) details. Through the ERP portal, you can set your ID and passwords to access academic and administrative services.",
  //   },
  //   {
  //     question: "Where is Netaji Auditorium located?",
  //     answer:
  //       "Netaji Auditorium is centrally located within the IIT Kharagpur campus. It serves as the main venue for the Induction Program’s key events and ceremonies. You can refer to the campus map for directions.",
  //   },
  //   {
  //     question: "Will food be provided during the program?",
  //     answer:
  //       "No food will be provided during the Induction Program. However, refreshments will be available. Students are expected to take their meals in their respective halls of residence.",
  //   },
  //   {
  //     question: "How can I contact volunteers or get help during the program?",
  //     answer:
  //       "Volunteers will be available at key venues and help desks throughout the program. You can also reach out via the help desk at induction2025@iitkgp.ac.in or call +91 3222 282030 during the program hours.",
  //   },
  //   {
  //     question: "Can parents attend the Induction Program?",
  //     answer:
  //       "Yes, parents are welcome to attend specific sessions. Separate seating and activities are arranged for parents, especially during the welcome ceremony.",
  //   },
  //   {
  //     question: "What happens if I miss the Induction Program?",
  //     answer:
  //       "If you miss the program, you may miss out on important information and networking opportunities. However, you should contact the help desk or your department as soon as possible for guidance on how to catch up.",
  //   },
  //   {
  //     question: "How do I access campus WiFi and other facilities?",
  //     answer:
  //       "Instructions for accessing campus WiFi and other student facilities will be provided during the Induction Program. You will receive your credentials and guidelines as part of the orientation process.",
  //   },
  //   {
  //     question: "How can I join student societies?",
  //     answer:
  //       "Each society has its own selection timelines. You should follow their respective social media handles to get updates and then register for them when the process opens.",
  //   },
  //   {
  //     question: "What support services are available for mental health and counseling?",
  //     answer:
  //       "There is a dedicated Counseling Center at IIT Kharagpur where you can visit and consult with experts. The 'Your Dost' platform is also available for online support.",
  //   },
  //   {
  //     question: "Is there a dress code for the Induction Program events?",
  //     answer:
  //       "There is no strict dress code, but decent clothing is expected. Shorts and half-pants are generally not allowed.",
  //   },
  //   {
  //     question: "Where can I find information about hostel allocation and facilities?",
  //     answer:
  //       "Boys have to report at Lal Bahadur Sastri Hall of Residence (LBS) and girls at Sister Nivedita Hall (SNVH). The hall management staff at these locations will guide you regarding hostel allocation and facilities.",
  //   },
  //   {
  //     question: "What should I do in case of a medical emergency during the program?",
  //     answer:
  //       "There is a BC Roy Technology Hospital located within the IIT Kharagpur campus, equipped to handle medical situations for students and staff.",
  //   },
  //   {
  //     question: "Are there medical facilities available on campus?",
  //     answer:
  //       "Yes, the BC Roy Technology Hospital on campus provides medical care and emergency services to all students.",
  //   },
  //   {
  //     question: "How can I arrive at IIT Kharagpur?",
  //     answer:
  //       "IIT Kharagpur is located about 120 km west of Kolkata and is well connected by road and rail. The nearest airport is Netaji Subhas Chandra Bose International Airport (CCU), Kolkata. From the airport, you can take a taxi directly to the campus (approx. 2.5-3 hours), or travel to Howrah railway station and board a train to Kharagpur (approx. 2 hours by express train). The Kharagpur railway station is about 5 km from the campus, and you can hire a taxi, auto-rickshaw, or cycle-rickshaw to reach IIT Kharagpur.",
  //   },
  // ];
  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id='faq' className='py-16 bg-soft-blue'>
      <div className='container mx-auto px-6'>
        <div className='max-w-4xl mx-auto'>
          {/* Header */}
          <div className='text-center mb-12 animate-fade-in'>
            <h2 className='text-3xl md:text-5xl font-heading font-bold text-iit-blue mb-6 uppercase'>
              Frequently Asked Questions
            </h2>
            <p className='text-lg text-iit-blue/70 max-w-2xl mx-auto'>
              Find answers to common questions about the Induction Program. Can't find what you're looking for? Contact
              our support team.
            </p>
          </div>

          {/* FAQ Accordion */}
          <div className='space-y-4'>
            {faqs.map((faq, index) => (
              <div
                key={index}
                className='bg-white rounded-xl border border-iit-blue/10 overflow-hidden animate-slide-up'
                style={{ animationDelay: `${index * 0.05}s` }}>
                <button
                  onClick={() => toggleFAQ(index)}
                  className='w-full px-6 py-4 text-left flex items-center justify-between hover:bg-light-blue/30 transition-colors duration-200'>
                  <h3 className='text-lg font-semibold text-iit-blue pr-4'>{faq.question}</h3>
                  {openIndex === index ? (
                    <ChevronUp className='w-5 h-5 text-iit-gold flex-shrink-0' />
                  ) : (
                    <ChevronDown className='w-5 h-5 text-iit-gold flex-shrink-0' />
                  )}
                </button>

                {openIndex === index && (
                  <div className='px-6 pb-4 animate-fade-in'>
                    <div className='border-t border-iit-blue/10 pt-4'>
                      <p className='text-iit-blue/80 leading-relaxed'>{faq.answer}</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
