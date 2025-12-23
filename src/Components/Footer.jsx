import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaArrowRight, FaCalendarAlt, FaSchool } from 'react-icons/fa';

const Footer = () => {
  const footerNavItems = [
    { name: 'Home', link: '/' },
    { name: 'About Us', link: '/about' },
    { name: 'Academics', link: '/academics' },
    { name: 'Facilities', link: '/facilities' },
    { name: 'Events', link: '/events' },
    { name: 'Contact', link: '/contact' },
  ];

  return (
    <footer className="bg-navy-blue text-white pt-12">
      <div className="container mx-auto px-4">
        {/* Top Section - 3 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-8 border-b border-mint-green/30">
          
          {/* Column 1: Brand & Description */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="bg-primary-teal p-3 rounded-full shadow-lg">
                <FaSchool className="text-white text-2xl" />
              </div>
              <div>
                <div className="flex items-baseline">
                  <span className="text-2xl font-bold font-bold-montserrat text-primary-teal">
                    iTECH
                  </span>
                  <span className="text-lg font-bold font-bold-montserrat text-primary-teal ml-1">
                    Eurokids
                  </span>
                </div>
                <p className="text-primary-coral font-cursive text-sm">Preschool & Daycare</p>
              </div>
            </div>
            <p className="text-sky-blue text-sm leading-relaxed">
              Where technology meets traditional learning to create innovative educational experiences for young minds.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:pl-8">
            <h3 className="text-xl font-bold mb-6 text-primary-coral font-playful flex items-center gap-2">
              <FaArrowRight className="text-sm" />
              Quick Links
            </h3>
            <ul className="space-y-3">
              {footerNavItems.map((item) => (
                <li key={item.name}>
                  <a 
                    href={item.link}
                    className="text-sky-blue hover:text-sunshine-yellow transition-all duration-300 flex items-center gap-3 py-2 group"
                  >
                    <div className="w-1 h-1 bg-primary-teal rounded-full group-hover:w-3 group-hover:h-3 transition-all duration-300"></div>
                    <span className="text-sm group-hover:translate-x-2 transition-all duration-300">{item.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div className="lg:pl-8">
            <h3 className="text-xl font-bold mb-6 text-primary-coral font-playful flex items-center gap-2">
              <FaCalendarAlt className="text-sm" />
              Contact Info
            </h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3 group">
                <div className="bg-primary-teal/20 p-2 rounded-lg group-hover:bg-primary-teal/30 transition-all duration-300">
                  <FaMapMarkerAlt className="text-primary-teal text-lg" />
                </div>
                <div>
                  <p className="font-semibold text-mint-green">Our Location</p>
                  <p className="text-sky-blue text-sm">Muthanallur Rd, near Back Gate of Nambiar Elligenza, Gopasandra, Bengaluru, Karnataka 560099</p>
                </div>
              </div>
              <div className="flex items-start gap-3 group">
                <div className="bg-primary-coral/20 p-2 rounded-lg group-hover:bg-primary-coral/30 transition-all duration-300">
                  <FaPhone className="text-primary-coral text-lg" />
                </div>
                <div>
                  <p className="font-semibold text-mint-green">Call Us</p>
                  <p className="text-sky-blue text-sm">: 072048 43516</p>
                </div>
              </div>
              <div className="flex items-start gap-3 group">
                <div className="bg-primary-teal/20 p-2 rounded-lg group-hover:bg-primary-teal/30 transition-all duration-300">
                  <FaEnvelope className="text-primary-teal text-lg" />
                </div>
                <div>
                  <p className="font-semibold text-mint-green">Email Us</p>
                  <p className="text-sky-blue text-sm">info@itecheurokids.com</p>
                </div>
              </div>
              <div className="flex items-start gap-3 group">
                <div className="bg-primary-coral/20 p-2 rounded-lg group-hover:bg-primary-coral/30 transition-all duration-300">
                  <FaClock className="text-primary-coral text-lg" />
                </div>
                <div>
                  <p className="font-semibold text-mint-green">Hours</p>
                  <p className="text-sky-blue text-sm">Mon-Fri: 8:30 AM - 3:30 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;