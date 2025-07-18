import { Clock, MapPin, Calendar } from "lucide-react";

const ScheduleSection = () => {
  const schedule = [
    {
      date: "19/07/2025",
      time: "9:00 am - 9:15 am",
      activity: "Invitation of Dignitaries to the Dias & 1 min Condolence",
      venue: "Netaji Auditorium, Raman & Bhatnagar Auditoriums (All Students), Kalidas Auditorium (Parents)",
      description: "Dean SA",
    },
    {
      date: "19/07/2025",
      time: "9:15 am - 9:25 am",
      activity: "Setting the Context of the Induction Program and Introducing the Functionaries",
      venue: "Netaji Auditorium, Raman & Bhatnagar Auditoriums (All Students), Kalidas Auditorium (Parents)",
      description: "",
    },
    {
      date: "19/07/2025",
      time: "9:25 am - 9:35 am",
      activity: "Address by Deputy Director Prof. Rintu Banerjee",
      venue: "Netaji Auditorium, Raman & Bhatnagar Auditoriums (All Students), Kalidas Auditorium (Parents)",
      description: "",
    },
    {
      date: "19/07/2025",
      time: "9:35 am - 10:00 am",
      activity: "Address by Director Prof. Suman Chakraborty",
      venue: "Netaji Auditorium, Raman & Bhatnagar Auditoriums (All Students), Kalidas Auditorium (Parents)",
      description: "",
    },
    {
      date: "19/07/2025",
      time: "10:00 am - 10:20 am",
      activity: "History of IIT Kharagpur - Film Show | IIT Today - Film Show",
      venue: "Netaji Auditorium, Raman & Bhatnagar Auditoriums (All Students), Kalidas Auditorium (Parents)",
      description: "",
    },
    {
      date: "19/07/2025",
      time: "10:20 am - 10:40 am",
      activity: "Deans - Introduction to academic activity (PPT show)",
      venue: "Netaji Auditorium, Raman & Bhatnagar Auditoriums (All Students), Kalidas Auditorium (Parents)",
      description: "Coordinating Dean (Dean FoE)",
    },
    {
      date: "19/07/2025",
      time: "10:40 am - 11:30 am",
      activity: "How to settle on Campus?",
      venue: "Netaji Auditorium, Raman & Bhatnagar Auditoriums (All Students) Kalidas Auditorium (Parents)",
      description: "",
    },
    {
      date: "19/07/2025",
      time: "11:30 am - 11:35 am",
      activity: "Vote of thanks",
      venue: "Netaji Auditorium, Raman & Bhatnagar Auditoriums (All Students) Kalidas Auditorium (Parents)",
      description: "Dean SA",
    },
    // {
    //   date: "19/07/2025",
    //   time: "12:00 pm - 12:10 pm",
    //   activity: "BCRTH facilities - Medical Process",
    //   venue: "Netaji Auditorium, Raman & Bhatnagar Auditoriums (All Students) Kalidas Auditorium (Parents)",
    //   description: "Chief Medical Officer",
    // },
    // {
    //   date: "19/07/2025",
    //   time: "12:10 pm - 12:20 pm",
    //   activity: "SPSMH facilities - Medical Process",
    //   venue: "Netaji Auditorium, Raman & Bhatnagar Auditoriums (All Students) Kalidas Auditorium (Parents)",
    //   description: "Chief Medical Officer",
    // },
    // {
    //   date: "19/07/2025",
    //   time: "12:20 pm - 12:30 pm",
    //   activity: "SARTH",
    //   venue: "Netaji Auditorium, Raman & Bhatnagar Auditoriums (All Students) Kalidas Auditorium (Parents)",
    //   description: "Dean Student Affairs",
    // },
    // {
    //   date: "19/07/2025",
    //   time: "12:30 pm - 2:30 pm",
    //   activity: "Lunch Break",
    //   venue: "Respective Halls",
    //   description: "",
    // },
    // {
    //   date: "19/07/2025",
    //   time: "2:30 pm - 2:40 pm",
    //   activity: "Career Development Centre",
    //   venue: "Netaji Auditorium, Raman & Bhatnagar Auditoriums (All Students) Kalidas Auditorium (Parents)",
    //   description: "Chairman CDC",
    // },
    // {
    //   date: "19/07/2025",
    //   time: "2:40 pm - 2:50 pm",
    //   activity: "Library - Facilities",
    //   venue: "Netaji Auditorium, Raman & Bhatnagar Auditoriums (All Students) Kalidas Auditorium (Parents)",
    //   description: "Chairman Library",
    // },
    // {
    //   date: "19/07/2025",
    //   time: "2:50 pm - 3:00 pm",
    //   activity: "ERP - Introduction",
    //   venue: "Netaji Auditorium, Raman & Bhatnagar Auditoriums (All Students) Kalidas Auditorium (Parents)",
    //   description: "Chairman ERP",
    // },
    // {
    //   date: "19/07/2025",
    //   time: "3:00 pm - 3:15 pm",
    //   activity: "HMC - Activities",
    //   venue: "Netaji Auditorium, Raman & Bhatnagar Auditoriums (All Students) Kalidas Auditorium (Parents)",
    //   description: "Chairman HMC",
    // },
    // {
    //   date: "19/07/2025",
    //   time: "3:15 pm - 3:50 pm",
    //   activity: "Know Important Units",
    //   venue: "Netaji Auditorium, Raman & Bhatnagar Auditoriums (All Students) Kalidas Auditorium (Parents)",
    //   description: "Dean Academic Offices",
    // },
    // {
    //   date: "19/07/2025",
    //   time: "3:50 pm - 4:00 pm",
    //   activity: "Security",
    //   venue: "Netaji Auditorium, Raman & Bhatnagar Auditoriums (All Students) Kalidas Auditorium (Parents)",
    //   description: "Prof. B. C. Meikap & Senior Security Officer",
    // },
    // {
    //   date: "20/07/2025",
    //   time: "10:00 am - 10:10 am",
    //   activity: "Musical Performance",
    //   venue: "Netaji Auditorium, Raman & Bhatnagar Auditoriums (All Students)",
    //   description: "ETMS, WTMS",
    // },
    // {
    //   date: "20/07/2025",
    //   time: "10:10 am - 10:20 am",
    //   activity: "Gymkhana and Facilities",
    //   venue: "Netaji Auditorium, Raman & Bhatnagar Auditoriums (All Students)",
    //   description: "President, TSG",
    // },
    // {
    //   date: "20/07/2025",
    //   time: "10:20 am - 10:30 am",
    //   activity: "Hall Tradition at IITKGP",
    //   venue: "Netaji Auditorium, Raman & Bhatnagar Auditoriums (All Students)",
    //   description: "Vice President, TSG",
    // },
    // {
    //   date: "20/07/2025",
    //   time: "10:30 am - 11:30 am",
    //   activity: "Introduction to Student Activities and Hall Culture",
    //   venue: "Netaji Auditorium, Raman & Bhatnagar Auditoriums (All Students)",
    //   description: "General Secretaries of TSG",
    // },
    // {
    //   date: "20/07/2025",
    //   time: "11:30 am - 12:30 pm",
    //   activity: "Cultural Performance",
    //   venue: "Netaji Auditorium, Raman & Bhatnagar Auditoriums (All Students)",
    //   description: "Cultural Societies",
    // },
  ];

  // const schedule = [
  //   // Day 1 - July 25, 2025
  //   {
  //     date: "25/07/2025",
  //     time: "09:30 AM - 11:00 AM",
  //     activity: "Welcome Ceremony",
  //     venue: "Netaji Auditorium and nearby facilities (All Students) Kalidas Auditorium (Parents)",
  //     description: "Opening ceremony with welcome address",
  //   },
  //   {
  //     date: "25/07/2025",
  //     time: "11:00 AM - 11:15 AM",
  //     activity: "History of Indian Institute of Technology Kharagpur - Film Show & IIT Today - Film Show",
  //     venue: "Netaji Auditorium and nearby facilities",
  //     description: "Documentary showcasing institute's legacy and current achievements",
  //   },
  //   {
  //     date: "25/07/2025",
  //     time: "11:15 AM - 12:00 PM",
  //     activity: "Motivational Speaker",
  //     venue: "Netaji Auditorium and nearby facilities (All Students) Kalidas Auditorium (Parents)",
  //     description: "Inspirational talk for new students",
  //   },
  //   {
  //     date: "25/07/2025",
  //     time: "3:00 PM - 5:00 PM",
  //     activity: "Visit to Department/School/Centres",
  //     venue: "Respective Department buildings",
  //     description: "Meet faculty and explore your academic department",
  //   },

  //   // Day 2 - July 26, 2025
  //   {
  //     date: "26/07/2025",
  //     time: "10:00 AM - 10:20 AM",
  //     activity: "Introduction to Academic Section",
  //     venue: "Netaji Auditorium (Group A) and Kalidas Auditorium (Group B)",
  //     description: "Overview of academic procedures and policies",
  //   },
  //   {
  //     date: "26/07/2025",
  //     time: "10:20 AM - 10:40 AM",
  //     activity: "Introduction to Extra-Academic Activities",
  //     venue: "Netaji Auditorium (Group A) and Kalidas Auditorium (Group B)",
  //     description: "Explore clubs, societies and extracurricular opportunities",
  //   },
  //   {
  //     date: "26/07/2025",
  //     time: "10:40 AM - 11:00 AM",
  //     activity: "Talk about Computer & Informatics Centre (CIC)",
  //     venue: "Netaji Auditorium (Group A) and Kalidas Auditorium (Group B)",
  //     description: "IT infrastructure and computing facilities overview",
  //   },
  //   {
  //     date: "26/07/2025",
  //     time: "11:00 AM - 11:20 AM",
  //     activity: "Inspirational Talk",
  //     venue: "Netaji Auditorium (Group A) and Kalidas Auditorium (Group B)",
  //     description: "Motivational session for academic excellence",
  //   },
  //   {
  //     date: "26/07/2025",
  //     time: "11:20 AM - 12:00 PM",
  //     activity: "Career Development Center",
  //     venue: "Netaji Auditorium (Group A) and Kalidas Auditorium (Group B)",
  //     description: "Guidance on career planning and opportunities",
  //   },
  //   {
  //     date: "26/07/2025",
  //     time: "3:00 PM - 5:00 PM",
  //     activity: "Campus Tour - Academic Area - Walking",
  //     venue: "Campus Wide",
  //     description: "Guided tour of academic buildings and facilities",
  //   },

  //   // Day 3 - July 27, 2025
  //   {
  //     date: "27/07/2025",
  //     time: "10:00 AM - 10:20 AM",
  //     activity: "Introduction to BC Roy Tech Hospital",
  //     venue: "Netaji Auditorium (Group A) and Kalidas Auditorium (Group B)",
  //     description: "Information about BC Roy Technology Hospital services",
  //   },
  //   {
  //     date: "27/07/2025",
  //     time: "10:20 AM - 10:40 AM",
  //     activity: "Student Welcome and Campus Life Details",
  //     venue: "Netaji Auditorium (Group A) and Kalidas Auditorium (Group B)",
  //     description: "Dean - Student Affairs welcome and campus life guidance",
  //   },
  //   {
  //     date: "27/07/2025",
  //     time: "10:40 AM - 11:00 AM",
  //     activity: "Introduction to Counselling Centre",
  //     venue: "Netaji Auditorium (Group A) and Kalidas Auditorium (Group B)",
  //     description: "Mental health and counseling services coordination",
  //   },
  //   {
  //     date: "27/07/2025",
  //     time: "11:00 AM - 11:15 AM",
  //     activity: "Session on Rajbhasha",
  //     venue: "Netaji Auditorium (Group A) and Kalidas Auditorium (Group B)",
  //     description: "Information about official language policies",
  //   },
  //   {
  //     date: "27/07/2025",
  //     time: "11:15 AM - 11:30 AM",
  //     activity: "Inspirational Talk",
  //     venue: "Netaji Auditorium (Group A) and Kalidas Auditorium (Group B)",
  //     description: "Motivational session (Speaker TBD)",
  //   },
  //   {
  //     date: "27/07/2025",
  //     time: "11:30 AM - 12:00 PM",
  //     activity: "Know Your Halls and Wardens - Do's and Don'ts",
  //     venue: "Netaji Auditorium (Group A) and Kalidas Auditorium (Group B)",
  //     description: "Hostel life guidance coordinated by Dean HMC",
  //   },

  //   // Day 4 - July 28, 2025
  //   {
  //     date: "28/07/2025",
  //     time: "10:00 AM - 10:40 AM",
  //     activity: "Academic Structure, Research, Alumni Connect / Cell Introductions",
  //     venue: "Netaji Auditorium (Group A) and Kalidas Auditorium (Group B)",
  //     description: "Introduction of all cells coordinated by Academic Deans",
  //   },
  //   {
  //     date: "28/07/2025",
  //     time: "10:40 AM - 11:00 AM",
  //     activity: "Gymkhana and Facilities",
  //     venue: "Netaji Auditorium (Group A) and Kalidas Auditorium (Group B)",
  //     description: "Sports and recreational facilities by President Gymkhana",
  //   },
  //   {
  //     date: "28/07/2025",
  //     time: "11:00 AM - 11:20 AM",
  //     activity: "Introduction to Student Activities",
  //     venue: "Netaji Auditorium (Group A) and Kalidas Auditorium (Group B)",
  //     description: "Student activities overview by Vice President Gymkhana",
  //   },
  //   {
  //     date: "28/07/2025",
  //     time: "11:20 AM - 12:00 PM",
  //     activity: "Talk by Senior Security Officer, Indian Institute of Technology Kharagpur",
  //     venue: "Netaji Auditorium (Group A) and Kalidas Auditorium (Group B)",
  //     description: "Security related guidelines and campus safety",
  //   },
  //   {
  //     date: "28/07/2025",
  //     time: "3:00 PM - 7:00 PM",
  //     activity: "Introduction to Tech, Sports and Welfare Societies, Cultural Societies & Cultural Program",
  //     venue: "Various Venues",
  //     description: "Society introductions and cultural performances",
  //   },
  // ];

  return (
    <section id='schedule' className='py-16 bg-soft-blue'>
      <div className='container mx-auto px-6'>
        <div className='max-w-6xl mx-auto'>
          {/* Header */}
          <div className='text-center mb-12 animate-fade-in'>
            <h2 className='text-3xl md:text-5xl font-heading font-bold text-iit-blue mb-6 uppercase'>
              Induction Program Schedule
            </h2>
            <p className='text-lg text-iit-blue/70 max-w-3xl mx-auto mb-8'>
              Complete 2-day schedule for the Induction Program - July 19-20, 2025
            </p>
          </div>

          {/* Desktop Table View */}
          <div className='hidden md:block overflow-x-auto'>
            <table className='w-full bg-white rounded-xl shadow-lg overflow-hidden'>
              <thead className='bg-iit-blue text-white'>
                <tr>
                  <th className='px-6 py-4 text-left font-bold'>Date</th>
                  <th className='px-6 py-4 text-left font-bold'>Time</th>
                  <th className='px-6 py-4 text-left font-bold'>Activity</th>
                  <th className='px-6 py-4 text-left font-bold'>Venue</th>
                </tr>
              </thead>
              <tbody>
                {schedule.map((item, index) => (
                  <tr
                    key={index}
                    className={`border-b border-gray-100 hover:bg-light-blue/30 transition-colors duration-200 ${
                      index % 2 === 0 ? "bg-gray-50/50" : "bg-white"
                    }`}>
                    <td className='px-6 py-4'>
                      <div className='flex items-center text-iit-blue font-medium'>
                        <Calendar className='w-4 h-4 mr-2 text-iit-gold' />
                        {item.date}
                      </div>
                    </td>
                    <td className='px-6 py-4'>
                      <div className='flex items-center text-iit-blue font-medium'>
                        <Clock className='w-4 h-4 mr-2 text-iit-gold' />
                        {item.time}
                      </div>
                    </td>
                    <td className='px-6 py-4 font-semibold text-iit-blue'>{item.activity}</td>
                    <td className='px-6 py-4'>
                      <div className='flex items-center text-iit-blue/70'>
                        <MapPin className='w-4 h-4 min-h-4 min-w-4 mr-2 text-iit-gold' />
                        {item.venue}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Card View */}
          <div className='md:hidden space-y-4'>
            {schedule.map((item, index) => (
              <div key={index} className='iit-card p-6 animate-slide-up'>
                <div className='flex items-center justify-between mb-3'>
                  <div className='flex items-center text-iit-blue font-medium text-xs'>
                    <Calendar className='w-4 h-4 mr-2 text-iit-gold' />
                    {item.date}
                  </div>
                  <div className='flex items-center text-iit-blue font-medium text-xs'>
                    <Clock className='w-4 h-4 mr-2 text-iit-gold' />
                    {item.time}
                  </div>
                </div>

                <h3 className='font-bold text-iit-blue text-lg mb-2'>{item.activity}</h3>

                <div className='flex items-start text-iit-blue/70 mb-3'>
                  <MapPin className='w-4 h-4 mr-2 text-iit-gold mt-1 flex-shrink-0' />
                  <span className='text-sm'>{item.venue}</span>
                </div>

                <p className='text-iit-blue/80 text-sm'>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScheduleSection;
