import React, { useState, useEffect, useRef } from 'react';
import { 
  FaPlay, FaPause, FaChevronLeft, FaChevronRight, FaQuoteLeft, 
  FaGraduationCap, FaLightbulb, FaUsers, FaHeart, FaStar, 
  FaArrowRight, FaDesktop, FaPalette, FaMusic, FaTree, 
  FaFlask, FaBook, FaBalanceScale, FaCode, FaRobot, 
  FaTabletAlt, FaShieldAlt, FaChartLine, FaBus, FaChild
} from 'react-icons/fa';
import { FaSchool, FaBrain } from 'react-icons/fa6';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const marqueeRef = useRef(null);

  // Carousel Data
  const carouselSlides = [
    {
      id: 1,
      title: 'Quality Day Care & Preschool Programs',
      subtitle: 'Ages 1.5 to 6 Years | Transportation Available',
      description: 'Nurturing young minds in a safe, technology-enhanced environment',
      bgColor: 'bg-primary-teal',
      image: 'https://images.pexels.com/photos/3992949/pexels-photo-3992949.jpeg?cs=srgb&dl=pexels-cdc-library-3992949.jpg&fm=jpg',
    },
    {
      id: 2,
      title: 'Toddlers Program',
      subtitle: 'For Ages 1.5 to 3 Years',
      description: 'Safe, nurturing spaces for our youngest learners to explore and grow',
      bgColor: 'bg-primary-coral',
      image: 'https://www.waterburybridgetosuccess.org/wp-content/uploads/2016/10/event6.jpg',
    },
    {
      id: 3,
      title: 'Pre-Kg Program',
      subtitle: 'For Ages 3 to 4 Years',
      description: 'Building foundational skills through play-based learning',
      bgColor: 'bg-navy-blue',
      image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1600&q=80',
    },
    {
      id: 4,
      title: 'Complete Early Education',
      subtitle: 'LKG (4-5 Years) & UKG (5-6 Years)',
      description: 'Preparing children for formal schooling with advanced curriculum',
      bgColor: 'bg-mint-green',
      image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1600&q=80',
    },
  ];

  // Marquee Cards Data
  const marqueeCards = [
    {
      id: 1,
      title: 'Day Care Services',
      description: 'Full day care for children 1.5 to 6 years',
      icon: <FaChild className="text-3xl" />,
      color: 'primary-teal',
      image: 'https://cmsv2-assets.apptegy.net/uploads/5903/file/3854396/3dc7b4c7-dcc9-4dcb-af78-4957ac6dbb23.jpeg'
    },
    {
      id: 2,
      title: 'Transportation',
      description: 'Safe and reliable bus services available',
      icon: <FaBus className="text-3xl" />,
      color: 'primary-coral',
      image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=400&q=80'
    },
    {
      id: 3,
      title: 'Toddlers Program',
      description: 'Special care for 1.5 to 3 year olds',
      icon: <FaChild className="text-3xl" />,
      color: 'mint-green',
      image: 'https://images.pexels.com/photos/3992949/pexels-photo-3992949.jpeg?cs=srgb&dl=pexels-cdc-library-3992949.jpg&fm=jpg'
    },
    {
      id: 4,
      title: 'Pre-Kg Learning',
      description: 'Age-appropriate curriculum for 3-4 years',
      icon: <FaBook className="text-3xl" />,
      color: 'forest-green',
      image: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=400&q=80'
    },
    {
      id: 5,
      title: 'LKG Program',
      description: 'Comprehensive learning for 4-5 years',
      icon: <FaGraduationCap className="text-3xl" />,
      color: 'sky-blue',
      image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=400&q=80'
    },
    {
      id: 6,
      title: 'UKG Program',
      description: 'School readiness for 5-6 years',
      icon: <FaSchool className="text-3xl" />,
      color: 'lavender',
      image: 'https://www.waterburybridgetosuccess.org/wp-content/uploads/2016/10/event6.jpg'
    },
    {
      id: 7,
      title: 'Smart Classrooms',
      description: 'Technology-integrated learning spaces',
      icon: <FaDesktop className="text-3xl" />,
      color: 'soft-pink',
      image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=400&q=80'
    },
  ];

  // Features Data
  const features = [
    {
      icon: <FaChild className="text-3xl" />,
      title: 'Age-Specific Programs',
      description: 'Specialized care for 1.5 to 6 years with structured curriculum',
      color: 'primary-teal'
    },
    {
      icon: <FaBus className="text-3xl" />,
      title: 'Safe Transportation',
      description: 'Reliable bus services with GPS tracking and trained attendants',
      color: 'primary-coral'
    },
    {
      icon: <FaShieldAlt className="text-3xl" />,
      title: 'Secure Environment',
      description: '24/7 CCTV, secure premises, and trained staff',
      color: 'mint-green'
    },
    {
      icon: <FaHeart className="text-3xl" />,
      title: 'Nurturing Care',
      description: 'Trained caregivers and child development experts',
      color: 'sky-blue'
    },
  ];

  // Testimonials Data
  const testimonials = [
    {
      name: 'Priya Sharma',
      role: 'Parent of Aarav (2 years)',
      text: 'The day care services are excellent! My toddler feels safe and happy here.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?auto=format&fit=crop&w=150&q=80'
    },
    {
      name: 'Rajesh Kumar',
      role: 'Parent of Anaya (4 years)',
      text: 'The transportation service is a lifesaver. Safe and punctual!',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80'
    },
    {
      name: 'Sneha Patel',
      role: 'Parent of Vihaan (5 years)',
      text: 'The UKG program perfectly prepared my child for formal schooling.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&q=80'
    },
  ];

  // Age Programs Features
  const agePrograms = [
    {
      age: '1.5 - 3 Years',
      program: 'Toddlers Program',
      description: 'Basic skills development and socialization',
      icon: '👶'
    },
    {
      age: '3 - 4 Years',
      program: 'Pre-Kg Program',
      description: 'Foundational learning and play-based education',
      icon: '🧩'
    },
    {
      age: '4 - 5 Years',
      program: 'LKG (Monti)',
      description: 'Structured learning and skill development',
      icon: '📚'
    },
    {
      age: '5 - 6 Years',
      program: 'UKG (Monti)',
      description: 'School readiness and advanced learning',
      icon: '🎓'
    }
  ];

  // Carousel Controls
  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselSlides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isPlaying, carouselSlides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselSlides.length) % carouselSlides.length);
  };

  // Marquee Animation
  useEffect(() => {
    if (!marqueeRef.current) return;

    const marquee = marqueeRef.current;
    let animationId;
    let position = 0;
    const speed = 0.5;

    const animate = () => {
      position -= speed;
      if (position <= -marquee.scrollWidth / 2) {
        position = 0;
      }
      marquee.style.transform = `translateX(${position}px)`;
      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => cancelAnimationFrame(animationId);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50">
      {/* Full Width Carousel */}
      <section className="relative h-[600px] overflow-hidden">
        {carouselSlides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30 z-10" />
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 z-20 flex items-center">
              <div className="container mx-auto px-4">
                <div className="max-w-2xl">
                  <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 animate-fadeIn">
                    {slide.title}
                  </h1>
                  <h2 className="text-2xl md:text-3xl font-semibold text-sunshine-yellow mb-6">
                    {slide.subtitle}
                  </h2>
                  <p className="text-xl text-white mb-8">
                    {slide.description}
                  </p>
                  <button className="bg-primary-coral hover:bg-primary-coral/90 text-white px-8 py-3 rounded-full text-lg font-semibold hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-2">
                    <FaGraduationCap />
                    Enroll Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Carousel Controls */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-30 flex items-center gap-4">
          <button
            onClick={prevSlide}
            className="bg-white/20 hover:bg-white/30 p-3 rounded-full backdrop-blur-sm transition-all duration-300 hover:scale-110"
          >
            <FaChevronLeft className="text-white" />
          </button>
          
          <div className="flex gap-2">
            {carouselSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide ? 'bg-primary-coral w-8' : 'bg-white/50'
                }`}
              />
            ))}
          </div>

          <button
            onClick={nextSlide}
            className="bg-white/20 hover:bg-white/30 p-3 rounded-full backdrop-blur-sm transition-all duration-300 hover:scale-110"
          >
            <FaChevronRight className="text-white" />
          </button>
        </div>
      </section>

      {/* About iTECH euroKids */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-navy-blue mb-6">
                Welcome to <span className="text-primary-teal">iTECH Eurokids</span>
              </h2>
              <p className="text-lg text-slate-gray mb-6 leading-relaxed">
                At iTECH Eurokids, we provide quality day care and preschool education for 
                children aged 1.5 to 6 years. Our comprehensive programs include Toddlers 
                (1.5-3 years), Pre-Kg (3-4 years), LKG (4-5 years), and UKG (5-6 years) 
                with convenient transportation services.
              </p>
              <p className="text-lg text-slate-gray mb-8 leading-relaxed">
                We combine modern educational approaches with traditional values to create 
                a nurturing environment where children can learn, grow, and develop essential 
                skills for their future.
              </p>
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="flex items-center gap-3">
                  <div className="bg-primary-teal/10 p-3 rounded-lg">
                    <FaSchool className="text-primary-teal text-2xl" />
                  </div>
                  <div>
                    <p className="font-bold text-navy-blue text-lg">1.5 - 6 Years</p>
                    <p className="text-slate-gray text-sm">Age Range</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-primary-coral/10 p-3 rounded-lg">
                    <FaBus className="text-primary-coral text-2xl" />
                  </div>
                  <div>
                    <p className="font-bold text-navy-blue text-lg">Transport</p>
                    <p className="text-slate-gray text-sm">Available</p>
                  </div>
                </div>
              </div>
              <button className="bg-primary-teal hover:bg-primary-teal/90 text-white px-6 py-3 rounded-full font-semibold hover:scale-105 transition-all duration-300 flex items-center gap-2">
                View Our Programs
                <FaArrowRight />
              </button>
            </div>
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://www.waterburybridgetosuccess.org/wp-content/uploads/2016/10/event6.jpg" 
                  alt="Children at day care" 
                  className="w-full h-[400px] object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                  <div className="p-6 text-white">
                    <div className="flex items-center gap-2 mb-2">
                      <FaChild className="text-primary-coral" />
                      <span className="font-bold">Safe & Nurturing Environment</span>
                    </div>
                    <p className="text-sm">24/7 security and trained caregivers</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Age Programs Section */}
      <section className="py-16 bg-gradient-to-br from-primary-teal/10 to-primary-coral/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-navy-blue mb-4">
              Our Age-Specific Programs
            </h2>
            <p className="text-lg text-slate-gray max-w-2xl mx-auto">
              Structured programs designed for each developmental stage
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {agePrograms.map((program, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-blue-100 text-center"
              >
                <div className="text-4xl mb-4">{program.icon}</div>
                <div className="text-lg font-semibold text-primary-coral mb-2">
                  {program.age}
                </div>
                <h3 className="text-xl font-bold text-navy-blue mb-3">
                  {program.program}
                </h3>
                <p className="text-slate-gray text-sm">
                  {program.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Marquee Slider Section */}
      <section className="py-12 bg-gradient-to-r from-navy-blue to-navy-blue/90 overflow-hidden">
        <div className="container mx-auto px-4 mb-8">
          <h2 className="text-3xl font-bold text-navy-blue text-center mb-2">
            Our Services & Facilities
          </h2>
          <p className="text-sky-blue text-center">
            Everything we offer for your child's complete development
          </p>
        </div>
        
        <div className="relative overflow-hidden py-8">
          <div 
            ref={marqueeRef}
            className="flex gap-6"
            style={{ willChange: 'transform' }}
          >
            {[...marqueeCards, ...marqueeCards].map((card, index) => (
              <div
                key={`${card.id}-${index}`}
                className="flex-shrink-0 w-80 bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group"
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={card.image} 
                    alt={card.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className={`absolute top-4 left-4 bg-${card.color} text-white p-3 rounded-full shadow-lg`}>
                    {card.icon}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-navy-blue mb-2">{card.title}</h3>
                  <p className="text-slate-gray text-sm mb-4">{card.description}</p>
                  <div className={`h-1 w-12 bg-${card.color} rounded-full`} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gradient-to-b from-white to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-navy-blue mb-4">
              Why Choose iTECH Eurokids?
            </h2>
            <p className="text-lg text-slate-gray max-w-2xl mx-auto">
              Our commitment to excellence in child care and early education
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-blue-100"
              >
                <div className={`bg-${feature.color}/10 p-4 rounded-xl w-fit mb-6`}>
                  <div className={`text-${feature.color}`}>
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-navy-blue mb-3">
                  {feature.title}
                </h3>
                <p className="text-slate-gray">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Transportation Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://www.lystloc.com/blog/wp-content/uploads/2018/12/How-to-make-the-parents-feel-secured-about-school-transport-system.jpg" 
                  alt="School transportation" 
                  className="w-full h-[500px] object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-teal/20 to-transparent" />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-4xl font-bold text-navy-blue mb-6">
                Safe Transportation Services
              </h2>
              <p className="text-lg text-slate-gray mb-8 leading-relaxed">
                We provide reliable and safe transportation services for all our students. 
                Our buses are equipped with GPS tracking, CCTV cameras, and trained 
                attendants to ensure your child's safety during transit.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                {[
                  {
                    icon: <FaShieldAlt className="text-xl" />,
                    title: 'GPS Tracking',
                    description: 'Real-time location tracking for parents'
                  },
                  {
                    icon: <FaUsers className="text-xl" />,
                    title: 'Trained Attendants',
                    description: 'Caregivers accompany every trip'
                  },
                  {
                    icon: <FaBus className="text-xl" />,
                    title: 'Safe Vehicles',
                    description: 'Regularly maintained and inspected'
                  },
                  {
                    icon: <FaChartLine className="text-xl" />,
                    title: 'Route Optimization',
                    description: 'Efficient and safe routes planned'
                  }
                ].map((feature, index) => (
                  <div key={index} className="flex items-start gap-3 group">
                    <div className={`bg-${index % 2 === 0 ? 'primary-teal' : 'primary-coral'}/10 p-3 rounded-lg group-hover:scale-110 transition-all duration-300`}>
                      <div className={`text-${index % 2 === 0 ? 'primary-teal' : 'primary-coral'}`}>
                        {feature.icon}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-navy-blue mb-1">{feature.title}</h4>
                      <p className="text-slate-gray text-sm">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

            {/* Gallery Section */}
      <section className="py-16 bg-gradient-to-b from-white to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-navy-blue mb-4">
              Our Gallery
            </h2>
            <p className="text-lg text-slate-gray max-w-2xl mx-auto">
              Capturing joyful moments of learning, play, and growth at iTECH Eurokids
            </p>
          </div>

          {/* Gallery Marquee Container */}
          <div className="relative overflow-hidden py-8">
            <div className="flex gap-6 animate-scroll-left">
              {/* First Set */}
              {[
                {
                  id: 1,
                  image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80',
                  title: 'Learning Activities',
                  description: 'Interactive learning sessions'
                },
                {
                  id: 2,
                  image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80',
                  title: 'Play Area',
                  description: 'Safe and fun play spaces'
                },
                {
                  id: 3,
                  image: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w-800&q=80',
                  title: 'Art & Craft',
                  description: 'Creative expression time'
                },
                {
                  id: 4,
                  image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=800&q=80',
                  title: 'Group Activities',
                  description: 'Team building exercises'
                },
                {
                  id: 5,
                  image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=800&q=80',
                  title: 'Smart Classrooms',
                  description: 'Technology integrated learning'
                },
                {
                  id: 6,
                  image: 'https://images.pexels.com/photos/3992949/pexels-photo-3992949.jpeg?cs=srgb&dl=pexels-cdc-library-3992949.jpg&fm=jpg',
                  title: 'Day Care',
                  description: 'Comfortable resting areas'
                }
              ].map((item, index) => (
                <div
                  key={`gallery-${item.id}`}
                  className="flex-shrink-0 w-72 md:w-80 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 group"
                >
                  <div className="relative h-56 overflow-hidden">
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      loading="lazy"
                    />
                    {/* <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                      <h4 className="font-bold text-lg mb-1">{item.title}</h4>
                      <p className="text-sm text-blue-100">{item.description}</p>
                    </div> */}
                  </div>
                  {/* <div className="bg-white p-4">
                    <h4 className="font-bold text-navy-blue">{item.title}</h4>
                    <p className="text-slate-gray text-sm">{item.description}</p>
                  </div> */}
                </div>
              ))}

              {/* Duplicate Set for Continuous Scroll */}
              {[
                {
                  id: 1,
                  image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80',
                  title: 'Learning Activities',
                  description: 'Interactive learning sessions'
                },
                {
                  id: 2,
                  image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80',
                  title: 'Play Area',
                  description: 'Safe and fun play spaces'
                },
                {
                  id: 3,
                  image: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w-800&q=80',
                  title: 'Art & Craft',
                  description: 'Creative expression time'
                },
                {
                  id: 4,
                  image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=800&q=80',
                  title: 'Group Activities',
                  description: 'Team building exercises'
                },
                {
                  id: 5,
                  image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=800&q=80',
                  title: 'Smart Classrooms',
                  description: 'Technology integrated learning'
                },
                {
                  id: 6,
                  image: 'https://images.pexels.com/photos/3992949/pexels-photo-3992949.jpeg?cs=srgb&dl=pexels-cdc-library-3992949.jpg&fm=jpg',
                  title: 'Day Care',
                  description: 'Comfortable resting areas'
                }
              ].map((item, index) => (
                <div
                  key={`gallery-duplicate-${item.id}`}
                  className="flex-shrink-0 w-72 md:w-80 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 group"
                >
                  <div className="relative h-56 overflow-hidden">
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                   
                  </div>
                 
                </div>
              ))}
            </div>
          </div>

          {/* Add CSS for the animation */}
          <style jsx>{`
            @keyframes scroll-left {
              0% {
                transform: translateX(0);
              }
              100% {
                transform: translateX(-50%);
              }
            }
            .animate-scroll-left {
              animation: scroll-left 40s linear infinite;
              display: flex;
              width: max-content;
            }
            .animate-scroll-left:hover {
              animation-play-state: paused;
            }
          `}</style>

          
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gradient-to-br from-primary-teal/10 to-primary-coral/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-navy-blue mb-4">
              What Parents Say
            </h2>
            <p className="text-lg text-slate-gray">
              Trusted by families for quality day care and education
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-2xl shadow-lg border border-blue-100 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-6">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-14 h-14 rounded-full object-cover"
                    loading="lazy"
                  />
                  <div>
                    <h4 className="font-bold text-navy-blue">{testimonial.name}</h4>
                    <p className="text-primary-coral text-sm">{testimonial.role}</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-2 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FaStar key={i} className="text-sunshine-yellow" />
                  ))}
                </div>
                
                <div className="mb-6">
                  <FaQuoteLeft className="text-primary-teal/30 text-3xl mb-4" />
                  <p className="text-slate-gray italic">
                    "{testimonial.text}"
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      
    </div>
  );
};

export default Home;