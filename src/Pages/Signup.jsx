
import signupAnimation from '../assets/Learning community animation.json';
import Lottie from 'lottie-react';
import Container from '../Components/Container/Container';
import { Link } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';

const Signup = () => {


  return (
    <>
      <section className="my-5 lg:my-20 px-3 md:px-0">
        <Container>
          <div className="lg:flex items-center lg:flex-row gap-x-10">
            {/* Left Side Div */}
            <div className="flex-1  ">
              <Lottie className="lg:-ml-24 w-72 md:w-[600px] lg:w-[850px] mx-auto" animationData={signupAnimation}></Lottie>
              <div className="text-center lg:text-left">
                <h1 className="font-bold text-lg md:text-2xl lg:text-3xl md:mt-4">Learn. Teach. Grow Together.</h1>
                <p className="mt-1.5 text-xs md:text-base">
                  Discover skills around you and share what you love. <br />
                  Join the <strong className="text-primary md:text-lg">Skillora</strong> community today.
                </p>
              </div>
            </div>

            <div className="border-t md:hidden w-full my-5 border-primary/20"></div>
            {/* Right Side Div */}
            <div className="flex-1 md:px-20 md:py-10 box-shadow-signup">
              <div>
                <h1 className="mb-3 md:mb-6 text-center lg:text-left text-xl md:text-2xl lg:text-3xl font-semibold">
                  Create Your <strong className="text-primary">Skillora</strong> Account
                </h1>
                <form >
                  <fieldset className="fieldset">
                    {/* Name */}
                    <label className="label text-base-content">Name</label>
                    <input
                      type="text"
                      name="name"
                      className="input w-full placeholder:opacity-50 placeholder:text-xs md:placeholder:text-base mb-2"
                      placeholder="Enter Your Name"
                    />
                    {/* Email */}
                    <label className="label text-base-content">Email</label>
                    <input
                      type="email"
                      name="email"
                      className="input w-full placeholder:opacity-50 placeholder:text-xs md:placeholder:text-base mb-2"
                      placeholder="Enter Your Email"
                    />
                    {/* Photo URL */}
                    <label className="label text-base-content">Photo URL</label>
                    <input
                      type="text"
                      name="photo"
                      className="input w-full placeholder:opacity-50 placeholder:text-xs md:placeholder:text-base mb-2"
                      placeholder="Enter Your Photo URL"
                    />
                    {/* Password */}
                    <label className="label text-base-content">Password</label>
                    <input
                      type="password"
                      name="password"
                      className="input w-full placeholder:opacity-50 placeholder:text-xs md:placeholder:text-base mb-2"
                      placeholder="Enter Your Password"
                    />
                    <div>
                      <p className="text-xs md:text-sm">
                        Already have an account?{' '}
                        <Link to="/login" className="text-primary font-semibold hover:underline">
                          Login
                        </Link>
                      </p>
                    </div>
                    <div className="mx-auto md:mx-0">
                      <button className="btn btn-primary md:px-10 mt-2 md:mt-4">Signup</button>
                    </div>
                  </fieldset>
                </form>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Signup;
