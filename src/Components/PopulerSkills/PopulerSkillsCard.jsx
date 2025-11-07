import React from 'react';
import { Link } from 'react-router';

const PopulerSkillsCard = ({ skill }) => {
  const { skillId, image, skillName, rating, price } = skill;

  return (
    <div className="bg-white rounded-3xl shadow-md transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_8px_20px_rgba(0,164,255,0.15)]">
      <figure className="rounded-t-3xl overflow-hidden">
        <img className="w-full h-60 object-cover object-center transition-transform duration-500 hover:scale-105" src={image} alt="Shoes" />
      </figure>
      <div className="card-body p-5">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">
          {skillName}
          {/* <div className="badge badge-secondary">NEW</div> */}
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed mb-4">
          Rating : <span className="font-semibold text-sky-500">{rating}</span>
        </p>
        <p className="text-gray-800 font-semibold text-base">
          Price: <span className="text-gray-900 font-bold ml-1">${price}</span>
          <span className="text-gray-500 text-sm ml-1">/month</span>
        </p>
        <div className="card-actions justify-end ">
          <Link to={`/skill-details/${skillId}`}>
            <button className="bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 px-5 rounded-lg transition-all duration-400 shadow-lg hover:shadow-md cursor-pointer">
              View Details
            </button>
          </Link>
          {/* <div className="badge badge-outline">Products</div> */}
        </div>
      </div>
    </div>
  );
};

export default PopulerSkillsCard;
