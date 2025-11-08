import React from 'react';
import { FaStar } from 'react-icons/fa';

const TopMentorsCard = ({ mentor }) => {
  const { name, role, rating, totalReviews, image, category, tagline } = mentor || {};

  return (
    <article className="bg-white/90 rounded-3xl shadow-[0_16px_40px_rgba(15,23,42,0.08)] border border-slate-100/80 px-5 py-6 flex flex-col items-center text-center gap-3 hover:shadow-[0_20px_60px_rgba(15,23,42,0.14)] hover:-translate-y-1 transition-all duration-300">
      {/* Avatar */}
      <div className="relative">
        <div className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden ring-4 ring-sky-100 shadow-md">
          <img src={image} alt={name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
        </div>
        <span className="absolute -bottom-1 -right-1 text-[10px] px-2 py-0.5 rounded-full bg-sky-100 text-sky-700 font-medium">
          {category}
        </span>
      </div>

      {/* Name & role */}
      <div className="space-y-1">
        <h3 className="text-base md:text-lg font-semibold text-slate-900">{name}</h3>
        <p className="text-xs md:text-sm text-slate-500">{role}</p>
      </div>

      {/* Tagline */}
      {tagline && <p className="text-xs text-slate-500 leading-snug line-clamp-2">{tagline}</p>}

      {/* Rating */}
      <div className="flex items-center justify-center gap-1 text-xs md:text-sm mt-1">
        <FaStar className="text-amber-400" />
        <span className="font-semibold text-slate-800">{rating.toFixed(1)}</span>
        {typeof totalReviews === 'number' && <span className="text-slate-400">({totalReviews} reviews)</span>}
      </div>

      {/* Button */}
      <button
        type="button"
        className="mt-3 w-full rounded-full bg-orange-500 hover:bg-orange-600 text-white text-xs md:text-sm font-semibold py-2.5 shadow-md hover:shadow-lg transition-all duration-500 cursor-pointer"
      >
        View Profile
      </button>
    </article>
  );
};

export default TopMentorsCard;
