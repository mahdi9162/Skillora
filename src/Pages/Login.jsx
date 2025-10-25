import React from 'react';
import loginAnimation from '../assets/Welcome.json';
import Lottie from 'lottie-react';
import Container from '../Components/Container/Container';
import { Link } from 'react-router';

const Login = () => {
  return (
    <>
      <section className="my-10 md:my-20 px-3 lg:px-0">
        <Container>
          <div className="lg:flex items-center lg:flex-row gap-x-30">
            {/* Left Side Div */}
            <div className="flex-1  ">
              <Lottie className="w-72 md:w-96 lg:w-[600px] mx-auto" animationData={loginAnimation}></Lottie>
              <div className='text-center  lg:text-left'>
                <h1 className="font-bold text-lg md:text-3xl md:mt-4">Learn. Teach. Grow Together.</h1>
                <p className="mt-1.5 text-xs md:text-base">
                  Discover skills around you and share what you love. <br />
                  Join the <strong className="text-primary md:text-lg">Skillora</strong> community today.
                </p>
              </div>
            </div>
            <div className="border-t md:hidden w-full my-8 border-primary/20"></div>
            {/* Right Side Div */}
            <div className="flex-1 md:px-20 md:py-10 box-shadow-signup">
              <div>
                <div className="text-center">
                  <h2 className="text-center md:text-left text-xl md:text-3xl font-bold text-slate-800 mb-1 ">Welcome back!</h2>
                  <p className="text-slate-600 text-sm mb-6 text-center md:text-left">Sign in to your account</p>
                </div>

                <form>
                  <fieldset className="fieldset">
                    {/* Email */}
                    <label className="label text-base-content">Email</label>
                    <input
                      type="email"
                      className="input w-full placeholder:opacity-50 placeholder:text-xs md:placeholder:text-base mb-2"
                      placeholder="Enter Your Email"
                    />
                    {/* Password */}
                    <label className="label text-base-content">Password</label>
                    <input
                      type="password"
                      className="input w-full placeholder:opacity-50 placeholder:text-xs md:placeholder:text-base mb-2"
                      placeholder="Enter Your Password"
                    />
                    <div>
                      <a className="link link-hover">Forgot password?</a>
                    </div>
                    <div>
                      <p className="text-sm text-slate-600 mt-3 text-center lg:text-left">
                        New to Skillora?{' '}
                        <Link to="/signup" className="text-primary font-semibold hover:underline">
                          Sign up
                        </Link>
                      </p>
                    </div>
                    <div className="mx-auto lg:mx-0">
                      <button className="btn btn-primary md:px-10 mt-4">Login</button>
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

export default Login;
