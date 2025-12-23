import React from 'react';
import { 
  FaCalendarAlt, FaBookOpen, FaUserGraduate, FaChalkboardTeacher,
  FaClock, FaUsers, FaChartLine, FaCertificate, FaGraduationCap,
  FaChild, FaSchool, FaBus, FaShieldAlt, FaHeart, FaStar,
  FaArrowRight, FaBook, FaPalette, FaMusic, FaTree, FaFlask,
  FaDesktop, FaBalanceScale, FaCode
} from 'react-icons/fa';
import { FaBrain } from 'react-icons/fa6';

const Academics = () => {
  // Academic Programs
  const academicPrograms = [
    {
      age: '1.5 - 3 Years',
      program: 'Toddlers Program',
      description: 'Foundation building through play-based learning and basic skill development',
      duration: 'Full Day (8:00 AM - 6:00 PM)',
      features: ['Social Skills', 'Motor Development', 'Language Basics', 'Routine Building'],
      icon: <FaChild className="text-4xl" />,
      color: 'primary-teal'
    },
    {
      age: '3 - 4 Years',
      program: 'Pre-Kg Program',
      description: 'Introduction to structured learning with focus on cognitive development',
      duration: 'Full Day (8:30 AM - 5:30 PM)',
      features: ['Pre-Math Skills', 'Phonics', 'Creative Expression', 'Science Exploration'],
      icon: <FaBookOpen className="text-4xl" />,
      color: 'primary-coral'
    },
    {
      age: '4 - 5 Years',
      program: 'LKG (Monti) Program',
      description: 'Advanced learning with emphasis on academic readiness',
      duration: 'Full Day (9:00 AM - 5:00 PM)',
      features: ['Reading Readiness', 'Number Concepts', 'Writing Skills', 'Problem Solving'],
      icon: <FaGraduationCap className="text-4xl" />,
      color: 'mint-green'
    },
    {
      age: '5 - 6 Years',
      program: 'UKG (Monti) Program',
      description: 'Comprehensive preparation for formal schooling',
      duration: 'Full Day (9:00 AM - 5:00 PM)',
      features: ['Advanced Literacy', 'Mathematical Operations', 'Critical Thinking', 'Research Skills'],
      icon: <FaSchool className="text-4xl" />,
      color: 'sky-blue'
    }
  ];

  // Curriculum Areas
  const curriculumAreas = [
    {
      title: 'Language Development',
      description: 'Phonics, vocabulary building, reading readiness, and communication skills',
      activities: ['Storytelling', 'Rhymes & Songs', 'Letter Recognition', 'Show & Tell'],
      icon: <FaBook className="text-2xl" />,
      color: 'primary-teal'
    },
    {
      title: 'Mathematical Concepts',
      description: 'Number recognition, counting, shapes, patterns, and basic operations',
      activities: ['Counting Games', 'Shape Sorting', 'Pattern Making', 'Measurement Activities'],
      icon: <FaBalanceScale className="text-2xl" />,
      color: 'primary-coral'
    },
    {
      title: 'Science Exploration',
      description: 'Nature studies, simple experiments, and observation skills',
      activities: ['Nature Walks', 'Weather Studies', 'Simple Experiments', 'Animal Habitats'],
      icon: <FaFlask className="text-2xl" />,
      color: 'mint-green'
    },
    {
      title: 'Creative Arts',
      description: 'Drawing, painting, crafts, music, and creative expression',
      activities: ['Finger Painting', 'Clay Modeling', 'Music & Movement', 'Dramatic Play'],
      icon: <FaPalette className="text-2xl" />,
      color: 'sky-blue'
    },
    {
      title: 'Physical Development',
      description: 'Gross and fine motor skills, coordination, and health awareness',
      activities: ['Outdoor Play', 'Yoga & Exercises', 'Fine Motor Activities', 'Balance Games'],
      icon: <FaTree className="text-2xl" />,
      color: 'forest-green'
    },
    {
      title: 'Technology Skills',
      description: 'Age-appropriate technology exposure and digital literacy',
      activities: ['Interactive Games', 'Basic Coding', 'Digital Storytelling', 'Educational Apps'],
      icon: <FaDesktop className="text-2xl" />,
      color: 'lavender'
    }
  ];

//   // Daily Schedule
//   const dailySchedule = [
//     {
//       time: '8:00 AM - 8:30 AM',
//       activity: 'Arrival & Welcome',
//       description: 'Warm welcome, handover from parents',
//       icon: '👋'
//     },
//     {
//       time: '8:30 AM - 9:30 AM',
//       activity: 'Morning Circle Time',
//       description: 'Greetings, calendar, weather, theme discussion',
//       icon: '⭕'
//     },
//     {
//       time: '9:30 AM - 10:30 AM',
//       activity: 'Academic Session 1',
//       description: 'Language & Literacy activities',
//       icon: '📚'
//     },
//     {
//       time: '10:30 AM - 11:00 AM',
//       activity: 'Snack Time',
//       description: 'Healthy snacks and hydration',
//       icon: '🍎'
//     },
//     {
//       time: '11:00 AM - 12:00 PM',
//       activity: 'Academic Session 2',
//       description: 'Mathematics & Cognitive activities',
//       icon: '🧮'
//     },
//     {
//       time: '12:00 PM - 1:00 PM',
//       activity: 'Lunch & Rest',
//       description: 'Nutritious lunch and quiet time',
//       icon: '🍽️'
//     },
//     {
//       time: '1:00 PM - 2:30 PM',
//       activity: 'Creative Activities',
//       description: 'Arts, crafts, music, and drama',
//       icon: '🎨'
//     },
//     {
//       time: '2:30 PM - 3:30 PM',
//       activity: 'Outdoor Play',
//       description: 'Playground activities and physical exercises',
//       icon: '⚽'
//     },
//     {
//       time: '3:30 PM - 4:30 PM',
//       activity: 'Skill Development',
//       description: 'Life skills and special activities',
//       icon: '🌟'
//     },
//     {
//       time: '4:30 PM - 5:30 PM',
//       activity: 'Evening Circle & Departure',
//       description: 'Review of day, story time, departure',
//       icon: '👋'
//     }
//   ];

  // Teaching Methodology
  const teachingMethods = [
    {
      method: 'Play-Based Learning',
      description: 'Learning through structured and unstructured play activities',
      benefits: ['Enhances creativity', 'Develops social skills', 'Makes learning fun'],
      icon: '🎮'
    },
    {
      method: 'Hands-On Activities',
      description: 'Learning by doing with concrete materials and experiences',
      benefits: ['Improves retention', 'Develops fine motor skills', 'Encourages exploration'],
      icon: '👐'
    },
    {
      method: 'Theme-Based Approach',
      description: 'Integrated learning around specific themes or topics',
      benefits: ['Creates connections', 'Enhances understanding', 'Makes learning relevant'],
      icon: '🎯'
    },
    {
      method: 'Individualized Attention',
      description: 'Customized learning experiences based on each child\'s pace',
      benefits: ['Builds confidence', 'Addresses unique needs', 'Ensures mastery'],
      icon: '👤'
    }
  ];

  // Assessment System
  const assessmentSystem = [
    {
      type: 'Continuous Observation',
      description: 'Daily observation of child\'s progress and development',
      frequency: 'Ongoing',
      tools: ['Observation Checklists', 'Anecdotal Records', 'Work Samples']
    },
    {
      type: 'Portfolio Assessment',
      description: 'Collection of child\'s work over time to show progress',
      frequency: 'Monthly Updates',
      tools: ['Artwork Collection', 'Photographs', 'Video Recordings']
    },
    {
      type: 'Developmental Milestones',
      description: 'Tracking achievement of age-appropriate developmental goals',
      frequency: 'Quarterly Reviews',
      tools: ['Milestone Checklists', 'Progress Reports', 'Parent-Teacher Meetings']
    },
    {
      type: 'Parent Collaboration',
      description: 'Regular communication and partnership with parents',
      frequency: 'Weekly Updates',
      tools: ['Daily Reports', 'Parent Apps', 'Monthly Newsletters']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50">
      {/* Header Section */}
      <section className="py-12 bg-gradient-to-r from-navy-blue to-primary-teal text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl text-navy-blue font-bold mb-4">
            Academic Programs
          </h1>
          <p className="text-xl text-sky-blue max-w-3xl mx-auto">
            Comprehensive early education programs for children aged 1.5 to 6 years.
            Nurturing young minds through play-based learning and structured activities.
          </p>
        </div>
      </section>

      {/* Academic Programs */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-navy-blue mb-4">
              Our Academic Programs
            </h2>
            <p className="text-lg text-slate-gray max-w-2xl mx-auto">
              Age-appropriate programs designed for holistic development
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {academicPrograms.map((program, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-white to-blue-50 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-blue-100 overflow-hidden"
              >
                <div className={`bg-${program.color} text-white p-6 text-center`}>
                  <div className="flex justify-center mb-4">
                    {program.icon}
                  </div>
                  <div className="text-2xl font-bold mb-2">{program.age}</div>
                  <h3 className="text-xl font-bold">{program.program}</h3>
                </div>
                <div className="p-6">
                  <p className="text-slate-gray mb-4 text-sm">
                    {program.description}
                  </p>
                  <div className="mb-4">
                    <div className="flex items-center gap-2 text-sm text-primary-coral mb-2">
                      <FaClock />
                      <span className="font-semibold">{program.duration}</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    {program.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <div className={`w-2 h-2 bg-${program.color} rounded-full`}></div>
                        <span className="text-slate-gray text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <button className={`mt-6 text-${program.color} hover:text-${program.color}/80 font-semibold flex items-center gap-2 text-sm`}>
                    Learn More <FaArrowRight />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Curriculum Areas */}
      <section className="py-16 bg-gradient-to-br from-primary-teal/10 to-primary-coral/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-navy-blue mb-4">
              Curriculum Areas
            </h2>
            <p className="text-lg text-slate-gray max-w-2xl mx-auto">
              Comprehensive learning across multiple developmental domains
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {curriculumAreas.map((area, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-blue-100"
              >
                <div className={`bg-${area.color}/10 p-4 rounded-xl w-fit mb-6`}>
                  <div className={`text-${area.color}`}>
                    {area.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-navy-blue mb-3">
                  {area.title}
                </h3>
                <p className="text-slate-gray text-sm mb-4">
                  {area.description}
                </p>
                <div className="space-y-2 mb-4">
                  {area.activities.map((activity, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <div className={`w-1.5 h-1.5 bg-${area.color} rounded-full`}></div>
                      <span className="text-slate-gray text-xs">{activity}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Daily Schedule */}
      {/* <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-navy-blue mb-4">
              Daily Schedule
            </h2>
            <p className="text-lg text-slate-gray max-w-2xl mx-auto">
              Structured yet flexible daily routine for optimal learning and growth
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-4">
              {dailySchedule.map((schedule, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-r from-white to-blue-50 rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-blue-100 hover:border-primary-teal/30"
                >
                  <div className="flex flex-col md:flex-row md:items-center gap-4">
                    <div className="flex items-center gap-4">
                      <div className="text-3xl">{schedule.icon}</div>
                      <div>
                        <div className="text-primary-coral font-bold">{schedule.time}</div>
                        <h3 className="text-lg font-bold text-navy-blue">{schedule.activity}</h3>
                      </div>
                    </div>
                    <div className="md:ml-auto">
                      <p className="text-slate-gray text-sm">{schedule.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-8 p-6 bg-primary-teal/10 rounded-xl border border-primary-teal/20">
              <div className="flex items-center gap-3 mb-3">
                <FaBus className="text-primary-teal text-xl" />
                <h3 className="text-lg font-bold text-navy-blue">Transportation Schedule</h3>
              </div>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div>
                  <div className="font-semibold text-primary-coral mb-1">Morning Pickup</div>
                  <div className="text-slate-gray">7:00 AM - 8:00 AM (Route-based schedule)</div>
                </div>
                <div>
                  <div className="font-semibold text-primary-coral mb-1">Evening Drop</div>
                  <div className="text-slate-gray">5:30 PM - 6:30 PM (Route-based schedule)</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Teaching Methodology */}
      {/* <section className="py-16 bg-gradient-to-br from-primary-teal/10 to-primary-coral/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-navy-blue mb-4">
              Teaching Methodology
            </h2>
            <p className="text-lg text-slate-gray max-w-2xl mx-auto">
              Research-based approaches for effective early childhood education
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teachingMethods.map((method, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-blue-100 text-center"
              >
                <div className="text-4xl mb-4">{method.icon}</div>
                <h3 className="text-xl font-bold text-navy-blue mb-3">
                  {method.method}
                </h3>
                <p className="text-slate-gray text-sm mb-4">
                  {method.description}
                </p>
                <div className="space-y-2">
                  {method.benefits.map((benefit, idx) => (
                    <div key={idx} className="text-primary-teal text-sm">✓ {benefit}</div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Assessment System */}
      {/* <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-navy-blue mb-4">
              Assessment & Progress Tracking
            </h2>
            <p className="text-lg text-slate-gray max-w-2xl mx-auto">
              Continuous monitoring and feedback for your child's development
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {assessmentSystem.map((assessment, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-white to-blue-50 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-blue-100"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-primary-teal/10 p-3 rounded-lg">
                    <FaChartLine className="text-primary-teal text-xl" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-primary-coral">{assessment.frequency}</div>
                    <h3 className="text-lg font-bold text-navy-blue">{assessment.type}</h3>
                  </div>
                </div>
                <p className="text-slate-gray text-sm mb-4">
                  {assessment.description}
                </p>
                <div className="space-y-2">
                  {assessment.tools.map((tool, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-primary-teal rounded-full"></div>
                      <span className="text-slate-gray text-xs">{tool}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Special Features */}
      <section className="py-16 bg-gradient-to-br from-primary-teal/10 to-primary-coral/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-navy-blue mb-4">
              Special Academic Features
            </h2>
            <p className="text-lg text-slate-gray max-w-2xl mx-auto">
              Unique aspects of our academic program
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-2xl shadow-lg border border-blue-100">
              <div className="flex items-start gap-4 mb-4">
                <div className="bg-primary-teal/10 p-3 rounded-lg">
                  <FaDesktop className="text-primary-teal text-2xl" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-navy-blue mb-2">Technology Integration</h3>
                  <p className="text-slate-gray text-sm">
                    Smart boards, educational apps, and interactive learning tools 
                    integrated into daily activities for enhanced learning experiences.
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="bg-blue-50 p-3 rounded-lg">
                  <div className="font-semibold text-primary-teal">Digital Literacy</div>
                  <div className="text-slate-gray">Age-appropriate tech skills</div>
                </div>
                <div className="bg-blue-50 p-3 rounded-lg">
                  <div className="font-semibold text-primary-teal">Interactive Learning</div>
                  <div className="text-slate-gray">Engaging digital content</div>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg border border-blue-100">
              <div className="flex items-start gap-4 mb-4">
                <div className="bg-primary-coral/10 p-3 rounded-lg">
                  <FaUsers className="text-primary-coral text-2xl" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-navy-blue mb-2">Parent Partnership</h3>
                  <p className="text-slate-gray text-sm">
                    Regular communication through parent apps, monthly newsletters, 
                    and workshops to involve parents in the learning journey.
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="bg-pink-50 p-3 rounded-lg">
                  <div className="font-semibold text-primary-coral">Daily Updates</div>
                  <div className="text-slate-gray">Photos & progress reports</div>
                </div>
                <div className="bg-pink-50 p-3 rounded-lg">
                  <div className="font-semibold text-primary-coral">Workshops</div>
                  <div className="text-slate-gray">Parent education sessions</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

     
    </div>
  );
};

export default Academics;