/* eslint-disable react-refresh/only-export-components */
import axios from 'axios';
import React, { Children, createContext, useEffect, useState } from 'react';

export const SkillContext = createContext();

const SkillProvider = ({ children }) => {
  const [skills, setSkills] = useState([]);
  const [isLoading, setLoading] = useState(true);

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

  const skillInfo = {
    skills,
    isLoading,
  };

  return <SkillContext.Provider value={skillInfo}>{children}</SkillContext.Provider>;
};

export default SkillProvider;
