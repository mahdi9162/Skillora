import React from 'react';
import { useFetch } from '../hooks/useFetch';
import Loading from '../Components/Loading/Loading';
import Container from '../Components/Container/Container';
import TopMentorsCard from './TopMentorsCard';
const TopMentors = () => {
  const { data: mentors, isLoading } = useFetch('/mentors.json');

  if (isLoading) {
    return (
      <div className="my-96">
        <Loading></Loading>
      </div>
    );
  }

  return (
    <>
      <Container>
        <section className="my-16 mx-3 lg:mx-0 py-10 px-4 md:px-10 lg:px-16 rounded-4xl bg-linear-to-b from-[#0ea5e9]/15 via-[#f1f7ff] to-[#f9fbff] shadow-[0_18px_60px_rgba(15,23,42,0.12)] border border-white/60">
          {/* Title */}
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-slate-900">
              Top Rated{' '}
              <span className="md:text-4xl bg-linear-to-r from-[#7DD3FC] via-[#0EA5E9] to-[#0369A1] bg-clip-text text-transparent drop-shadow-sm">
                Mentors
                <span className="absolute -bottom-1 left-0 w-full h-1 rounded-full bg-linear-to-r from-sky-400/60 to-sky-600/60"></span>
              </span>
            </h2>
            <p className="mt-3 text-sm md:text-base text-slate-600">
              Meet our most trusted experts who help learners grow faster on Skillora.
            </p>
          </div>

          {/* Cards */}
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {mentors.map((mentor) => (
              <TopMentorsCard key={mentor.id} mentor={mentor} />
            ))}
          </div>

          {/* Tiny footer text */}
          <p className="mt-8 text-center text-xs md:text-sm text-slate-500">More mentors are joining Skillora every week — stay tuned!</p>
        </section>
      </Container>
    </>
  );
};

export default TopMentors;
