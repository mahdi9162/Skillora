import React, { use, useEffect, useRef } from 'react';
import Container from '../Components/Container/Container';
import { SkillContext } from '../Provider/SkillProvider';
import { useParams } from 'react-router';
import Loading from '../Components/Loading/Loading';
import { FaStar } from 'react-icons/fa';
import { AiOutlineCheckCircle } from 'react-icons/ai';
import { CgMail } from 'react-icons/cg';
import { toast } from 'react-toastify';

const SkillDetails = () => {
  const { skills, isloading } = use(SkillContext);

  const params = useParams();
  const paramsId = Number(params.id);

  const bookingFormRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [paramsId]);

  if (isloading) {
    return <Loading></Loading>;
  }

  const skill = skills.find((skill) => skill.skillId === paramsId);
  console.log(skill);

  if (!skill) {
    return <div>Sorry Skill not Found!</div>;
  }

  const { skillName, category, rating, tagline, image, description, highlights, providerName, providerEmail, price, slotsAvailable } =
    skill;

  const handleScrollToBooking = () => {
    if (bookingFormRef.current) {
      bookingFormRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleBookingForm = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    if (name.length > 4) {
      toast.success('Session booked successfully! 🎉', {
        position: 'top-center',
        autoClose: 2500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: 'colored',
        className: 'bg-secendory text-white font-semibold rounded-xl shadow-lg',
      });
    }
    form.reset();
  };

  return (
    <>
      {/* Hero */}
      <Container>
        <section className="my-10 mx-3 lg:mx-0 py-10 px-3 md:px-10 lg:px-20 rounded-4xl bg-linear-to-br from-[#0ea5e9]/20 via-[#38bdf8]/10 to-[#fafafa] shadow-[0_8px_40px_rgba(14,165,233,0.15)] border border-white/60">
          <div className="flex items-center flex-col lg:flex-row justify-between">
            <div className="space-y-4 md:space-y-5">
              <h1 className="text-xl md:text-4xl lg:text-5xl font-bold text-center md:text-left">{skillName}</h1>
              <div className="flex items-center gap-4 md:gap-5 justify-center md:justify-start">
                <p className="badge badge-primary rounded-full p-4 text-sm md:text-base font-semibold">{category}</p>
                <span className="flex items-center gap-2 text-accent font-semibold text-base md:text-lg">
                  <FaStar className="text-primary animate__animated animate__pulse animate__infinite" /> {rating}
                </span>
              </div>
              <p className="text-accent font-semibold text-sm md:text-lg text-center md:text-left mx-auto md:mx-0 w-60  md:w-full mb-6">
                {tagline}
              </p>
            </div>
            <div>
              <img className="rounded-4xl lg:w-[500px] shadow-xl" src={image} alt="" />
            </div>
          </div>
        </section>
      </Container>

      {/* Main Info */}
      <Container>
        <section className="my-10 py-5 md:py-6 lg:py-10 px-3 mx-3 lg:mx-0 md:px-10 lg:px-20 rounded-4xl bg-linear-to-b from-[#0ea5e9]/15 to-[#fafafa00] shadow-[0_4px_30px_rgba(14,165,233,0.08)]">
          <h2 className="text-xl md:text-3xl lg:text-4xl font-bold mb-4">Description</h2>

          <div className="flex flex-col lg:flex-row justify-between">
            <div className="w-full lg:w-[60%]">
              <p className="text-accent text-justify text-xs md:text-base mb-5">{description}</p>
              <div className="flex flex-wrap gap-3 mt-4">
                {highlights.map((text, index) => (
                  <span
                    key={index}
                    className="inline-flex items-center gap-2 bg-sky-200 text-sky-700 px-3 py-1.5 rounded-full text-xs md:text-sm font-medium hover:bg-sky-200 hover:shadow-md transition-all duration-200"
                  >
                    <AiOutlineCheckCircle className="text-sky-600 text-lg animate__animated animate__pulse animate__infinite" />
                    {text}
                  </span>
                ))}
              </div>
            </div>

            <div className="instructor-box">
              <h3 className="text-lg md:text-xl font-semibold text-gray-900">
                Instructor: <span className="text-sky-800">{providerName}</span>
              </h3>
              <p className="flex items-center gap-2 text-sm text-gray-600">
                <CgMail className="text-lg text-sky-500" />
                {providerEmail}
              </p>
              <div className="border-t border-gray-200/60 my-3"></div>

              <p className="text-gray-800 font-medium text-base">
                Price: <span className="text-gray-900 font-bold ml-1">${price}</span>
                <span className="text-gray-500 text-sm ml-1">/month</span>
              </p>
              <p className="text-gray-800 font-medium text-base">
                Slots Left: <span className="font-semibold text-sky-700">{slotsAvailable}</span>
              </p>
              <p className="text-gray-800 font-medium text-base">
                Rating: <span className="font-semibold text-sky-600">{rating}</span>
              </p>
              <button
                onClick={handleScrollToBooking}
                className="btn btn-secondary rounded-2xl w-40 mt-5 animate__animated animate__pulse animate__infinite"
                style={{ '--animate-duration': '2.5s' }}
                onMouseEnter={(e) => e.currentTarget.classList.remove('animate__pulse')}
                onMouseLeave={(e) => e.currentTarget.classList.add('animate__pulse')}
              >
                Book sesson
              </button>
            </div>
          </div>
        </section>
      </Container>

      {/* Book session form */}
      <Container>
        <section
          id="booking-form"
          className="my-10 py-5 md:py-6 lg:py-10 px-3 mx-3 md:mx-auto md:px-10 lg:px-20 bg-linear-to-r from-sky-50 to-white rounded-3xl shadow-lg max-w-xl "
        >
          <h2 className="text-2xl font-semibold text-center text-sky-900 mb-6">Book a Session</h2>
          <form onSubmit={handleBookingForm} ref={bookingFormRef} className="flex flex-col gap-5">
            <div className="flex flex-col">
              <label className="text-sky-800 font-medium mb-1 tracking-wide text-sm md:text-base">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your full name"
                className="px-4 py-2.5 rounded-xl border border-sky-200 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:border-transparent transition-all duration-200 bg-white shadow-sm placeholder:text-sm md:placeholder:text-base placeholder:opacity-40"
                required
              />
            </div>

            {/* Email */}
            <div className="flex flex-col">
              <label className="text-sky-800 font-medium mb-1 tracking-wide text-sm md:text-base">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email address"
                className="px-4 py-2.5 rounded-xl border border-sky-200 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:border-transparent transition-all duration-200 bg-white shadow-sm placeholder:text-sm md:placeholder:text-base placeholder:opacity-40"
                required
              />
            </div>

            {/* Button */}
            <button
              type="submit"
              className="mt-4 bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded-xl transition-all duration-500 shadow-md hover:shadow-lg animate__animated animate__pulse animate__infinite cursor-pointer"
              style={{ '--animate-duration': '2.5s' }}
              onMouseEnter={(e) => e.currentTarget.classList.remove('animate__pulse')}
              onMouseLeave={(e) => e.currentTarget.classList.add('animate__pulse')}
            >
              Confirm Booking
            </button>
          </form>
        </section>
      </Container>
    </>
  );
};

export default SkillDetails;
