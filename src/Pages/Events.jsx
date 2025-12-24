import React, { useState } from 'react';
import { 
  FaCalendarAlt, FaMapMarkerAlt, FaClock, FaArrowRight,
  FaArrowLeft
} from 'react-icons/fa';

const Events = () => {
  const [activeEvent, setActiveEvent] = useState(0);

  // Featured Events Data
  const featuredEvents = [
    {
      id: 1,
      title: 'Annual Day Celebration',
      date: 'December 15, 2024',
      time: '5:00 PM - 7:00 PM',
      location: 'School Auditorium',
      description: 'A grand celebration showcasing our students\' talents through dance, drama, and music performances. Parents and families are invited to witness the wonderful journey of learning and growth.',
      image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1200&q=80'
    },
    {
      id: 2,
      title: 'Sports Day Extravaganza',
      date: 'January 20, 2025',
      time: '9:00 AM - 12:00 PM',
      location: 'School Playground',
      description: 'Fun-filled sports activities designed for different age groups. Children participate in various races, games, and team activities promoting physical fitness and teamwork.',
      image: 'https://images.unsplash.com/photo-1549060279-7e168fce7090?auto=format&fit=crop&w=1200&q=80'
    },
    {
      id: 3,
      title: 'Science Fair & Exhibition',
      date: 'February 10, 2025',
      time: '10:00 AM - 2:00 PM',
      location: 'School Campus',
      description: 'Young scientists showcase their innovative projects and experiments. A platform for children to explore scientific concepts through hands-on projects and demonstrations.',
      image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=1200&q=80'
    },
    {
      id: 4,
      title: 'Art & Craft Exhibition',
      date: 'March 5, 2025',
      time: '11:00 AM - 4:00 PM',
      location: 'Creative Arts Studio',
      description: 'Display of creative artworks by our young artists. Parents can purchase their child\'s artwork and support their creative journey.',
      image: 'https://images.unsplash.com/photo-1579783928621-7a13d66a62d1?auto=format&fit=crop&w=1200&q=80'
    }
  ];

  // Upcoming Events Data
  const upcomingEvents = [
    {
      id: 1,
      title: 'Parent-Teacher Meeting',
      date: 'November 25, 2024',
      time: '2:00 PM - 5:00 PM',
      description: 'Individual meetings to discuss your child\'s progress and development.'
    },
    {
      id: 2,
      title: 'Children\'s Day Celebration',
      date: 'November 14, 2024',
      time: '9:00 AM - 12:00 PM',
      description: 'Special activities and games to celebrate Children\'s Day.'
    },
    {
      id: 3,
      title: 'Thanksgiving Special',
      date: 'November 28, 2024',
      time: '10:00 AM - 11:30 AM',
      description: 'Gratitude activities and storytelling sessions.'
    },
    {
      id: 4,
      title: 'Music & Movement Workshop',
      date: 'December 5, 2024',
      time: '3:00 PM - 4:30 PM',
      description: 'Interactive session on rhythm and movement for toddlers.'
    },
    {
      id: 5,
      title: 'Winter Carnival',
      date: 'December 20, 2024',
      time: '4:00 PM - 7:00 PM',
      description: 'Fun games, food stalls, and entertainment for families.'
    },
    {
      id: 6,
      title: 'Reading Week',
      date: 'January 6-10, 2025',
      time: 'Daily Activities',
      description: 'Special storytelling sessions and reading activities.'
    },
    {
      id: 7,
      title: 'Nature Walk',
      date: 'January 15, 2025',
      time: '9:30 AM - 11:30 AM',
      description: 'Educational nature exploration for older children.'
    },
    {
      id: 8,
      title: 'Art Workshop',
      date: 'January 22, 2025',
      time: '2:00 PM - 3:30 PM',
      description: 'Creative painting session for different age groups.'
    }
  ];

  const currentEvent = featuredEvents[activeEvent];

  const nextEvent = () => {
    setActiveEvent((prev) => (prev + 1) % featuredEvents.length);
  };

  const prevEvent = () => {
    setActiveEvent((prev) => (prev - 1 + featuredEvents.length) % featuredEvents.length);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50">
      {/* Header Section */}
      <section className="py-12 bg-gradient-to-r from-navy-blue to-primary-teal">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl text-navy-blue md:text-5xl font-bold mb-4">
            Events
          </h1>
          <p className="text-xl text-sky-blue max-w-3xl mx-auto">
            Celebrating learning through memorable events and special activities
          </p>
        </div>
      </section>

      {/* Featured Events Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-navy-blue mb-4">
              Featured Events
            </h2>
            <p className="text-lg text-slate-gray max-w-2xl mx-auto">
              Major events that celebrate our children's achievements and talents
            </p>
          </div>

          {/* Featured Event Card */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-white to-blue-50 rounded-2xl shadow-xl overflow-hidden border border-blue-100">
              {/* Event Image */}
              <div className="relative h-64 md:h-80">
                <img 
                  src={currentEvent.image} 
                  alt={currentEvent.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                
                {/* Navigation Arrows */}
                <button
                  onClick={prevEvent}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 p-3 rounded-full backdrop-blur-sm transition-all duration-300"
                >
                  <FaArrowLeft className="text-white" />
                </button>
                <button
                  onClick={nextEvent}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 p-3 rounded-full backdrop-blur-sm transition-all duration-300"
                >
                  <FaArrowRight className="text-white" />
                </button>
                
                {/* Event Title Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                    {currentEvent.title}
                  </h3>
                </div>
              </div>

              {/* Event Details */}
              <div className="p-6 md:p-8">
                <div className="grid md:grid-cols-3 gap-6 mb-6">
                  <div className="flex items-start gap-3">
                    <div className="bg-primary-teal/10 p-3 rounded-lg">
                      <FaCalendarAlt className="text-primary-teal" />
                    </div>
                    <div>
                      <div className="font-semibold text-navy-blue">Date</div>
                      <div className="text-primary-coral font-bold">{currentEvent.date}</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="bg-primary-coral/10 p-3 rounded-lg">
                      <FaClock className="text-primary-coral" />
                    </div>
                    <div>
                      <div className="font-semibold text-navy-blue">Time</div>
                      <div className="text-primary-coral font-bold">{currentEvent.time}</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="bg-mint-green/10 p-3 rounded-lg">
                      <FaMapMarkerAlt className="text-mint-green" />
                    </div>
                    <div>
                      <div className="font-semibold text-navy-blue">Location</div>
                      <div className="text-primary-coral font-bold">{currentEvent.location}</div>
                    </div>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-bold text-navy-blue mb-3">Description</h4>
                  <p className="text-slate-gray leading-relaxed">
                    {currentEvent.description}
                  </p>
                </div>

                {/* Navigation Dots */}
                <div className="flex justify-center gap-2">
                  {featuredEvents.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveEvent(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        index === activeEvent ? 'bg-primary-coral w-8' : 'bg-primary-teal/50'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="py-16 bg-gradient-to-br from-primary-teal/10 to-primary-coral/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-navy-blue mb-4">
              Upcoming Events
            </h2>
            <p className="text-lg text-slate-gray max-w-2xl mx-auto">
              Mark your calendar for these special activities and celebrations
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {upcomingEvents.map((event) => (
              <div
                key={event.id}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-blue-100 p-5"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-primary-teal/10 p-2 rounded-lg">
                    <FaCalendarAlt className="text-primary-teal" />
                  </div>
                  <div>
                    <div className="font-bold text-primary-coral">{event.date}</div>
                    <div className="text-slate-gray text-sm">{event.time}</div>
                  </div>
                </div>
                
                <h3 className="text-lg font-bold text-navy-blue mb-3">
                  {event.title}
                </h3>
                
                <p className="text-slate-gray text-sm mb-4">
                  {event.description}
                </p>
                
                <div className="h-1 w-12 bg-primary-teal rounded-full" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Events;