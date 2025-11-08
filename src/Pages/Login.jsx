import React, { use, useState } from 'react';
import loginAnimation from '../assets/Welcome.json';
import Lottie from 'lottie-react';
import Container from '../Components/Container/Container';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';
import { FcGoogle } from 'react-icons/fc';
import { IoEye } from 'react-icons/io5';
import { IoEyeOff } from 'react-icons/io5';

const Login = () => {
  const { userLogin, GoogleLogin } = use(AuthContext);
  const [passValid, setPassValid] = useState('');
  const [email, setEmail] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  // Handle Email With Pass Login
  const handleLogin = (e) => {
    e.preventDefault();

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    // Varify
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

    userLogin(email, password)
      .then((result) => {
        const userInfo = result.user;
        form.reset();
        navigate('/');
        console.log(userInfo);
      })
      .catch((error) => {
        console.log(error.code);
      });
  };

  // Handle Google Login
  const handleGoogleLogin = () => {
    GoogleLogin()
      .then((result) => {
        const userInfo = result.user;
        navigate('/');
        console.log(userInfo);
      })
      .catch((error) => {
        console.log(error.code);
      });
  };

  return (
    <>
      <section className="my-10 md:my-30 px-3 lg:px-0">
        <Container>
          <div className="lg:flex items-center lg:flex-row gap-x-30">
            {/* Left Side Div */}
            <div className="flex-1  ">
              <Lottie className="w-72 md:w-96 lg:w-[600px] mx-auto" animationData={loginAnimation}></Lottie>
              <div className="text-center  lg:text-left">
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
                  <h2 className="text-center md:text-left text-xl md:text-3xl font-bold text-slate-800 mb-1 tracking-widest">
                    Welcome back!
                  </h2>
                  <p className="text-slate-600 text-sm mb-6 text-center md:text-left">Sign in to your account</p>
                </div>

                <form onSubmit={handleLogin}>
                  <fieldset className="fieldset">
                    {/* Email */}
                    <label className="label text-base-content">Email</label>
                    <input
                      onChange={(e) => setEmail(e.target.value)}
                      type="email"
                      name="email"
                      value={email}
                      className="input w-full placeholder:opacity-50 placeholder:text-xs md:placeholder:text-base mb-2"
                      placeholder="Enter Your Email"
                    />
                    {/* Password */}
                    <label className="label text-base-content">Password</label>
                    <div className="relative">
                      <input
                        type={showPassword ? 'text' : 'password'}
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
                      <Link to="/forgot-password" state={{ email: email }} className="link link-hover">
                        Forgot password?
                      </Link>
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
                      <button className="btn btn-primary md:w-full md:text-lg font-bold mt-4">Login</button>
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
    </>
  );
};

export default Login;
