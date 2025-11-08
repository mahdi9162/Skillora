/* eslint-disable no-unused-vars */
import React, { useRef } from 'react';
import HeroSec from '../Components/HeroSec/HeroSec';
import PopulerSkills from '../Components/PopulerSkills/PopulerSkills';
import TopMentors from '../TopMentors/TopMentors';
import HowSkilloraWorks from '../HowSkilloraWorks/HowSkilloraWorks';
import WhyLearnersLoveSkillora from '../WhyLearnersLoveSkillora/WhyLearnersLoveSkillora';
import { motion } from 'framer-motion';

const Home = () => {
  const skillsRef = useRef(null);
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -30 }}
        transition={{
          duration: 0.6,
          ease: [0.25, 0.1, 0.25, 1],
        }}
      >
        <HeroSec></HeroSec>
        <WhyLearnersLoveSkillora
          onScrollToSkills={() => skillsRef.current.scrollIntoView({ behavior: 'smooth' })}
        ></WhyLearnersLoveSkillora>
        <section ref={skillsRef}>
          <PopulerSkills></PopulerSkills>
        </section>
        <TopMentors></TopMentors>
        <HowSkilloraWorks></HowSkilloraWorks>
      </motion.div>
    </>
  );
};

export default Home;
