import { Clock, MapPin, Calendar } from "lucide-react";

const ScheduleSection = () => {
  const schedule = [
    // Day 1 - July 25, 2025
    {
      date: "25/07/2025",
      time: "09:30 am - 09:45 am",
      activity: "Invitation of Dignitaries to the Dias and Saraswathi Vandana",
      venue: "Netaji Auditorium, Raman & Bhatnagar Auditoriums (All Students), Kalidas Auditorium (Parents)",
      description: "Lighting the Lamp & Saraswathi Vandana",
    },
    {
      date: "25/07/2025",
      time: "09:45 am - 09:50 am",
      activity: "Address by the Chairman Induction Program 2025",
      venue: "Netaji Auditorium, Raman & Bhatnagar Auditoriums (All Students), Kalidas Auditorium (Parents)",
      description: "Prof. Arun Chakraborty",
    },
    {
      date: "25/07/2025",
      time: "09:50 am - 10:05 am",
      activity: "Setting the context of the Induction Program. Introduction of the Functionaries",
      venue: "Netaji Auditorium, Raman & Bhatnagar Auditoriums (All Students), Kalidas Auditorium (Parents)",
      description: "Prof. Bhargab Maitra",
    },
    {
      date: "25/07/2025",
      time: "10:05 am - 10:10 am",
      activity: "Address by Chief Guest",
      venue: "Netaji Auditorium, Raman & Bhatnagar Auditoriums (All Students), Kalidas Auditorium (Parents)",
      description: "Mr. Patil Yogesh Ashokrao (IAS), SDO Kharagpur",
    },
    {
      date: "25/07/2025",
      time: "10:10 am - 11:15 am",
      activity: "Welcome address by the Director",
      venue: "Netaji Auditorium, Raman & Bhatnagar Auditoriums (All Students), Kalidas Auditorium (Parents)",
      description: "Prof. Suman Chakraborty",
    },
    {
      date: "25/07/2025",
      time: "11:15 am - 11:20 am",
      activity: "Vote of Thanks by the Co-Chairman Induction Program 2025",
      venue: "Netaji Auditorium, Raman & Bhatnagar Auditoriums (All Students), Kalidas Auditorium (Parents)",
      description: "Prof. Tapas Laha",
    },
    {
      date: "25/07/2025",
      time: "11:20 am - 11:30 am",
      activity: "National Anthem",
      venue: "Netaji Auditorium, Raman & Bhatnagar Auditoriums (All Students), Kalidas Auditorium (Parents)",
      description: "By All",
    },
    {
      date: "25/07/2025",
      time: "11:30 am - 11:40 am",
      activity: "Break",
      venue: "Netaji Auditorium, Raman & Bhatnagar Auditoriums (All Students), Kalidas Auditorium (Parents)",
      description: "",
    },
    // Parallel Sessions
    {
      date: "25/07/2025",
      time: "11:40 am - 12:40 pm",
      activity: "Director's Address to the Parents and Interactions",
      venue: "Kalidas Auditorium",
      description: "Director, Deans, HMC Chairman, President TSG",
    },
    {
      date: "25/07/2025",
      time: "11:40 am - 12:00 noon",
      activity: "History of IIT Kharagpur - Film Show, IIT Today - Film Show",
      venue: "Netaji Auditorium, Raman & Bhatnagar Auditoriums (All Students)",
      description: "About the Heritage of IIT Kharagpur",
    },
    {
      date: "25/07/2025",
      time: "12:00 noon - 12:10 pm",
      activity: "Address by VP",
      venue: "Netaji Auditorium, Raman & Bhatnagar Auditoriums (All Students)",
      description: "S. Praneeth Kumar",
    },
    {
      date: "25/07/2025",
      time: "12:10 noon - 12:25 pm",
      activity: "Life at IITKGP film show",
      venue: "Netaji Auditorium, Raman & Bhatnagar Auditoriums (All Students)",
      description: "S. Praneeth Kumar",
    },
    {
      date: "25/07/2025",
      time: "12:25 pm - 12:35 pm",
      activity: "Cultural Performance",
      venue: "Netaji Auditorium, Raman & Bhatnagar Auditoriums (All Students)",
      description: "Srujan",
    },
    {
      date: "25/07/2025",
      time: "12:35 pm - 3:00 pm",
      activity: "Lunch Break",
      venue: "Respective Halls for students",
      description: "",
    },
    {
      date: "25/07/2025",
      time: "3:00 pm - 5:00 pm",
      activity: "Visit to Department/School/Centres",
      venue: "Respective Department buildings",
      description: "Coordinated by Faculty advisors and Department Heads",
    },

    // Day 2 - July 26, 2025
    {
      date: "26/07/2025",
      time: "5:30 am - 6:30 am",
      activity: "Sunrise KARMYOG",
      venue: "Jnan Ghosh Stadium",
      description: "Mr. Sourabh Sarkar",
    },
    {
      date: "26/07/2025",
      time: "10:00 am - 10:10 am",
      activity: "Introduction by Dean SA",
      venue: "Netaji Auditorium, Raman & Bhatnagar Auditoriums (All Students), Kalidas Auditorium (Parents)",
      description: "Prof. Bhargab Maitra",
    },
    {
      date: "26/07/2025",
      time: "10:10 am - 10:45 am",
      activity: "Academic Structure",
      venue: "Netaji Auditorium, Raman & Bhatnagar Auditoriums (All Students), Kalidas Auditorium (Parents)",
      description: "Prof. Rajat Subhra Chakraborty",
    },
    {
      date: "26/07/2025",
      time: "10:45 am - 11:15 am",
      activity: "Introduction to Extra-Academic Activities",
      venue: "Netaji Auditorium, Raman & Bhatnagar Auditoriums (All Students), Kalidas Auditorium (Parents)",
      description: "President Gymkhana, NSS, NSO, NCC Coordinators",
    },
    {
      date: "26/07/2025",
      time: "11:15 am - 11:25 am",
      activity: "Talk about Computer & Informatics Centre (CIC)",
      venue: "Netaji Auditorium, Raman & Bhatnagar Auditoriums (All Students), Kalidas Auditorium (Parents)",
      description: "Prof. Raja Datta",
    },
    {
      date: "26/07/2025",
      time: "11:25 am - 11:45 am",
      activity: "ERP",
      venue: "Netaji Auditorium, Raman & Bhatnagar Auditoriums (All Students), Kalidas Auditorium (Parents)",
      description: "Prof. Chittaranjan Mandal",
    },
    {
      date: "26/07/2025",
      time: "11:45 am - 12:05 noon",
      activity: "Career Development Centre",
      venue: "Netaji Auditorium, Raman & Bhatnagar Auditoriums (All Students), Kalidas Auditorium (Parents)",
      description: "Prof. Rajib Maity",
    },
    {
      date: "26/07/2025",
      time: "12:05 noon - 12:25 pm",
      activity: "Library facilities",
      venue: "Netaji Auditorium, Raman & Bhatnagar Auditoriums (All Students), Kalidas Auditorium (Parents)",
      description: "Dr. Bablu Sutradhar",
    },
    {
      date: "26/07/2025",
      time: "12:25 pm - 2:30 pm",
      activity: "Lunch Break",
      venue: "Respective Halls for students",
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
      venue: "Jnan Ghosh Stadium",
      description: "Mr. Sourabh Sarkar",
    },
    {
      date: "27/07/2025",
      time: "10:00 am - 10:20 am",
      activity: "Introduction by Dean SA - SARTH and other facilities under it's aegis",
      venue: "Netaji Auditorium, Raman & Bhatnagar Auditoriums (All Students), Kalidas Auditorium (Parents)",
      description: "Dean Student Affairs",
    },
    {
      date: "27/07/2025",
      time: "10:20 am - 10:30 am",
      activity: "Introduction to BC Roy Technology Hospital and Imedix",
      venue: "Netaji Auditorium, Raman & Bhatnagar Auditoriums (All Students), Kalidas Auditorium (Parents)",
      description: "Dr. Indranath Banerjee",
    },
    {
      date: "27/07/2025",
      time: "10:30 am - 10:40 am",
      activity: "Introduction to SPSMH",
      venue: "Netaji Auditorium, Raman & Bhatnagar Auditoriums (All Students), Kalidas Auditorium (Parents)",
      description: "Dr. P. Sannigrahi",
    },
    {
      date: "27/07/2025",
      time: "10:40 am - 10:55 am",
      activity: "Inclusivity in Campus (Gender cell/ICC)",
      venue: "Netaji Auditorium, Raman & Bhatnagar Auditoriums (All Students), Kalidas Auditorium (Parents)",
      description: "Dr. Amita Pathak Mohanty",
    },
    {
      date: "27/07/2025",
      time: "10:55 am - 11:05 am",
      activity: "Session on Rajbhasha",
      venue: "Netaji Auditorium, Raman & Bhatnagar Auditoriums (All Students), Kalidas Auditorium (Parents)",
      description: "Dr. Rajeev Kumar Rawat",
    },
    {
      date: "27/07/2025",
      time: "11:05 am - 11:30 am",
      activity: "Know your halls and Wardens – Do's and Don'ts",
      venue: "Netaji Auditorium, Raman & Bhatnagar Auditoriums (All Students), Kalidas Auditorium (Parents)",
      description: "Prof. Sanjeev Srivastava",
    },
    {
      date: "27/07/2025",
      time: "11:30 am - 12:30 pm",
      activity: "Research, Alumni connect / Cell Introductions",
      venue: "Netaji Auditorium, Raman & Bhatnagar Auditoriums (All Students), Kalidas Auditorium (Parents)",
      description: "Dean AA, Dean IR, SAC & SIRC",
    },
    {
      date: "27/07/2025",
      time: "12:30 pm onwards",
      activity: "Lunch Break",
      venue: "Respective Halls for students",
      description: "",
    },
    {
      date: "27/07/2025",
      time: "7:30 pm - 10:00 pm",
      activity: "Grand Dinner for the New UG students",
      venue: "Gymkhana",
      description: "Hosted by Respected Director Sir",
    },

    // Day 4 - July 28, 2025
    {
      date: "28/07/2025",
      time: "9:30 am - 9:35 am",
      activity: "Welcome of Chief guest by Dean SA",
      venue: "Netaji Auditorium, Raman & Bhatnagar Auditoriums (All Students), Kalidas Auditorium (Parents)",
      description: "",
    },
    {
      date: "28/07/2025",
      time: "9:35 am - 10:15 am",
      activity: "Life & Career – understanding the challenges and developing skills",
      venue: "Netaji Auditorium, Raman & Bhatnagar Auditoriums (All Students), Kalidas Auditorium (Parents)",
      description: "Prof. Manas Kumar Mandal",
    },
    {
      date: "28/07/2025",
      time: "10:15 am - 10:25 am",
      activity: "Gymkhana and facilities",
      venue: "Netaji Auditorium, Raman & Bhatnagar Auditoriums (All Students), Kalidas Auditorium (Parents)",
      description: "Prof. J. Mahakud",
    },
    {
      date: "28/07/2025",
      time: "10:25 am - 11:00 am",
      activity: "Introduction to Student Activities",
      venue: "Netaji Auditorium, Raman & Bhatnagar Auditoriums (All Students), Kalidas Auditorium (Parents)",
      description: "Gymkhana office bearers",
    },
    {
      date: "28/07/2025",
      time: "11:00 am - 11:15 am",
      activity: "Introduction to Security protocol of IIT Kharagpur",
      venue: "Netaji Auditorium, Raman & Bhatnagar Auditoriums (All Students), Kalidas Auditorium (Parents)",
      description: "Mr. Parmod Kumar",
    },
    {
      date: "28/07/2025",
      time: "11:15 am - 11:30 am",
      activity: "Introduction to Welfare Societies",
      venue: "Netaji Auditorium, Raman & Bhatnagar Auditoriums (All Students), Kalidas Auditorium (Parents)",
      description: "",
    },
    {
      date: "28/07/2025",
      time: "11:30 am - 11:45 am",
      activity: "Introduction to Sports and Games Societies",
      venue: "Netaji Auditorium, Raman & Bhatnagar Auditoriums (All Students), Kalidas Auditorium (Parents)",
      description: "",
    },
    {
      date: "28/07/2025",
      time: "11:45 am - 12:30 pm",
      activity: "Introduction to Technology Societies",
      venue: "Netaji Auditorium, Raman & Bhatnagar Auditoriums (All Students), Kalidas Auditorium (Parents)",
      description: "",
    },
    {
      date: "28/07/2025",
      time: "12:30 pm - 2:00 pm",
      activity: "Lunch Break",
      venue: "Respective Halls for students",
      description: "",
    },
    {
      date: "28/07/2025",
      time: "2:00 pm - 6:00 pm",
      activity: "Introduction to Cultural Societies & Cultural Program",
      venue: "Netaji Auditorium, Raman & Bhatnagar Auditoriums (All Students), Kalidas Auditorium (Parents)",
      description: "Societies Introduction and performances",
    },
  ];

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
