import { AuthContext } from '../../Provider/AuthProvider';
import Loading from '../Loading/Loading';
import Container from '../Container/Container';
import PopulerSkillsCard from './PopulerSkillsCard';
import { SkillContext } from '../../Provider/SkillProvider';
import { use } from 'react';

const PopulerSkills = () => {
  const { skills, isLoading } = use(SkillContext);

  if (isLoading) {
    return (
      <div className="my-96">
        <Loading></Loading>
      </div>
    );
  }
  return (
    <>
      <section className=" relative my-5 md:my-10 lg:my-20 bg-[linear-gradient(to_bottom,#ffffff_0%,#f8fbff_100%)] overflow-hidden py-16 px-3 lg:px-0">
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
                <span className="absolute -bottom-1 left-0 w-full h-1 rounded-full bg-linear-to-r from-sky-400/60 to-sky-600/60"></span>
              </span>{' '}
              Around You
            </h2>
            <p className="mt-2 text-xs md:text-base text-gray-600">
              Discover in-demand skills people <span className="block md:inline">are learning on Skillora.</span>
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill) => (
              <div key={skill.skillId} data-aos="zoom-out-up">
                <PopulerSkillsCard skill={skill}></PopulerSkillsCard>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
};

export default PopulerSkills;
