import React from 'react';
import { 
  FaBullseye, FaHandsHelping, FaAward, FaUsers, 
  FaHeart, FaLightbulb, FaShieldAlt, FaGraduationCap,
  FaMapMarkerAlt, FaPhone, FaEnvelope, FaArrowRight,
  FaQuoteLeft, FaChild, FaSchool, FaCalendarAlt, FaBus,
  FaClock, FaUserGraduate, FaBaby
} from 'react-icons/fa';
import { FaBrain, FaLeaf } from 'react-icons/fa6';

const About = () => {
  // Core Values
  const coreValues = [
    {
      icon: <FaChild className="text-3xl" />,
      title: 'Age-Appropriate Care',
      description: 'Specialized programs for 1.5 to 6 years',
      color: 'primary-teal'
    },
    {
      icon: <FaBus className="text-3xl" />,
      title: 'Safe Transportation',
      description: 'Reliable transport services for all students',
      color: 'primary-coral'
    },
    {
      icon: <FaGraduationCap className="text-3xl" />,
      title: 'Quality Education',
      description: 'Comprehensive early education programs',
      color: 'forest-green'
    },
    {
      icon: <FaShieldAlt className="text-3xl" />,
      title: 'Child Safety First',
      description: 'Secure environment with 24/7 monitoring',
      color: 'sky-blue'
    }
  ];

  // Achievements
  const achievements = [
    { icon: <FaAward />, title: 'Best Day Care 2023', description: 'Child Care Excellence Award' },
    { icon: <FaUsers />, title: '500+ Children', description: 'Currently enrolled in our programs' },
    { icon: <FaClock />, title: '10+ Years', description: 'Experience in early childhood care' },
    { icon: <FaUserGraduate />, title: '4 Programs', description: 'Toddlers to UKG complete journey' }
  ];

  // Age Programs
  const agePrograms = [
    {
      age: '1.5 - 3 Years',
      program: 'Toddlers Program',
      description: 'Basic skills development, socialization, and play-based learning',
      icon: <FaBaby className="text-2xl" />,
      color: 'primary-teal'
    },
    {
      age: '3 - 4 Years',
      program: 'Pre-Kg Program',
      description: 'Foundational education, cognitive development',
      icon: <FaChild className="text-2xl" />,
      color: 'primary-coral'
    },
    {
      age: '4 - 5 Years',
      program: 'LKG Program',
      description: 'Structured learning, skill enhancement',
      icon: <FaGraduationCap className="text-2xl" />,
      color: 'mint-green'
    },
    {
      age: '5 - 6 Years',
      program: 'UKG Program',
      description: 'School readiness, advanced curriculum',
      icon: <FaSchool className="text-2xl" />,
      color: 'sky-blue'
    }
  ];

  // Facilities
  const facilities = [
    {
      name: 'Day Care Center',
      description: 'Full-day care with age-appropriate activities',
      features: ['Nap rooms', 'Play areas', 'Feeding facilities'],
      image: 'https://allonehealth.com/wp-content/uploads/2022/07/iStock-1358014313-scaled-1.jpg'
    },
    {
      name: 'Transport Fleet',
      description: 'Safe and reliable transportation services',
      features: ['GPS tracking', 'Trained attendants', 'Regular maintenance'],
      image: 'https://cmsv2-assets.apptegy.net/uploads/5903/file/3854396/3dc7b4c7-dcc9-4dcb-af78-4957ac6dbb23.jpeg'
    },
    {
      name: 'Learning Spaces',
      description: 'Age-specific classrooms and play areas',
      features: ['Smart classrooms', 'Outdoor play', 'Activity zones'],
      image: 'https://images.pexels.com/photos/3992949/pexels-photo-3992949.jpeg?cs=srgb&dl=pexels-cdc-library-3992949.jpg&fm=jpg'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50">
      {/* Header Section */}
      <section className="py-12 bg-gradient-to-r from-navy-blue to-primary-teal text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl text-navy-blue md:text-5xl font-bold mb-4">
            About <span className="text-sunshine-yellow">iTECH Eurokids</span>
          </h1>
          <p className="text-xl text-sky-blue max-w-3xl mx-auto">
            Quality day care and preschool education for children aged 1.5 to 6 years.
            Comprehensive programs with safe transportation services since 2010.
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://cmsv2-assets.apptegy.net/uploads/5903/file/3854396/3dc7b4c7-dcc9-4dcb-af78-4957ac6dbb23.jpeg" 
                  alt="Children at day care" 
                  className="w-full h-[500px] object-cover"
                  loading="lazy"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6 text-white">
                  <div className="flex items-center gap-3">
                    <FaCalendarAlt className="text-primary-coral" />
                    <span className="font-bold">Since 2010</span>
                  </div>
                  <p className="text-sm mt-2">10+ years of child care excellence</p>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-navy-blue mb-6">
                Our Child Care Philosophy
              </h2>
              <p className="text-lg text-slate-gray mb-6 leading-relaxed">
                At iTECH Eurokids, we believe that the early years are the most crucial 
                for a child's development. We provide a safe, nurturing environment where 
                children from 1.5 to 6 years can learn, grow, and develop essential skills.
              </p>
              <p className="text-lg text-slate-gray mb-8 leading-relaxed">
                Our comprehensive programs include day care for toddlers, preschool 
                education from Pre-Kg to UKG, and reliable transportation services. 
                We combine modern educational approaches with traditional care values 
                to ensure every child receives the best start in life.
              </p>
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center p-4 bg-primary-teal/10 rounded-lg">
                  <div className="text-3xl font-bold text-primary-teal">1.5-6</div>
                  <div className="text-slate-gray text-sm">Age Range</div>
                </div>
                <div className="text-center p-4 bg-primary-coral/10 rounded-lg">
                  <div className="text-3xl font-bold text-primary-coral">4</div>
                  <div className="text-slate-gray text-sm">Programs</div>
                </div>
                <div className="text-center p-4 bg-mint-green/10 rounded-lg">
                  <div className="text-3xl font-bold text-mint-green">24/7</div>
                  <div className="text-slate-gray text-sm">Security</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-16 bg-gradient-to-b from-white to-blue-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-primary-teal hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="bg-primary-teal/10 p-4 rounded-xl w-fit mb-6">
                <FaBullseye className="text-primary-teal text-3xl" />
              </div>
              <h3 className="text-2xl font-bold text-navy-blue mb-4">Our Mission</h3>
              <p className="text-slate-gray">
                To provide quality day care and preschool education for children 
                aged 1.5 to 6 years in a safe, nurturing environment with reliable 
                transportation services.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-primary-coral hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="bg-primary-coral/10 p-4 rounded-xl w-fit mb-6">
                <FaLightbulb className="text-primary-coral text-3xl" />
              </div>
              <h3 className="text-2xl font-bold text-navy-blue mb-4">Our Vision</h3>
              <p className="text-slate-gray">
                To be the preferred choice for parents seeking comprehensive 
                early childhood care and education with convenient transportation 
                solutions.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-mint-green hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="bg-mint-green/10 p-4 rounded-xl w-fit mb-6">
                <FaHeart className="text-mint-green text-3xl" />
              </div>
              <h3 className="text-2xl font-bold text-navy-blue mb-4">Our Commitment</h3>
              <p className="text-slate-gray">
                We commit to providing age-appropriate care, quality education, 
                and safe transportation for every child entrusted to us.
              </p>
            </div>
          </div>

          {/* Core Values */}
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-navy-blue mb-4">
              Our <span className="text-primary-teal">Core Values</span>
            </h2>
            <p className="text-lg text-slate-gray max-w-2xl mx-auto">
              The principles that guide everything we do at iTECH Eurokids
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreValues.map((value, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-blue-100 text-center"
              >
                <div className={`bg-${value.color}/10 p-4 rounded-xl w-fit mx-auto mb-6`}>
                  <div className={`text-${value.color}`}>
                    {value.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-navy-blue mb-3">
                  {value.title}
                </h3>
                <p className="text-slate-gray text-sm">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Age Programs */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-navy-blue mb-4">
              Our <span className="text-primary-coral">Age Programs</span>
            </h2>
            <p className="text-lg text-slate-gray max-w-2xl mx-auto">
              Structured programs designed for each developmental stage
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {agePrograms.map((program, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-white to-blue-50 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-blue-100 text-center"
              >
                <div className={`text-${program.color} mb-4 flex justify-center`}>
                  {program.icon}
                </div>
                <div className="text-lg font-semibold text-primary-coral mb-2">
                  {program.age}
                </div>
                <h3 className="text-xl font-bold text-navy-blue mb-3">
                  {program.program}
                </h3>
                <p className="text-slate-gray text-sm">
                  {program.description}
                </p>
                <div className={`h-1 w-12 mt-4 bg-${program.color} rounded-full mx-auto`} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-16 bg-gradient-to-r from-primary-teal/10 to-primary-coral/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-navy-blue mb-4">
              Our <span className="text-primary-coral">Achievements</span>
            </h2>
            <p className="text-lg text-slate-gray">
              Milestones that make us proud
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 text-center hover:-translate-y-1"
              >
                <div className="text-primary-teal text-3xl mb-4 flex justify-center">
                  {achievement.icon}
                </div>
                <h3 className="text-xl font-bold text-navy-blue mb-2">
                  {achievement.title}
                </h3>
                <p className="text-slate-gray text-sm">
                  {achievement.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-navy-blue mb-4">
              Our <span className="text-primary-teal">Facilities</span>
            </h2>
            <p className="text-lg text-slate-gray max-w-2xl mx-auto">
              State-of-the-art facilities designed for young learners
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {facilities.map((facility, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-blue-100"
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={facility.image} 
                    alt={facility.name}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-navy-blue mb-2">{facility.name}</h3>
                  <p className="text-slate-gray text-sm mb-4">{facility.description}</p>
                  <div className="space-y-2">
                    {facility.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-primary-teal rounded-full"></div>
                        <span className="text-slate-gray text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gradient-to-b from-white to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-navy-blue mb-4">
              Why <span className="text-primary-teal">Choose iTECH Eurokids?</span>
            </h2>
            <p className="text-lg text-slate-gray max-w-2xl mx-auto">
              What makes us different from other day care centers
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-primary-teal/10 p-3 rounded-lg">
                  <FaCalendarAlt className="text-primary-teal text-2xl" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-navy-blue mb-2">Complete Age Range</h3>
                  <p className="text-slate-gray">Programs for children from 1.5 to 6 years</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-primary-coral/10 p-3 rounded-lg">
                  <FaBus className="text-primary-coral text-2xl" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-navy-blue mb-2">Transportation Services</h3>
                  <p className="text-slate-gray">Safe and reliable transportation available</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-mint-green/10 p-3 rounded-lg">
                  <FaShieldAlt className="text-mint-green text-2xl" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-navy-blue mb-2">Safety First</h3>
                  <p className="text-slate-gray">24/7 security, CCTV surveillance, and trained staff</p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-sky-blue/10 p-3 rounded-lg">
                  <FaBrain className="text-sky-blue text-2xl" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-navy-blue mb-2">Holistic Development</h3>
                  <p className="text-slate-gray">Focus on cognitive, emotional, social, and physical growth</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-sunshine-yellow/10 p-3 rounded-lg">
                  <FaGraduationCap className="text-sunshine-yellow text-2xl" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-navy-blue mb-2">Quality Education</h3>
                  <p className="text-slate-gray">Comprehensive curriculum from Pre-Kg to UKG</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-lavender/10 p-3 rounded-lg">
                  <FaLeaf className="text-lavender text-2xl" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-navy-blue mb-2">Nurturing Environment</h3>
                  <p className="text-slate-gray">Warm, caring atmosphere with trained caregivers</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      
    </div>
  );
};

export default About;