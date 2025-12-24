import React from 'react';
import { 
  FaChild, FaShieldAlt, FaCamera, FaBus, FaDesktop, 
  FaTree, FaBook, FaMusic, FaPalette, FaFlask, 
  FaUtensils, FaFirstAid, FaGamepad, FaSwimmingPool,
  FaSnowflake, FaUsers, FaSun, FaWifi, FaStar,
  FaArrowRight, FaCheckCircle, FaMapMarkerAlt
} from 'react-icons/fa';

const Facilities = () => {
  // Safety & Security Facilities
  const safetyFacilities = [
    {
      title: '24/7 CCTV Surveillance',
      description: 'High-definition cameras covering all areas including classrooms, play areas, and entrances',
      icon: <FaCamera className="text-3xl" />,
      color: 'primary-teal',
      features: ['Live monitoring', 'Recorded footage storage', 'Motion detection', 'Remote access for management']
    },
    {
      title: 'Secure Entry System',
      description: 'Biometric access control and visitor management system',
      icon: <FaShieldAlt className="text-3xl" />,
      color: 'primary-coral',
      features: ['Biometric authentication', 'Visitor log system', 'Restricted access zones', 'Emergency exits']
    },
    {
      title: 'GPS Enabled Transport',
      description: 'Real-time tracking of school buses with parent access',
      icon: <FaBus className="text-3xl" />,
      color: 'forest-green',
      features: ['Live location tracking', 'Speed monitoring', 'Route optimization', 'Parent mobile access']
    },
    {
      title: 'Trained Security Staff',
      description: 'Professional security personnel with child safety training',
      icon: <FaUsers className="text-3xl" />,
      color: 'sky-blue',
      features: ['Round-the-clock security', 'First aid certified', 'Background verified', 'Regular drills']
    }
  ];

  // Learning Facilities
  const learningFacilities = [
    {
      title: 'Smart Classrooms',
      description: 'Technology-integrated learning spaces with interactive smart boards',
      icon: <FaDesktop className="text-3xl" />,
      color: 'primary-teal',
      image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=400&q=80',
      features: ['Interactive whiteboards', 'Projection systems', 'Audio systems', 'Wi-Fi enabled']
    },
    {
      title: 'Age-Specific Play Areas',
      description: 'Separate play zones for different age groups with safe equipment',
      icon: <FaGamepad className="text-3xl" />,
      color: 'primary-coral',
      image: 'https://images.unsplash.com/photo-1541692641319-981cc79ee10a?auto=format&fit=crop&w=400&q=80',
      features: ['Soft flooring', 'Age-appropriate equipment', 'Shaded areas', 'Supervised play']
    },
    {
      title: 'Library & Reading Corner',
      description: 'Curated collection of age-appropriate books and reading materials',
      icon: <FaBook className="text-3xl" />,
      color: 'mint-green',
      image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&w=400&q=80',
      features: ['Picture books', 'Storytelling area', 'Educational magazines', 'Digital reading']
    },
    {
      title: 'Creative Arts Studio',
      description: 'Dedicated space for arts, crafts, and creative expression',
      icon: <FaPalette className="text-3xl" />,
      color: 'sky-blue',
      image: 'https://images.unsplash.com/photo-1560969184-10fe8719e047?auto=format&fit=crop&w=400&q=80',
      features: ['Art supplies', 'Craft materials', 'Display areas', 'Wash stations']
    }
  ];

  // Health & Wellness Facilities
  const healthFacilities = [
    {
      title: 'Medical Room',
      description: 'Fully equipped medical room with first aid and emergency care',
      icon: <FaFirstAid className="text-3xl" />,
      color: 'primary-coral',
      features: ['Trained nurse', 'First aid kits', 'Emergency equipment', 'Medication storage']
    },
    {
      title: 'Hygiene Stations',
      description: 'Child-friendly washrooms and hygiene facilities',
      icon: <FaChild className="text-3xl" />,
      color: 'primary-teal',
      features: ['Age-appropriate fixtures', 'Automatic sensors', 'Regular sanitization', 'Hygiene training']
    },
    {
      title: 'Air Quality Control',
      description: 'Air purifiers and ventilation systems for clean indoor air',
      icon: <FaSnowflake className="text-3xl" />,
      color: 'sky-blue',
      features: ['HEPA filters', 'Ventilation systems', 'Temperature control', 'Humidity monitoring']
    },
    {
      title: 'Nutrition Kitchen',
      description: 'Hygienic kitchen for preparing nutritious meals and snacks',
      icon: <FaUtensils className="text-3xl" />,
      color: 'mint-green',
      features: ['HACCP certified', 'Nutritious menus', 'Allergy awareness', 'Regular inspections']
    }
  ];

  // Outdoor Facilities
  const outdoorFacilities = [
    {
      title: 'Safe Playground',
      description: 'Outdoor play area with safety-certified equipment',
      icon: <FaTree className="text-3xl" />,
      color: 'forest-green',
      features: ['Rubber flooring', 'Shaded areas', 'Multiple play zones', 'Supervised activities']
    },
    {
      title: 'Splash Pool',
      description: 'Shallow water play area for supervised water activities',
      icon: <FaSwimmingPool className="text-3xl" />,
      color: 'sky-blue',
      features: ['Temperature control', 'Safety railings', 'Water filtration', 'Trained supervisors']
    },
    {
      title: 'Gardening Zone',
      description: 'Organic garden for hands-on nature learning',
      icon: <FaFlask className="text-3xl" />,
      color: 'mint-green',
      features: ['Planting beds', 'Gardening tools', 'Compost area', 'Learning sessions']
    },
    {
      title: 'Sand Play Area',
      description: 'Dedicated sand pit for sensory development',
      icon: <FaSun className="text-3xl" />,
      color: 'sunshine-yellow',
      features: ['Sanitized sand', 'Covered when not in use', 'Clean play tools', 'Regular maintenance']
    }
  ];

  // Technology Facilities
  const technologyFacilities = [
    {
      title: 'High-Speed Internet',
      description: 'Secure Wi-Fi network for educational purposes',
      icon: <FaWifi className="text-3xl" />,
      color: 'primary-teal',
      features: ['Secure network', 'Content filtering', 'High bandwidth', 'IT support']
    },
    {
      title: 'Parent Communication App',
      description: 'Mobile app for real-time updates and communication',
      icon: <FaDesktop className="text-3xl" />,
      color: 'primary-coral',
      features: ['Daily reports', 'Photo updates', 'Event notifications', 'Direct messaging']
    },
    {
      title: 'Digital Attendance',
      description: 'Biometric and RFID based attendance tracking',
      icon: <FaUsers className="text-3xl" />,
      color: 'sky-blue',
      features: ['Real-time tracking', 'Instant notifications', 'Detailed reports', 'Pickup authorization']
    },
    {
      title: 'Smart TV & Audio',
      description: 'Audio-visual systems for multimedia learning',
      icon: <FaMusic className="text-3xl" />,
      color: 'mint-green',
      features: ['Educational content', 'Music systems', 'Video learning', 'Interactive sessions']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50">
      {/* Header Section */}
      <section className="py-12 bg-gradient-to-r from-navy-blue to-primary-teal">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl text-navy-blue md:text-5xl font-bold mb-4">
            Our Facilities
          </h1>
          <p className="text-xl text-sky-blue max-w-3xl mx-auto">
            State-of-the-art facilities designed for safety, learning, and holistic development.
            Creating the perfect environment for your child's growth.
          </p>
        </div>
      </section>

      {/* Safety & Security */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 mb-4">
              <FaShieldAlt className="text-primary-teal text-3xl" />
              <h2 className="text-4xl font-bold text-navy-blue">
                Safety & Security
              </h2>
            </div>
            <p className="text-lg text-slate-gray max-w-2xl mx-auto">
              Your child's safety is our top priority. Our comprehensive security measures ensure peace of mind.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {safetyFacilities.map((facility, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-white to-blue-50 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-blue-100 p-6"
              >
                <div className={`bg-${facility.color}/10 p-4 rounded-xl w-fit mb-6`}>
                  <div className={`text-${facility.color}`}>
                    {facility.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-navy-blue mb-3">
                  {facility.title}
                </h3>
                <p className="text-slate-gray text-sm mb-4">
                  {facility.description}
                </p>
                <div className="space-y-2">
                  {facility.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <FaCheckCircle className="text-green-500 text-sm" />
                      <span className="text-slate-gray text-xs">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Facilities */}
      <section className="py-16 bg-gradient-to-br from-primary-teal/10 to-primary-coral/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 mb-4">
              <FaDesktop className="text-primary-coral text-3xl" />
              <h2 className="text-4xl font-bold text-navy-blue">
                Learning Environment
              </h2>
            </div>
            <p className="text-lg text-slate-gray max-w-2xl mx-auto">
              Modern, engaging learning spaces designed to stimulate curiosity and creativity.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {learningFacilities.map((facility, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-blue-100"
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={facility.image} 
                    alt={facility.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className={`absolute top-4 left-4 bg-${facility.color} text-white p-3 rounded-full shadow-lg`}>
                    {facility.icon}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-navy-blue mb-2">
                    {facility.title}
                  </h3>
                  <p className="text-slate-gray text-sm mb-4">
                    {facility.description}
                  </p>
                  <div className="grid grid-cols-2 gap-3 mb-4">
                    {facility.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <div className={`w-2 h-2 bg-${facility.color} rounded-full`}></div>
                        <span className="text-slate-gray text-xs">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <div className={`h-1 w-12 bg-${facility.color} rounded-full`} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Health & Wellness */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 mb-4">
              <FaFirstAid className="text-primary-coral text-3xl" />
              <h2 className="text-4xl font-bold text-navy-blue">
                Health & Wellness
              </h2>
            </div>
            <p className="text-lg text-slate-gray max-w-2xl mx-auto">
              Facilities designed to promote physical health, hygiene, and overall well-being.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {healthFacilities.map((facility, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-white to-blue-50 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-blue-100 p-6 text-center"
              >
                <div className={`text-${facility.color} mb-4 flex justify-center`}>
                  {facility.icon}
                </div>
                <h3 className="text-xl font-bold text-navy-blue mb-3">
                  {facility.title}
                </h3>
                <p className="text-slate-gray text-sm mb-4">
                  {facility.description}
                </p>
                <div className="space-y-2">
                  {facility.features.map((feature, idx) => (
                    <div key={idx} className="text-slate-gray text-xs">• {feature}</div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Outdoor Facilities */}
      <section className="py-16 bg-gradient-to-br from-primary-teal/10 to-primary-coral/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 mb-4">
              <FaTree className="text-forest-green text-3xl" />
              <h2 className="text-4xl font-bold text-navy-blue">
                Outdoor Facilities
              </h2>
            </div>
            <p className="text-lg text-slate-gray max-w-2xl mx-auto">
              Safe and stimulating outdoor spaces for physical activity and nature exploration.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {outdoorFacilities.map((facility, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-blue-100 overflow-hidden"
              >
                <div className={`bg-gradient-to-r from-${facility.color}/20 to-white p-6 text-center`}>
                  <div className={`text-${facility.color} mb-4 flex justify-center`}>
                    {facility.icon}
                  </div>
                  <h3 className="text-xl font-bold text-navy-blue mb-2">
                    {facility.title}
                  </h3>
                  <p className="text-slate-gray text-sm mb-4">
                    {facility.description}
                  </p>
                </div>
                <div className="p-4 bg-blue-50">
                  <div className="space-y-2">
                    {facility.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <div className={`w-1.5 h-1.5 bg-${facility.color} rounded-full`}></div>
                        <span className="text-slate-gray text-xs">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Facilities */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 mb-4">
              <FaWifi className="text-primary-teal text-3xl" />
              <h2 className="text-4xl font-bold text-navy-blue">
                Technology Integration
              </h2>
            </div>
            <p className="text-lg text-slate-gray max-w-2xl mx-auto">
              Modern technology seamlessly integrated for enhanced learning and communication.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {technologyFacilities.map((facility, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-white to-blue-50 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-blue-100 p-6"
              >
                <div className={`bg-${facility.color}/10 p-4 rounded-xl w-fit mb-6`}>
                  <div className={`text-${facility.color}`}>
                    {facility.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-navy-blue mb-3">
                  {facility.title}
                </h3>
                <p className="text-slate-gray text-sm mb-4">
                  {facility.description}
                </p>
                <div className="space-y-2">
                  {facility.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <FaStar className="text-sunshine-yellow text-xs mt-1" />
                      <span className="text-slate-gray text-xs">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

     
      {/* Facility Standards */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-navy-blue mb-4">
              Our Facility Standards
            </h2>
            <p className="text-lg text-slate-gray max-w-2xl mx-auto">
              Maintaining the highest standards in all our facilities
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Regular Maintenance',
                description: 'Daily, weekly, and monthly maintenance schedules for all facilities',
                icon: '🔧'
              },
              {
                title: 'Safety Audits',
                description: 'Monthly safety inspections and emergency drill practices',
                icon: '📋'
              },
              {
                title: 'Hygiene Protocols',
                description: 'Strict cleaning and sanitization routines throughout the day',
                icon: '🧼'
              }
            ].map((standard, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-white to-blue-50 p-6 rounded-2xl shadow-lg border border-blue-100 text-center"
              >
                <div className="text-4xl mb-4">{standard.icon}</div>
                <h3 className="text-xl font-bold text-navy-blue mb-3">
                  {standard.title}
                </h3>
                <p className="text-slate-gray text-sm">
                  {standard.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Facilities;