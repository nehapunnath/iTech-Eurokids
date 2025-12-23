import React, { useState } from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaBars, FaTimes, FaChild, FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import { FaGraduationCap } from 'react-icons/fa6';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

   const navItems = [
    { name: 'Home', link: '/' },
    { name: 'About Us', link: '/about' },
    { name: 'Academics', link: '/academics' },
    { name: 'Facilities', link: '/facilities' },
    { name: 'Events', link: '/events' },
    { name: 'Contact', link: '/contact' },
  ];

  return (
    <>
      

      {/* Main Header */}
      <header className="sticky top-0 z-50 bg-white shadow-lg border-b border-mint-green/30">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-3">
              {/* <div className="bg-primary-teal p-3 rounded-full shadow-lg animate-float">
                <FaChild className="text-white text-2xl" />
              </div> */}
              <div className="flex flex-col">
                <div className="flex items-baseline">
                  <span className="text-3xl font-bold font-bold-montserrat text-primary-teal">
                    iTech
                  </span>
                  <span className="text-lg font-bold font-bold-montserrat text-primary-teal ml-2">
                    Eurokids
                  </span>
                </div>
                <p className="text-xs font-cursive text-primary-coral mt-1">
                  Where Technology Meets Early Learning
                </p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-6">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.link}
                  className="text-slate-gray hover:text-primary-teal font-medium transition-all duration-300 relative group py-2"
                >
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-0 h-1 bg-primary-coral group-hover:w-full transition-all duration-300 rounded-full"></span>
                </a>
              ))}
              
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-2xl bg-primary-coral text-white p-2 rounded-lg shadow-md hover:bg-primary-coral/90 transition-all duration-300"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 bg-white rounded-xl shadow-xl p-4 border border-mint-green/30">
              <div className="flex flex-col space-y-3">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.link}
                    className="text-slate-gray hover:text-primary-teal py-3 px-4 hover:bg-primary-teal/5 rounded-lg transition-all duration-300 border-b border-mint-green/20 last:border-b-0 group"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <span className="font-medium group-hover:translate-x-2 transition-all duration-300 inline-block">
                      {item.name}
                    </span>
                  </a>
                ))}
               
              </div>
            </div>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;