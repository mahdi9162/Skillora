import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import Container from '../Container/Container';
import firstHeroImg from '../../assets/techAndDesign.jpg';
import secondHeroImg from '../../assets/learnGuiter.jpg';
import thirdHeroImg from '../../assets/productive.jpg';
const HeroSec = () => {
  return (
    <>
      <section className="relative md:mb-10 lg:mb-20 bg-linear-to-b from-white to-[#F6FAFB] overflow-hidden md:pt-10 lg:pt-20  pb-6 px-3">
        {/* Accent blob for depth */}
        <div className="absolute top-20 right-[-60px] w-[420px] h-[420px] bg-sky-300/40 rounded-full blur-2xl"></div>
        <div className="absolute -bottom-24 -left-28 w-[360px] h-[360px] bg-indigo-200/35 rounded-full blur-3xl"></div>

        <Container>
          <Swiper
            modules={[Pagination, EffectFade, Autoplay]}
            pagination={{ clickable: true, dynamicBullets: true }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            effect="fade"
            fadeEffect={{ crossFade: true }}
            speed={800}
            loop={true}
            className="relative animate__animated"
          >
            {/* Slide 1 */}
            <SwiperSlide>
              <div className="grid lg:grid-cols-2 md:gap-8 items-center min-h-[500px] md:pb-14">
                <div className="md:text-center lg:text-left">
                  <h1 className="text-xl md:text-3xl lg:text-5xl uppercase font-bold animate__animated animate__fadeInDown">
                    <span className="tracking-tight leading-tight text-gray-900">Master In-Demand</span>{' '}
                    <span className="block bg-linear-to-r from-[#7DD3FC] via-[#0EA5E9] to-[#0369A1] bg-clip-text text-transparent drop-shadow-sm">
                      Tech Skills
                    </span>
                  </h1>
                  <p className="text-xs md:text-sm lg:text-lg my-5 text-accent animate__animated animate__fadeInDown animate__delay-1s">
                    From Programming to UI/UX Design, <span className="block">Find top local mentors and Start building </span>{' '}
                    <span className="block md:inline">your future.</span>
                  </p>
                  <button className="btn btn-secondary animate__animated animate__fadeInDown animate__delay-2s">
                    Explore Tech & Design
                  </button>
                </div>
                <div>
                  <img
                    src={firstHeroImg}
                    alt="Tech & Design Team Collaboration Image"
                    className="w-full rounded-3xl animate__animated animate__fadeInDown"
                  />
                </div>
              </div>
            </SwiperSlide>
            {/* Slide 2 */}
            <SwiperSlide>
              <div className="grid lg:grid-cols-2 md:gap-8 items-center min-h-[500px] md:pb-14">
                <div className="md:text-center lg:text-left">
                  <h1 className="text-xl md:text-3xl lg:text-5xl uppercase font-bold animate__animated animate__fadeInDown">
                    <span className="tracking-tight leading-tight text-gray-900">Find Your Focus.</span>{' '}
                    <span className="block bg-linear-to-r from-[#7DD3FC] via-[#0EA5E9] to-[#0369A1] bg-clip-text text-transparent drop-shadow-sm">
                      Find Your Voice.
                    </span>
                  </h1>
                  <p className="text-xs md:text-sm lg:text-lg my-5 text-accent animate__animated animate__fadeInDown animate__delay-1s">
                    Find your community. Get 1-on-1 coaching{' '}
                    <span className="block">Or join group sessions to grow your skills faster, together.</span>
                  </p>
                  <button className="btn btn-secondary animate__animated animate__fadeInDown animate__delay-2s">Join The Community</button>
                </div>
                <div>
                  <img
                    src={secondHeroImg}
                    alt="Tech & Design Team Collaboration Image"
                    className="w-full rounded-3xl animate__animated animate__fadeInDown"
                  />
                </div>
              </div>
            </SwiperSlide>
            {/* Slide 3 */}
            <SwiperSlide>
              <div className="grid lg:grid-cols-2 md:gap-8 items-center min-h-[500px] md:pb-14">
                <div className="md:text-center lg:text-left">
                  <h1 className="text-xl md:text-3xl lg:text-5xl uppercase font-bold animate__animated animate__fadeInDown">
                    <span className="tracking-tight leading-tight text-gray-900">Connect With Mentors </span>{' '}
                    <span className="block bg-linear-to-r from-[#7DD3FC] via-[#0EA5E9] to-[#0369A1] bg-clip-text text-transparent drop-shadow-sm">
                      & Grow Your Skills.
                    </span>
                  </h1>
                  <p className="text-xs md:text-sm lg:text-lg my-5 text-accent animate__animated animate__fadeInDown animate__delay-1s">
                    From language exchange to productivity hacks, <span className="block">Find the perfect mentor to help you grow.</span>
                  </p>
                  <button className="btn btn-secondary animate__animated animate__fadeInDown animate__delay-2s">Find Your Mentor</button>
                </div>
                <div>
                  <img
                    src={thirdHeroImg}
                    alt="Tech & Design Team Collaboration Image"
                    className="w-full rounded-3xl animate__animated animate__fadeInDown"
                  />
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </Container>
      </section>
    </>
  );
};

export default HeroSec;
