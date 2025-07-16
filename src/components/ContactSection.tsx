import { Mail, Phone, Clock, MapPin, User, Shield } from "lucide-react";

const ContactSection = () => {
  const volunteers = [
    // PG/RS Volunteers
    {
      name: "Konark Jaishy",
      phone: "6395550593",
    },
    {
      name: "Harshiddhi Pathak",
      phone: "9893887599",
    },
    {
      name: "Kaushik Rakesh",
      phone: "8083158366",
    },
  ];

  const officials = [
    {
      title: "Vice President, Technology Students' Gymkhana",
      name: "Sudhagani Praneeth Kumar",
      email: "vptsg@hijli.iitkgp.ac.in",
      phone: "+91 7416449233",
    },
    {
      title: "General Secretary, Student Welfare",
      name: "Tanush Agarwal",
      email: "gsectsg-welfare@hijli.iitkgp.ac.in",
      phone: "+91 8309300581",
    },
    {
      title: "General Secretary, Student Welfare",
      name: "Dnyaneshwari Ghare",
      email: "gsectsg-welfare@hijli.iitkgp.ac.in",
      phone: "+91 7499306778",
    },
  ];

  return (
    <section id='contact' className='py-16 bg-background'>
      <div className='container mx-auto px-6'>
        <div className='max-w-6xl mx-auto'>
          {/* Header */}
          <div className='text-center mb-12 animate-fade-in'>
            <h2 className='text-3xl md:text-5xl font-heading font-bold text-iit-blue mb-6 uppercase'>
              Contact Information
            </h2>
            <p className='text-lg text-iit-blue/70 max-w-3xl mx-auto'>
              Still need help? Get in touch with our team for any questions or assistance regarding the induction
              program.
            </p>
          </div>

          {/* Main Contact Cards */}
          {/* <div className='grid md:grid-cols-1 gap-8 mb-12'> */}
          <div className='flex justify-center mb-12'>
            {/* Help Desk */}

            {/* Emergency Contact */}
            <div className='iit-card p-8 pl-12 border-l-4 border-red-500 w-full max-w-3xl'>
              <div className='flex items-center mb-6'>
                <div className='w-12 h-12 bg-red-500 rounded-lg flex items-center justify-center mr-4'>
                  <Phone className='w-6 h-6 text-white' />
                </div>
                <h3 className='text-2xl font-bold text-iit-blue'>24/7 Emergency Contacts</h3>
              </div>

              <div className='space-y-4'>
                <div className='space-y-1'>
                  <div>
                    <strong>Security Control Room:</strong>
                    <span className=''>03222282751, 03222281002, 03222281001</span>
                  </div>
                  <div>
                    <strong>Quick Response Room:</strong> <span className=''>03222281002, 03222281003</span>
                  </div>
                  <div>
                    <strong>Fire Emergency:</strong> <span className=''>03222255709</span>
                  </div>
                  <div>
                    <strong>Medical Emergency (B.C. Roy Help Desk):</strong> <span className=''>03222281008</span>
                  </div>
                  <div>
                    <strong>Local Police (Hijli Town Outpost):</strong> <span className=''>03222288060</span>
                  </div>
                  <div>
                    <strong>24x7 Women Helpline Number:</strong> <span className=''>03222281010</span>
                  </div>
                </div>
              </div>
            </div>

            {/* <div className='iit-card p-8 border-l-4 border-iit-blue'>
              <div className='flex items-center mb-6'>
                <div className='w-12 h-12 bg-iit-blue rounded-lg flex items-center justify-center mr-4'>
                  <Shield className='w-6 h-6 text-white' />
                </div>
                <h3 className='text-2xl  font-bold text-iit-blue'>Internal Complaints Committee</h3>
              </div>

              <div className='space-y-4'>
                <div className='flex items-center'>
                  <span className='w-8 h-8 bg-iit-blue rounded-lg flex items-center justify-center mr-3'>
                    <Mail className='w-4 h-4 text-white' />
                  </span>
                  <span className='text-iit-blue/80'>icc@iitkgp.ac.in</span>
                </div>
                <div className='flex items-center'>
                  <span className='w-8 h-8 bg-iit-blue rounded-lg flex items-center justify-center mr-3'>
                    <Phone className='w-4 h-4 text-white' />
                  </span>
                  <span className='text-iit-blue/80'>03222-281750</span>
                </div>
                <div className='flex items-center'>
                  <span className='w-8 h-8 bg-iit-blue rounded-lg flex items-center justify-center mr-3'>
                    <Phone className='w-4 h-4 text-white' />
                  </span>
                  <span className='text-iit-blue/80'>03222-283312 (Women Students' Council)</span>
                </div>
              </div>
            </div> */}
          </div>

          {/* Volunteer Contacts */}
          {/* <div className='mb-12'>
            <h3 className='text-2xl  font-bold text-iit-blue mb-6 text-center'>PG/RS Volunteers Contacts</h3>
            <div className='hidden md:flex justify-center overflow-x-auto '>
              <table className=' bg-white rounded-xl shadow-lg overflow-hidden w-full max-w-3xl'>
                <thead className='bg-iit-blue text-white'>
                  <tr>
                    <th className='px-6 py-4 text-left font-bold'>Name</th>
                    <th className='px-6 py-4 text-left  font-bold'>Phone</th>
                  </tr>
                </thead>
                <tbody>
                  {volunteers.map((volunteer, index) => (
                    <tr
                      key={index}
                      className={`border-b border-gray-100 hover:bg-light-blue/30 transition-colors duration-200 ${
                        index % 2 === 0 ? "bg-gray-50/50" : "bg-white"
                      }`}>
                      <td className='px-6 py-4'>
                        <div className='flex items-center'>
                          <User className='w-4 h-4 text-white mr-2' />
                          <span className='font-semibold text-iit-blue'>{volunteer.name}</span>
                        </div>
                      </td>
                      <td className='px-6 py-4'>
                        <div className='flex items-center'>
                          <Phone className='w-4 h-4 text-white mr-2' />
                          <span className='text-iit-blue/80'>{volunteer.phone}</span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className='md:hidden space-y-4'>
              {volunteers.map((volunteer, index) => (
                <div key={index} className='iit-card p-4'>
                  <div className='flex items-center justify-between mb-2'>
                    <span className='font-semibold text-iit-blue'>{volunteer.name}</span>
                  </div>
                  <div className='flex items-center justify-between'>
                    <span className='text-sm text-iit-blue/80'>{volunteer.phone}</span>
                  </div>
                </div>
              ))}
            </div>
          </div> */}

          {/* Officials Contact */}
          <div>
            <h3 className='text-2xl  font-bold text-iit-blue mb-6 text-center'>Key Officials</h3>

            <div className='grid md:grid-cols-3 gap-6'>
              {officials.map((official, index) => (
                <div key={index} className='iit-card p-6 text-center'>
                  {/* Icon */}
                  <div className='w-16 h-16 bg-iit-blue rounded-lg flex items-center justify-center mx-auto mb-4'>
                    <User className='w-8 h-8 text-white' />
                  </div>
                  <h4 className=' font-bold text-iit-blue mb-2'>{official.name}</h4>
                  <p className='text-sm text-iit-blue/70 mb-4'>{official.title}</p>
                  <div className='space-y-2 text-sm'>
                    <div className='flex items-center justify-center'>
                      <Mail className='w-3 h-3 text-white mr-2' />
                      <span className='text-iit-blue/80'>{official.email}</span>
                    </div>
                    <div className='flex items-center justify-center'>
                      <Phone className='w-3 h-3 text-white mr-2' />
                      <span className='text-iit-blue/80'>{official.phone}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
