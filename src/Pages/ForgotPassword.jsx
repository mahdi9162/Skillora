import React, { use } from 'react';
import Container from '../Components/Container/Container';
import { Link, useLocation } from 'react-router';
import { FaArrowLeftLong } from 'react-icons/fa6';
import { AuthContext } from '../Provider/AuthProvider';
import { toast } from 'react-toastify';

const ForgotPassword = () => {
  const location = useLocation();
  const { resetPassword } = use(AuthContext);
  const passedEmail = location.state?.email;

  const handleForgotPassword = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;

    resetPassword(email)
      .then(() => {
        toast.success('Reset link sent to your email.', {
          position: 'top-center',
          autoClose: 2500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: 'colored',
          className: 'bg-secendory text-white font-semibold rounded-xl shadow-lg',
        });
        setTimeout(() => {
          window.location.href = 'https://mail.google.com/mail/u/0/#inbox';
        }, 3000);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <Container>
      <section className="my-12 flex justify-center">
        <div className="w-full max-w-md mx-3 md:mx-0 rounded-3xl bg-linear-to-br from-[#E0F7FF]/70 via-white to-[#F8FBFD] shadow-[0_18px_60px_rgba(15,23,42,0.12)] border border-white/70 backdrop-blur-sm px-6 py-8 md:px-10 md:py-10 space-y-8">
          {/* Top tiny title */}
          <div className="space-y-1 text-center">
            <p className="text-xs font-semibold tracking-[0.18em] uppercase text-sky-600">Forgot your password?</p>
            <p className="text-xs md:text-sm text-slate-500">No worries — just enter your email below, and we’ll send you a reset link.</p>
          </div>

          {/* Main heading */}
          <div className="space-y-2 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Reset Password</h2>
            <p className="text-sm text-slate-500">Enter the email associated with your account.</p>
          </div>

          {/* Form */}
          <form onSubmit={handleForgotPassword} className="space-y-3">
            <div className="flex flex-col gap-1">
              <label htmlFor="email" className="text-sky-800 font-medium tracking-wide text-sm md:text-base">
                Email address
              </label>
              <input
                id="email"
                type="email"
                name="email"
                defaultValue={passedEmail}
                placeholder="Enter your email address"
                className="w-full px-4 py-2.5 rounded-xl border border-sky-200 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:border-transparent transition-all duration-200 bg-white shadow-sm placeholder:text-sm md:placeholder:text-base placeholder:opacity-40"
                required
              />
            </div>

            <p className="text-xs md:text-sm text-slate-500">We’ll send a secure reset link to this email.</p>

            <button
              type="submit"
              className="w-full mt-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded-xl transition-all duration-300 shadow-md hover:shadow-lg cursor-pointer"
            >
              Send Reset Link
            </button>
          </form>

          {/* Back link */}
          <div className="pt-2 flex justify-center">
            <Link to="/login" className="flex items-center gap-2 text-sm font-medium text-sky-700 hover:text-sky-800">
              <FaArrowLeftLong className="text-base" />
              <span className="underline decoration-sky-300 decoration-2 underline-offset-4">Back to Login</span>
            </Link>
          </div>
        </div>
      </section>
    </Container>
  );
};

export default ForgotPassword;
