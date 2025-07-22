import { Clock, MapPin, Calendar } from "lucide-react";

const ScheduleSection = () => {
  const schedule = [
    // Day 1 - July 25, 2025
    {
      date: "25/07/2025",
      time: "09:30 am - 09:45 am",
      activity: "Invitation of dignitaries to the dais",
      venue: "Netaji Auditorium, Raman & Bhatnagar Auditoriums (All Students), Kalidas Auditorium (Parents)",
      description: "Lighting the Lamp & Vandana",
    },
    {
      date: "25/07/2025",
      time: "09:45 am - 09:50 am",
      activity: "Address by the Special Guest",
      venue: "Netaji Auditorium, Raman & Bhatnagar Auditoriums (All Students), Kalidas Auditorium (Parents)",
      description: "Mr. Yogesh, SDO Kharagpur",
    },
    {
      date: "25/07/2025",
      time: "09:50 am - 10:00 am",
      activity: "Setting the context of the Induction Program. Introduction of the Functionaries",
      venue: "Netaji Auditorium, Raman & Bhatnagar Auditoriums (All Students), Kalidas Auditorium (Parents)",
      description: "Prof. Bhargav Maitra",
    },
    {
      date: "25/07/2025",
      time: "10:00 am - 10:10 am",
      activity: "Address by the Deputy Director",
      venue: "Netaji Auditorium, Raman & Bhatnagar Auditoriums (All Students), Kalidas Auditorium (Parents)",
      description: "Prof. Rintu Banerjee",
    },
    {
      date: "25/07/2025",
      time: "10:10 am - 11:00 am",
      activity: "Welcome address by the Director",
      venue: "Netaji Auditorium, Raman & Bhatnagar Auditoriums (All Students), Kalidas Auditorium (Parents)",
      description: "Prof. Suman Chakraborty",
    },
    {
      date: "25/07/2025",
      time: "11:00 am - 11:05 am",
      activity: "Vote of thanks by the Chairman, Induction program 2025",
      venue: "Netaji Auditorium, Raman & Bhatnagar Auditoriums (All Students), Kalidas Auditorium (Parents)",
      description: "Prof. Arun Chakraborty",
    },
    {
      date: "25/07/2025",
      time: "11:05 am - 11:15 am",
      activity: "National Anthem",
      venue: "Netaji Auditorium, Raman & Bhatnagar Auditoriums (All Students), Kalidas Auditorium (Parents)",
      description: "By All",
    },
    {
      date: "25/07/2025",
      time: "11:15 am - 11:30 am",
      activity: "Break",
      venue: "Netaji Auditorium, Raman & Bhatnagar Auditoriums (All Students), Kalidas Auditorium (Parents)",
      description: "",
    },
    {
      date: "25/07/2025",
      time: "11:30 am - 11:50 am",
      activity: "History of IIT Kharagpur - Film Show | IIT Today - Film Show",
      venue: "Netaji Auditorium, Raman & Bhatnagar Auditoriums (All Students), Kalidas Auditorium (Parents)",
      description: "About the Heritage of IIT Kharagpur, About the program, about the details and information",
    },
    {
      date: "25/07/2025",
      time: "11:50 am - 12:00 noon",
      activity: "Unique Tradition of Halls at IIT KGP",
      venue: "Netaji Auditorium, Raman & Bhatnagar Auditoriums (All Students), Kalidas Auditorium (Parents)",
      description: "Vice President",
    },
    {
      date: "25/07/2025",
      time: "12:00 noon - 12:25 pm",
      activity: "Life at IITKGP film show",
      venue: "Netaji Auditorium, Raman & Bhatnagar Auditoriums (All Students), Kalidas Auditorium (Parents)",
      description: "Vice President",
    },
    {
      date: "25/07/2025",
      time: "12:25 pm - 12:35 pm",
      activity: "Cultural Performance",
      venue: "Netaji Auditorium, Raman & Bhatnagar Auditoriums (All Students), Kalidas Auditorium (Parents)",
      description: "Srujan",
    },
    {
      date: "25/07/2025",
      time: "12:35 pm - 3:00 pm",
      activity: "Lunch Break",
      venue: "Respective Halls",
      description: "",
    },
    {
      date: "25/07/2025",
      time: "3:00 pm - 5:00 pm",
      activity: "Visit to Department/School/Centres",
      venue: "Respective Department buildings",
      description: "Coordinated by Faculty advisors and Department Heads",
    },
    {
      date: "25/07/2025",
      time: "3:00 pm - 5:00 pm",
      activity: "Tea with Parents",
      venue: "Kalidas Auditorium",
      description: "Director, Deans, HMC Chairman, President TSG",
    },

    // Day 2 - July 26, 2025
    {
      date: "26/07/2025",
      time: "5:30 am - 6:30 am",
      activity: "Sunrise KARMYOG",
      venue: "Gyan Ghosh Stadium",
      description: "Mr. Sourabh Sarkar",
    },
    {
      date: "26/07/2025",
      time: "10:00 am - 10:05 am",
      activity: "Introduction by Dean SA and welcome of Chief Guest",
      venue: "Netaji Auditorium (Group A) and Kalidas Auditorium (Group B)",
      description: "Dean SA",
    },
    {
      date: "26/07/2025",
      time: "10:05 am - 10:45 am",
      activity: "Address by Chief Guest",
      venue: "Netaji Auditorium (Group A) and Kalidas Auditorium (Group B)",
      description: "Chief Guest",
    },
    {
      date: "26/07/2025",
      time: "10:45 am - 10:55 am",
      activity: "Academic structure",
      venue: "Netaji Auditorium (Group A) and Kalidas Auditorium (Group B)",
      description: "Coordinating Dean (Dean FoS)",
    },
    {
      date: "26/07/2025",
      time: "10:55 am - 11:15 am",
      activity: "Introduction to Extra-Academic Activities",
      venue: "Netaji Auditorium (Group A) and Kalidas Auditorium (Group B)",
      description: "President Gymkhana, NSS, NSO, NCC Coordinators",
    },
    {
      date: "26/07/2025",
      time: "11:15 am - 11:25 am",
      activity: "Talk about Computer & Informatics Centre (CIC)",
      venue: "Netaji Auditorium (Group A) and Kalidas Auditorium (Group B)",
      description: "Information about the Computer and Informatics Centre, IIT Kharagpur",
    },
    {
      date: "26/07/2025",
      time: "11:25 am - 11:45 am",
      activity: "ERP",
      venue: "Netaji Auditorium (Group A) and Kalidas Auditorium (Group B)",
      description: "Coordinated by ERP",
    },
    {
      date: "26/07/2025",
      time: "11:45 am - 12:05 pm",
      activity: "Career Development Center",
      venue: "Netaji Auditorium (Group A) and Kalidas Auditorium (Group B)",
      description: "Prof. Rajib Maity",
    },
    {
      date: "26/07/2025",
      time: "12:05 pm - 12:25 pm",
      activity: "Library facilities",
      venue: "Netaji Auditorium (Group A) and Kalidas Auditorium (Group B)",
      description: "Dr. Sutradhar",
    },
    {
      date: "26/07/2025",
      time: "12:25 pm - 2:30 pm",
      activity: "Lunch Break",
      venue: "Respective Halls",
      description: "",
    },
    {
      date: "26/07/2025",
      time: "2:30 pm - 5:00 pm",
      activity: "Campus Tour - Academic Area - Bus",
      venue: "Main Academic Area/Takshashila/Nalanda",
      description: "SWG",
    },

    // Day 3 - July 27, 2025
    {
      date: "27/07/2025",
      time: "5:30 am - 6:30 am",
      activity: "Sunrise KARMYOG",
      venue: "Gyan Ghosh Stadium",
      description: "TBD after discussion with Director",
    },
    {
      date: "27/07/2025",
      time: "10:00 am - 10:10 am",
      activity: "Introduction to BC Roy Technology Hospital and Imedix",
      venue: "Netaji Auditorium (Group A) and Kalidas Auditorium (Group B)",
      description: "Chief Medical Officer",
    },
    {
      date: "27/07/2025",
      time: "10:10 am - 10:20 am",
      activity: "Introduction to SPSMH",
      venue: "Netaji Auditorium (Group A) and Kalidas Auditorium (Group B)",
      description: "Chief Medical Officer",
    },
    {
      date: "27/07/2025",
      time: "10:20 am - 10:40 am",
      activity: "Introduction to SARTH and other facilities under it's aegis",
      venue: "Netaji Auditorium (Group A) and Kalidas Auditorium (Group B)",
      description: "Dean - Student Affairs",
    },
    {
      date: "27/07/2025",
      time: "10:40 am - 10:55 am",
      activity: "Inclusivity in Campus (Gender cell/ICC)",
      venue: "Netaji Auditorium (Group A) and Kalidas Auditorium (Group B)",
      description: "Dr. Amita Pathak Mohanty",
    },
    {
      date: "27/07/2025",
      time: "10:55 am - 11:05 am",
      activity: "Session on Rajbhasha",
      venue: "Netaji Auditorium (Group A) and Kalidas Auditorium (Group B)",
      description: "Dr. Rawat",
    },
    {
      date: "27/07/2025",
      time: "11:05 am - 11:30 am",
      activity: "Know your halls and Wardens – Do's and Don'ts",
      venue: "Netaji Auditorium (Group A) and Kalidas Auditorium (Group B)",
      description: "Coordinated by Chairman HMC",
    },
    {
      date: "27/07/2025",
      time: "11:30 am - 12:10 pm",
      activity: "Research, Alumni connect / Cell Introductions",
      venue: "Netaji Auditorium (Group A) and Kalidas Auditorium (Group B)",
      description: "Dean AA",
    },
    {
      date: "27/07/2025",
      time: "12:10 pm onwards",
      activity: "Lunch Break",
      venue: "Respective Halls",
      description: "",
    },
    {
      date: "27/07/2025",
      time: "7:30 pm - 10:00 pm",
      activity: "Dinner",
      venue: "Gymkhana",
      description: "Hosted by Respected Director Sir",
    },

    // Day 4 - July 28, 2025
    {
      date: "28/07/2025",
      time: "9:30 am - 9:40 am",
      activity: "Gymkhana and facilities",
      venue: "Netaji Auditorium (Group A) and Kalidas Auditorium (Group B)",
      description: "President TSG",
    },
    {
      date: "28/07/2025",
      time: "9:40 am - 10:40 am",
      activity: "Introduction to Student Activities",
      venue: "Netaji Auditorium (Group A) and Kalidas Auditorium (Group B)",
      description: "Gymkhana office bearers",
    },
    {
      date: "28/07/2025",
      time: "10:40 am - 11:00 am",
      activity: "Talk by Senior Security officer, IIT Kharagpur",
      venue: "Netaji Auditorium (Group A) and Kalidas Auditorium (Group B)",
      description: "Security Related Guidelines",
    },
    {
      date: "28/07/2025",
      time: "11:00 am - 11:25 am",
      activity: "Introduction to Welfare Societies",
      venue: "Netaji Auditorium (Group A) and Kalidas Auditorium (Group B)",
      description: "",
    },
    {
      date: "28/07/2025",
      time: "11:25 am - 11:45 am",
      activity: "Societies Introduction - Introduction to Sports and Games Societies",
      venue: "Netaji Auditorium (Group A) and Kalidas Auditorium (Group B)",
      description: "",
    },
    {
      date: "28/07/2025",
      time: "11:45 am - 12:30 pm",
      activity: "Introduction to Technology Societies",
      venue: "Netaji Auditorium (Group A) and Kalidas Auditorium (Group B)",
      description: "",
    },
    {
      date: "28/07/2025",
      time: "12:30 pm - 2:00 pm",
      activity: "Lunch Break",
      venue: "Respective Halls",
      description: "",
    },
    {
      date: "28/07/2025",
      time: "2:00 pm - 6:00 pm",
      activity: "Introduction to Cultural Societies & Cultural Program",
      venue: "Netaji Auditorium (Group A) and Kalidas Auditorium (Group B)",
      description: "Societies Introduction and performances",
    },
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
              Induction Schedule
            </h2>
            <p className='text-lg text-iit-blue/70 max-w-3xl mx-auto mb-8'>
              4-day schedule for the Induction Program - July 25-28, 2025
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
