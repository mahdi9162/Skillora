import React from 'react';
import HeroSec from '../Components/HeroSec/HeroSec';
import PopulerSkills from '../Components/PopulerSkills/PopulerSkills';
import TopMentors from '../TopMentors/TopMentors';
import HowSkilloraWorks from '../HowSkilloraWorks/HowSkilloraWorks';
import WhyLearnersLoveSkillora from '../WhyLearnersLoveSkillora/WhyLearnersLoveSkillora';

const Home = () => {
  return (
    <>
      <HeroSec></HeroSec>
      <WhyLearnersLoveSkillora></WhyLearnersLoveSkillora>
      <PopulerSkills></PopulerSkills>
      <TopMentors></TopMentors>
      <HowSkilloraWorks></HowSkilloraWorks>
    </>
  );
};

export default Home;
