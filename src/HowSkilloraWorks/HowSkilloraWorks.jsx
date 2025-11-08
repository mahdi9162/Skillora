import React from 'react';
import Container from '../Components/Container/Container';
import { FaSearch, FaRegIdBadge, FaCalendarCheck } from 'react-icons/fa';

const HowSkilloraWorks = () => {
  const steps = [
    {
      id: '01',
      icon: <FaSearch className="text-3xl text-sky-600" />,
      title: 'Explore Popular Skills',
      desc: 'Browse tech, design, language & more, with mentor details and ratings.',
    },
    {
      id: '02',
      icon: <FaRegIdBadge className="text-3xl text-sky-600" />,
      title: 'Check Details & Login',
      desc: 'See session info, price, and mentor profile. Log in or sign up to continue.',
    },
    {
      id: '03',
      icon: <FaCalendarCheck className="text-3xl text-sky-600" />,
      title: 'Book Your Session',
      desc: 'Send a booking request, get confirmation, and start learning with your mentor.',
    },
  ];

  return (
    <>
      <section className="bg-linear-to-b px-3 lg:px-0 from-[#E0F7FF]/40 to-white py-16">
        <Container>
          {/* Heading */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-sky-900">How Skillora Works</h2>
            <p className="text-gray-500 mt-2">Start learning in three simple steps</p>
          </div>

          {/* Steps */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step) => (
              <div
                key={step.id}
                className="relative bg-white rounded-2xl shadow-[0_8px_25px_rgba(0,0,0,0.05)] p-8 text-center hover:-translate-y-2 transition-transform duration-500"
              >
                <span className="absolute -top-3 left-5 bg-sky-100 text-sky-700 font-semibold rounded-full px-3 py-1 text-sm shadow-sm">
                  {step.id}
                </span>
                <div
                  className="flex justify-center mb-4 animate__animated animate__infinite animate__swing"
                  style={{ '--animate-duration': '2.5s' }}
                  onMouseEnter={(e) => e.currentTarget.classList.remove('animate__swing')}
                  onMouseLeave={(e) => e.currentTarget.classList.add('animate__swing')}
                >
                  {step.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{step.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>

          {/* Bottom text + CTA */}
          <div className="text-center mt-12">
            <p className="text-gray-500 text-sm">You can always update your profile and manage bookings from your dashboard.</p>
            <button className="mt-4 bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-2 rounded-full shadow-sm transition-all duration-500 cursor-pointer">
              Get Started
            </button>
          </div>
        </Container>
      </section>
    </>
  );
};

export default HowSkilloraWorks;
