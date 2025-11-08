import React from 'react';
import Container from '../Components/Container/Container';
import { FaUsers, FaRegClock, FaBullseye } from 'react-icons/fa';

const WhyLearnersLoveSkillora = () => {
  const features = [
    {
      id: 1,
      icon: <FaUsers className="text-3xl text-sky-600" />,
      title: 'Local Mentors',
      desc: 'Learn from mentors who understand your culture, language and context.',
    },
    {
      id: 2,
      icon: <FaRegClock className="text-3xl text-sky-600" />,
      title: 'Flexible Sessions',
      desc: 'Set your schedule and learn at your own pace, evenings or weekends included.',
    },
    {
      id: 3,
      icon: <FaBullseye className="text-3xl text-sky-600" />,
      title: 'Goal-based Learning',
      desc: 'Follow personalized learning paths focused on projects and real outcomes.',
    },
  ];

  return (
    <>
      <Container>
        <section className="my-16 mx-3 lg:mx-0">
          <div className="rounded-4xl bg-linear-to-b from-[#E0F7FF] to-white shadow-[0_18px_60px_rgba(15,23,42,0.08)] border border-white/60 px-4 py-10 md:px-10 lg:px-16">
            {/* Top text */}
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900">
                Why Learners Love{' '}
                <span className="text-primary relative inline-block">
                  Skillora
                  <span className="absolute left-0 -bottom-1 h-[3px] w-full bg-linear-to-r from-[#0ea5e9] to-[#38bdf8] rounded-full" />
                </span>
              </h2>
              <p className="mt-3 text-sm md:text-base text-slate-500">Discover what makes learning with Skillora simple and effective.</p>
            </div>

            {/* Feature cards */}
            <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
              {features.map((feature) => (
                <div
                  key={feature.id}
                  className="bg-white rounded-3xl px-6 py-7 shadow-md hover:shadow-lg transition-all duration-500 transform hover:-translate-y-2 text-center"
                >
                  <div className="flex items-center justify-center">
                    <div
                      className="w-16 h-16 rounded-full bg-sky-50 flex items-center justify-center animate__animated animate__infinite animate__pulse"
                      style={{ '--animate-duration': '1.5s' }}
                      onMouseEnter={(e) => e.currentTarget.classList.remove('animate__pulse')}
                      onMouseLeave={(e) => e.currentTarget.classList.add('animate__pulse')}
                    >
                      {feature.icon}
                    </div>
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-slate-900">{feature.title}</h3>
                  <p className="mt-2 text-sm text-slate-500 leading-relaxed">{feature.desc}</p>
                </div>
              ))}
            </div>

            {/* Bottom tagline + CTA */}
            <div className="mt-8 text-center">
              <p className="text-xs md:text-sm text-slate-400">Built to make 1:1 learning simple, flexible and outcome-focused.</p>
              <button className="mt-4 bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 md:px-8 py-2.5 md:py-3 rounded-full shadow-md hover:shadow-lg transition-all duration-300">
                Get Started
              </button>
            </div>
          </div>
        </section>
      </Container>
    </>
  );
};

export default WhyLearnersLoveSkillora;
