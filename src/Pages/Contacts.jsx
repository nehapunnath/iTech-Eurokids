import React from 'react';
import { 
  FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, 
  FaBus, FaChild, FaSchool, FaGraduationCap,
  FaCalendarAlt, FaUsers, FaShieldAlt
} from 'react-icons/fa';

const Contacts = () => {
  // Contact Information
  const contactInfo = [
    {
      icon: <FaMapMarkerAlt className="text-2xl" />,
      title: 'Our Location',
      details: 'Muthanallur Rd, near Back Gate of Nambiar Elligenza, Gopasandra, Bengaluru, Karnataka 560099',
      color: 'primary-teal',
      link: 'https://maps.google.com/?q=iTECH+Eurokids+Bangalore'
    },
    {
      icon: <FaPhone className="text-2xl" />,
      title: 'Call Us',
      details: '072048 43516',
      color: 'primary-coral',
      link: 'tel:07204843516'
    },
    {
      icon: <FaEnvelope className="text-2xl" />,
      title: 'Email Us',
      details: 'info@itecheurokids.com',
      color: 'mint-green',
      link: 'mailto:info@itecheurokids.com'
    },
    {
      icon: <FaClock className="text-2xl" />,
      title: 'Operating Hours',
      details: 'Monday - Friday: 8:30 AM - 3:30 PM',
      subDetails: 'Day Care: 8:00 AM - 6:00 PM',
      color: 'sky-blue'
    }
  ];

  // Program Information
  const programInfo = [
    {
      icon: <FaChild className="text-xl" />,
      title: 'Age Groups',
      details: '1.5 to 6 Years',
      color: 'primary-teal'
    },
    {
      icon: <FaGraduationCap className="text-xl" />,
      title: 'Programs',
      details: 'Toddlers, Pre-Kg, LKG, UKG',
      color: 'primary-coral'
    },
    {
      icon: <FaBus className="text-xl" />,
      title: 'Transportation',
      details: 'Available',
      color: 'mint-green'
    },
    {
      icon: <FaCalendarAlt className="text-xl" />,
      title: 'Admission',
      details: 'Open All Year',
      color: 'sky-blue'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50">
      {/* Header Section */}
      <section className="py-12 bg-gradient-to-r from-navy-blue to-primary-teal">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl text-navy-blue md:text-5xl font-bold mb-4">
            Contact Us
          </h1>
          <p className="text-xl text-sky-blue max-w-3xl mx-auto">
            Get in touch with us for admissions, inquiries, or to schedule a visit
          </p>
        </div>
      </section>

      {/* Main Contact Information */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-navy-blue mb-4">
              Contact Information
            </h2>
            <p className="text-lg text-slate-gray max-w-2xl mx-auto">
              Reach out to us through any of these channels
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((contact, index) => (
              <a
                key={index}
                href={contact.link || '#'}
                target={contact.link ? '_blank' : '_self'}
                rel={contact.link ? 'noopener noreferrer' : ''}
                className={`bg-gradient-to-br from-white to-blue-50 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-blue-100 p-6 ${
                  contact.link ? 'cursor-pointer' : 'cursor-default'
                }`}
              >
                <div className={`bg-${contact.color}/10 p-4 rounded-xl w-fit mb-6`}>
                  <div className={`text-${contact.color}`}>
                    {contact.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-navy-blue mb-3">
                  {contact.title}
                </h3>
                <p className="text-slate-gray text-sm mb-2">
                  {contact.details}
                </p>
                {contact.subDetails && (
                  <p className="text-primary-coral text-sm font-semibold">
                    {contact.subDetails}
                  </p>
                )}
                {contact.link && (
                  <div className={`h-1 w-12 bg-${contact.color} rounded-full mt-4`} />
                )}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-gradient-to-br from-primary-teal/10 to-primary-coral/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-navy-blue mb-4">
              Find Us
            </h2>
            <p className="text-lg text-slate-gray max-w-2xl mx-auto">
              Visit our campus to see our facilities and meet our team
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-blue-100">
            <div className="h-96 relative">
              {/* Embedded Google Map */}
              <iframe
                src="http://www.googlemaps.com/"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="iTECH Eurokids Location"
              ></iframe>
              
              {/* Map Overlay Info */}
              <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg max-w-xs">
                <div className="flex items-center gap-3 mb-3">
                  <div className="bg-primary-teal p-2 rounded-lg">
                    <FaSchool className="text-white text-xl" />
                  </div>
                  <div>
                    <h3 className="font-bold text-navy-blue">iTECH Eurokids</h3>
                    <p className="text-slate-gray text-sm">Preschool & Daycare</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-gray">
                  <FaMapMarkerAlt className="text-primary-coral" />
                  <span>Muthanallur Rd, Gopasandra, Bengaluru</span>
                </div>
              </div>
            </div>
            
           
          </div>
        </div>
      </section>

      {/* Program Information */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-navy-blue mb-4">
              Program Information
            </h2>
            <p className="text-lg text-slate-gray max-w-2xl mx-auto">
              Quick facts about our programs and services
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {programInfo.map((program, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-white to-blue-50 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-blue-100 p-6 text-center"
              >
                <div className={`text-${program.color} mb-4 flex justify-center`}>
                  {program.icon}
                </div>
                <div className="text-sm font-semibold text-primary-coral mb-2">
                  {program.title}
                </div>
                <div className="text-lg font-bold text-navy-blue">
                  {program.details}
                </div>
                <div className={`h-1 w-8 bg-${program.color} rounded-full mx-auto mt-4`} />
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default Contacts;