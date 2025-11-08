/* eslint-disable react-refresh/only-export-components */

import React, { createContext } from 'react';
import { useFetch } from '../hooks/useFetch';

export const SkillContext = createContext();

const SkillProvider = ({ children }) => {
  const { data: skills, isLoading } = useFetch('/skills.json');

  const skillInfo = {
    skills,
    isLoading,
  };

  return <SkillContext.Provider value={skillInfo}>{children}</SkillContext.Provider>;
};

export default SkillProvider;
