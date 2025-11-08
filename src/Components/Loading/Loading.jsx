import React from 'react';
import Lottie from 'lottie-react';
import loaderAnimation from '../../assets/loading circle.json';

const Loading = () => {
  return (
    <div className="flex items-center justify-center min-h-[200px] py-10">
      <Lottie animationData={loaderAnimation} loop={true} className="w-24 h-24 md:w-32 md:h-32" />
    </div>
  );
};

export default Loading;
