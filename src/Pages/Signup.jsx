/* eslint-disable no-unused-vars */
import React, { use, useState } from 'react';
import signupAnimation from '../assets/Learning community animation.json';
import Lottie from 'lottie-react';
import Container from '../Components/Container/Container';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';
import { FcGoogle } from 'react-icons/fc';
import { updateProfile } from 'firebase/auth';
import { IoEye } from 'react-icons/io5';
import { IoEyeOff } from 'react-icons/io5';
import { toast } from 'react-toastify';
import { motion } from 'framer-motion';

const Signup = () => {
  const [passValid, setPassValid] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const { createSignup, setUser, GoogleLogin, setLoading } = use(AuthContext);
  const navigate = useNavigate();

  // Handle Email With Pass Signup
  const handleSignup = (e) => {
    e.preventDefault();
    const form = e.target;
    const displayName = form.name.value;
    const email = form.email.value;
    const photoURL = form.photo.value;
    const password = form.password.value;

    setPassValid('');
    if (password.length < 6) {
      setPassValid('At least 6 characters');
      return;
    }
    if (!/(?=.*[A-Z])/.test(password)) {
      setPassValid('Must include at least one uppercase letter (A–Z)');
      return;
    }
    if (!/(?=.*[a-z])/.test(password)) {
      setPassValid('Must include at least one lowercase letter (a–z)');
      return;
    }

    createSignup(email, password)
      .then((result) => {
        const userInfo = result.user;
        updateProfile(userInfo, {
          displayName,
          photoURL,
        })
          .then(() => {
            toast.success('Account created successfully! Welcome aboard 👋', {
              position: 'top-center',
              autoClose: 2500,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              theme: 'colored',
              className: 'bg-secendory text-white font-semibold rounded-xl shadow-lg',
            });
            setUser(userInfo);
            form.reset();
            navigate('/');
            console.log(userInfo);
          })
          .catch((e) => {
            alert('an error accuard', e.code);
          });
      })
      .catch((error) => {
        if (error.code === 'auth/email-already-in-use') {
          toast.error('That email is already registered. Try logging in instead.', {
            position: 'top-center',
            autoClose: 2500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: 'colored',
            className: 'bg-red-5000 text-white font-semibold rounded-xl shadow-lg',
          });
        }
        console.log(error.code);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  // Handle Google Login
  const handleGoogleLogin = () => {
    GoogleLogin()
      .then((result) => {
        toast.success('Account created successfully! Welcome aboard 👋', {
          position: 'top-center',
          autoClose: 2500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: 'colored',
          className: 'bg-secendory text-white font-semibold rounded-xl shadow-lg',
        });
        const userInfo = result.user;
        setUser(userInfo);
        navigate('/');
        console.log(userInfo);
      })
      .catch((error) => {
        console.log(error.code);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -30 }}
        transition={{
          duration: 0.6,
          ease: [0.25, 0.1, 0.25, 1],
        }}
      >
        <section className="my-10 lg:my-20 px-3 md:px-0">
          <Container>
            <div className="lg:flex items-center lg:flex-row gap-x-10">
              {/* Left Side Div */}
              <div className="flex-1  ">
                <Lottie className="lg:-ml-24 w-80 md:w-[600px] lg:w-[850px] mx-auto" animationData={signupAnimation}></Lottie>
                <div className="text-center lg:text-left">
                  <h1 className="font-bold text-lg md:text-2xl lg:text-3xl md:mt-4">Learn. Teach. Grow Together.</h1>
                  <p className="mt-1.5 text-xs md:text-base">
                    Discover skills around you and share what you love. <br />
                    Join the <strong className="bg-linear-to-r from-[#7DD3FC] via-[#0EA5E9] to-[#0369A1] bg-clip-text text-transparent drop-shadow-sm md:text-lg">Skillora</strong> community today.
                  </p>
                </div>
              </div>

              <div className="border-t md:hidden w-full my-5 border-primary/20"></div>
              {/* Right Side Div */}
              <div className="flex-1 md:px-20 md:py-10 box-shadow-signup">
                <div>
                  <h2 className="mb-3 md:mb-6 text-center lg:text-left text-xl md:text-2xl lg:text-3xl font-semibold">
                    Create Your{' '}
                    <strong className="bg-linear-to-r from-[#7DD3FC] via-[#0EA5E9] to-[#0369A1] bg-clip-text text-transparent drop-shadow-sm">
                      Skillora
                    </strong>{' '}
                    Account
                  </h2>
                  <form onSubmit={handleSignup}>
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
                      <div className="relative">
                        <input
                          type="password"
                          name="password"
                          className="input w-full placeholder:opacity-50 placeholder:text-xs md:placeholder:text-base mb-2"
                          placeholder="Enter Your Password"
                        />
                        {showPassword ? (
                          <IoEye
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute top-5 right-4 -translate-y-1/2 text-lg cursor-pointer"
                          />
                        ) : (
                          <IoEyeOff
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute top-5 right-4 -translate-y-1/2 text-lg cursor-pointer"
                          />
                        )}
                      </div>
                      <p className="text-xs text-red-500 -mt-2">{passValid && passValid}</p>
                      <div>
                        <p className="text-xs md:text-sm">
                          Already have an account?{' '}
                          <Link to="/login" className="text-primary font-semibold hover:underline">
                            Login
                          </Link>
                        </p>
                      </div>
                      <div>
                        <button className="btn btn-primary w-full font-bold mt-2 md:mt-4 box-shadow-signup-btn">Create Account</button>
                        <p className="text-lg text-center my-3 font-bold">or</p>
                      </div>
                    </fieldset>
                  </form>
                  {/* Google */}
                  <button onClick={handleGoogleLogin} className="btn btn-secondary w-full  font-bold  box-shadow-signup-btn">
                    <span className="bg-base-200 rounded-full">
                      <FcGoogle size={16} />
                    </span>{' '}
                    Continue with Google
                  </button>
                </div>
              </div>
            </div>
          </Container>
        </section>
      </motion.div>
    </>
  );
};

export default Signup;
