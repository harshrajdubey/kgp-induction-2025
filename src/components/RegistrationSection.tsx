import { Calendar, Clock, FileText, Wifi, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const RegistrationSection = () => {
  const registrationUrl = "http://10.15.33.30/ugreg25";

  return (
    <section id='registration' className='py-16 bg-background'>
      <div className='container mx-auto px-6'>
        <div className='max-w-6xl mx-auto'>
          {/* Header */}
          <div className='text-center mb-12 animate-fade-in'>
            <h2 className='text-3xl md:text-5xl font-heading font-bold  mb-6 uppercase'>REGISTRATION</h2>
            <div className='w-24 h-1 bg-iit-gold mx-auto mb-8'></div>
            <h3 className='text-2xl md:text-3xl font-heading font-bold text-iit-gold mb-8'>
              Admission through JEE (Adv.) 2025
            </h3>
          </div>

          <div className='grid lg:grid-cols-2 gap-12 items-center'>
            {/* QR Code Section */}
            <div className='text-center animate-fade-in'>
              <div className='bg-white p-4 rounded-2xl shadow-xl inline-block mb-6'>
                <div className='w-54 h-54 mx-auto bg-white flex items-center justify-center border-2 border-gray-200 rounded-lg'>
                  {/* QR Code image */}
                  <img src='/regqr.png' alt='Registration QR Code' className='w-48 h-48 object-contain' />
                </div>
              </div>
              <p className=' text-lg font-medium mb-4'>Scan QR to book a Registration Time-Slot</p>
              <div className='flex items-center justify-center mb-4'>
                <Wifi className='w-3 h-3 mr-2' />
                <span className='text-xs'>This URL is available on internal Wi-Fi network only</span>
              </div>
              <Button
                className='bg-iit-gold text-iit-blue hover:bg-iit-gold/90 font-semibold px-6 py-3'
                onClick={() => window.open(registrationUrl, "_blank")}>
                <ExternalLink className='w-4 h-4 mr-2' />
                Open Registration Portal
              </Button>
            </div>

            {/* Information Section */}
            <div className='space-y-6 animate-slide-up'>
              <div className='bg-iit-blue/5 backdrop-blur-sm rounded-2xl p-8 border border-white/20'>
                <div className='flex items-center mb-4'>
                  <Calendar className='w-6 h-6 text-iit-gold mr-3' />
                  <h4 className='text-xl font-bold '>Important Information</h4>
                </div>
                <ul className='space-y-4 '>
                  <li className='flex items-start'>
                    <div className='w-2 h-2 bg-iit-gold rounded-full mt-2 mr-3 flex-shrink-0'></div>
                    <span>
                      It is <strong className='text-iit-gold'>mandatory</strong> to book slot for Registration.
                    </span>
                  </li>
                  <li className='flex items-start'>
                    <div className='w-2 h-2 bg-iit-gold rounded-full mt-2 mr-3 flex-shrink-0'></div>
                    <span>For more information on registration & the documents required, please visit:</span>
                  </li>
                </ul>
                <div className='rounded-lg'>
                  <a
                    href='https://www.iitkgp.ac.in/welcome-freshers'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-iit-gold hover: transition-colors duration-300 font-medium flex items-center'>
                    <ExternalLink className='w-4 h-4 mr-2' />
                    https://www.iitkgp.ac.in/welcome-freshers
                  </a>
                </div>
              </div>

              <div className='bg-iit-blue/5 backdrop-blur-sm rounded-2xl p-8 border border-white/20'>
                <div className='flex items-center mb-4'>
                  <FileText className='w-6 h-6 text-iit-gold mr-3' />
                  <h4 className='text-xl font-bold '>ERP Profile Creation</h4>
                </div>
                <div className=' space-y-2'>
                  <p>Candidates who have not yet created their ERP profile can visit:</p>
                  <div className='rounded-lg '>
                    <div className='flex items-center mb-2'>
                      <Clock className='w-4 h-4 text-iit-gold mr-2' />
                      <strong className='text-iit-gold'>CIC Lab (Takshashila Building)</strong>
                    </div>
                    <p className='text-sm'>Timing: 10:00 AM to 6:00 PM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegistrationSection;
