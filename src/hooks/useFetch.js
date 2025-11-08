import axios from 'axios';
import React, { useEffect, useState } from 'react';

export const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const loadSkills = async () => {
      try {
        const res = await axios.get(url);
        await new Promise((resolve) => setTimeout(resolve, 2000));
        setData(res.data);
      } catch (error) {
        console.error('Error Loading Skills Data:', error);
      } finally {
        setLoading(false);
      }
    };
    loadSkills();
  }, [url]);
  return { data, isLoading };
};
