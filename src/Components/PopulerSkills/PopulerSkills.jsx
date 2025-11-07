import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import Loading from '../Loading/Loading';
import Container from '../Container/Container';
import PopulerSkillsCard from './PopulerSkillsCard';

const PopulerSkills = () => {
  const [skills, setSkills] = useState([]);
  const [isLoading, setLoading] = useState(true);
  console.log(skills);

  useEffect(() => {
    const loadSkills = async () => {
      try {
        const res = await axios.get('/skills.json');
        await new Promise((resolve) => setTimeout(resolve, 2000));
        setSkills(res.data);
      } catch (error) {
        console.error('Error Loading Skills Data:', error);
      } finally {
        setLoading(false);
      }
    };
    loadSkills();
  }, []);

  if (isLoading) {
    return (
      <div className="my-92">
        <Loading></Loading>
      </div>
    );
  }

  return (
    <>
      <section className=" relative my-5 md:my-10 lg:my-20 bg-linear-to-b from-white to-[#F6FAFB] overflow-hidden py-16 px-3 lg:px-0">
        {/* Background blobs only */}
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute top-20 right-[-60px] w-[420px] h-[420px] bg-sky-300/60 rounded-full blur-xl" />
          <div className="absolute -bottom-24 -left-28 w-[360px] h-[360px] bg-indigo-200/50 rounded-full blur-2xl" />
        </div>
        <Container className="relative z-10">
          {/* Title */}
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 ">
              Popular{' '}
              <span className="md:text-4xl bg-linear-to-r from-[#7DD3FC] via-[#0EA5E9] to-[#0369A1] bg-clip-text text-transparent drop-shadow-sm">
                Skills
              </span>{' '}
              Around You
            </h2>
            <p className="mt-2 text-xs md:text-base text-gray-600">
              Discover in-demand skills people <span className="block md:inline">are learning on Skillora.</span>
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill) => (
              <PopulerSkillsCard key={skill.skillId} skill={skill}></PopulerSkillsCard>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
};

export default PopulerSkills;
