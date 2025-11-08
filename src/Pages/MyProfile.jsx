import React, { use, useRef, useState } from 'react';
import Container from '../Components/Container/Container';
import avatarImg from '../assets/avatar.png';
import { AuthContext } from '../Provider/AuthProvider';
import { FaGoogle } from 'react-icons/fa';
import { MdOutlineEmail } from 'react-icons/md';
import { format } from 'date-fns';
import Loading from '../Components/Loading/Loading';
import { getAuth, updateProfile } from 'firebase/auth';
import { toast } from 'react-toastify';
import { Link } from 'react-router';
import { app } from '../Firebase/firebase.config';

const MyProfile = () => {
  const { user, setUser, loading, logout } = use(AuthContext);
  const [isUpdateing, setIsUpdating] = useState(false);
  const [statusMessage, setStatusMessage] = useState('Changes will update your Skillora profile info.');
  const updateYourProfile = useRef(null);
  const auth = getAuth(app);
  if (loading) {
    return (
      <div className="flex justify-center min-h-screen">
        <Loading></Loading>
      </div>
    );
  }

  if (!user) {
    return <div>User not found!</div>;
  }

  const { displayName, email, photoURL, providerData, metadata } = user;

  const creationTime = new Date(metadata.creationTime);
  const formattedTime = format(creationTime, 'MMMM do, yyyy - h:mm a');

  const handleScrollToUpdateProfile = () => {
    if (updateYourProfile.current) {
      updateYourProfile.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleUpdateProfile = (e) => {
    e.preventDefault();
    const form = e.target;
    const nameValue = form.name.value;
    const photoInput = form.photoURL.value;

    const displayName = nameValue || user.displayName;
    const photoURL = photoInput || user.photoURL;

    setIsUpdating(true);
    setStatusMessage('We’ll update your profile in a moment…');

    setTimeout(() => {
      updateProfile(auth.currentUser, {
        displayName,
        photoURL,
      })
        .then(() => {
          // const newUser = { displayName: displayName, photoURL: photoURL };
          // setUser({ ...user, newUser });
          setUser((prev) => ({
            ...prev,
            displayName,
            photoURL,
          }));
          toast.success('Profile updated successfully 🎉', {
            position: 'top-center',
            autoClose: 2500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: 'colored',
            className: 'bg-secendory text-white font-semibold rounded-xl shadow-lg',
          });
          form.reset();
        })
        .catch((error) => {
          console.log(error);
          toast.error('Update failed. Please try again.', {
            position: 'top-center',
            autoClose: 2500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: 'colored',
            className: 'bg-red-5000 text-white font-semibold rounded-xl shadow-lg',
          });
          setStatusMessage('Error! Please try again.');
        })
        .finally(() => {
          setIsUpdating(false);
          setStatusMessage('Changes will update your Skillora profile info.');
        });
    }, 3000);
  };

  const handleLogout = () => {
    logout()
      .then(() => {
        alert('logout successfully');
      })
      .catch((error) => {
        console.log(error.code);
      });
  };

  const handleClearForm = () => {};

  return (
    <>
      {/* My Profile */}
      <Container>
        <section className="mt-10 mb-6 mx-3 lg:mx-0">
          <div className="relative overflow-hidden rounded-4xl bg-linear-to-r from-sky-50 via-sky-100/60 to-white shadow-[0_18px_45px_rgba(15,23,42,0.12)] border border-white/70 px-5 py-6 md:px-10 md:py-8">
            {/* subtle background blob */}
            <div className="pointer-events-none absolute -right-16 -top-10 h-40 w-40 rounded-full bg-sky-200/40 blur-3xl" />
            <div className="pointer-events-none absolute -left-16 bottom-0 h-32 w-32 rounded-full bg-cyan-200/40 blur-3xl" />

            <div className="relative z-10 flex flex-col gap-6 lg:flex-row md:items-center md:justify-between">
              {/* Avatar + basic info */}
              <div className="flex flex-col md:flex-row text-center lg:text-left items-center gap-4 md:gap-6">
                {/* avatar */}
                <div className="relative">
                  <div className="h-20 w-20 md:h-28 md:w-28 rounded-full border-4 border-white shadow-md overflow-hidden bg-slate-100">
                    <img
                      src={photoURL || avatarImg}
                      referrerPolicy="no-referrer"
                      alt={displayName || 'User avatar'}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  {/* online dot means He/She is Online */}
                  <span className="absolute -right-1 bottom-2 h-4 w-4 rounded-full border-2 border-white bg-emerald-500 shadow-sm" />
                </div>

                <div className="space-y-1">
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-slate-900">{displayName}</h2>
                  <p className="text-sm md:text-base text-slate-500">{email}</p>
                  <p className="text-xs md:text-sm text-slate-400">Member since: {formattedTime}</p>
                </div>
              </div>

              {/* Buttons */}
              <div className="flex flex-col items-center gap-3 sm:flex-row sm:items-center">
                {providerData[0]?.providerId === 'google.com' ? (
                  <div className="inline-flex items-center gap-2 rounded-full bg-sky-100/70 px-4 py-2 text-sm font-medium text-sky-700 shadow-sm">
                    <FaGoogle className="text-base" />
                    <span>Logged in with Google</span>
                  </div>
                ) : (
                  <div className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-slate-600 shadow-sm">
                    <MdOutlineEmail className="text-base" />
                    <span>Logged in with Email</span>
                  </div>
                )}

                <button
                  onClick={handleScrollToUpdateProfile}
                  ref={updateYourProfile}
                  type="button"
                  className="inline-flex items-center justify-center rounded-full bg-orange-500 px-6 py-2.5 text-sm font-semibold text-white shadow-md transition-transform duration-200 hover:bg-orange-600 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-400/70 active:scale-[0.97] cursor-pointer"
                >
                  Update Profile
                </button>
              </div>
            </div>
          </div>
        </section>
      </Container>

      {/* Profile Overview */}
      <Container>
        <section className="my-10 py-8 px-5 md:px-10 lg:px-20 mx-3 lg:mx-0 rounded-4xl bg-linear-to-br from-[#E0F7FF]/60 via-white to-[#F8FBFD] shadow-[0_10px_40px_rgba(14,165,233,0.08)] border border-white/60 backdrop-blur-sm">
          {/* Section Header */}
          <div className="mb-6 border-b border-sky-100/70 pb-4">
            <h1 className="text-2xl md:text-3xl font-semibold text-slate-800">Profile Overview</h1>
            <p className="text-sm text-slate-500">View your current account information</p>
          </div>

          {/* Content Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* Left Info */}
            <div className="space-y-2 text-slate-700">
              <p className="text-sm md:text-base">
                <span className="font-medium">Name:</span> <span className=" text-slate-600">{displayName}</span>
              </p>
              <p className="text-sm md:text-base">
                <span className="font-medium">Email:</span> <span className="text-slate-600">{email}</span>
              </p>
              <p className="text-sm md:text-base">
                <span className="font-medium">User ID:</span> <span className="text-slate-600 break-all">{providerData[0]?.uid}</span>
              </p>
              <p className="text-sm md:text-base">
                <span className="font-medium">Member Since:</span> <span className="text-slate-600">{formattedTime}</span>
              </p>
            </div>

            {/* Right Info */}
            <div className="flex flex-col items-start md:items-end gap-2 md:gap-3">
              <p className="text-slate-700 text-sm md:text-base">
                Total Sessions Booked:{' '}
                <span className="inline-block bg-sky-100 text-sky-700 text-xs font-semibold px-3 py-1 rounded-full shadow-sm">0</span>
              </p>
              <p className="text-slate-700 text-sm md:text-base">
                Account Status:{' '}
                <span className="inline-block bg-emerald-100 text-emerald-700 text-xs font-semibold px-3 py-1 rounded-full shadow-sm">
                  Active
                </span>
              </p>
            </div>
          </div>
        </section>
      </Container>

      {/* Update Your Profile */}
      <Container>
        <section className="my-10 py-8 px-5 md:px-10 lg:px-20 mx-3 lg:mx-0 rounded-4xl bg-linear-to-br from-[#E0F7FF]/60 via-white to-[#F8FBFD] shadow-[0_10px_40px_rgba(14,165,233,0.08)] border border-white/60 backdrop-blur-sm">
          {/* Header */}
          <div className="mb-6">
            <h2 className="text-2xl md:text-3xl font-semibold text-slate-800">Update your profile</h2>
            <p className="text-sm text-slate-500 mt-2">You can update your display name and profile photo.</p>
          </div>

          {/* Content */}
          <div className="flex flex-col lg:flex-row justify-between items-start gap-6 md:gap-10 lg:gap-16 mt-8">
            {/* Left: Form */}
            <form onSubmit={handleUpdateProfile} className="space-y-5 max-w-md w-full">
              {/* Name */}
              <div className="flex flex-col">
                <label className="text-sky-800 font-medium mb-1 tracking-wide text-sm md:text-base">Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter Your Full Name"
                  className="w-full px-4 py-2.5 rounded-xl border border-sky-200 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:border-transparent transition-all duration-200 bg-white shadow-sm placeholder:text-sm md:placeholder:text-base placeholder:opacity-40"
                  required
                />
              </div>

              {/* Photo */}
              <div className="flex flex-col">
                <label className="text-sky-800 font-medium mb-1 tracking-wide text-sm md:text-base">Photo URL</label>
                <input
                  type="text"
                  name="photoURL"
                  placeholder="Enter Your Photo URL"
                  className="w-full px-4 py-2.5 rounded-xl border border-sky-200 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:border-transparent transition-all duration-200 bg-white shadow-sm placeholder:text-sm md:placeholder:text-base placeholder:opacity-40"
                  required
                />
              </div>

              {/* Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  type="submit"
                  disabled={isUpdateing}
                  className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-3 rounded-xl transition-all duration-500 shadow-md hover:shadow-lg animate__animated animate__pulse animate__infinite cursor-pointer"
                  style={{ '--animate-duration': '2.5s' }}
                  onMouseEnter={(e) => e.currentTarget.classList.remove('animate__pulse')}
                  onMouseLeave={(e) => e.currentTarget.classList.add('animate__pulse')}
                >
                  {isUpdateing ? 'Saving...' : 'Save Changes'}
                </button>

                <button
                  onClick={handleClearForm}
                  type="button"
                  className="px-6 py-3 rounded-xl border border-slate-200 text-slate-600 hover:bg-red-400 hover:text-white duration-500 text-sm font-medium transition-all cursor-pointer"
                >
                  Cancel
                </button>
              </div>
              <p className="text-xs md:text-sm text-slate-400">{statusMessage}</p>
            </form>

            {/* Right: Preview */}
            {/* Right Div – Current Preview */}
            <div className="flex items-center justify-center lg:justify-end mt-4 md:mt-10 lg:mt-0">
              <div className="bg-white/70 rounded-3xl border border-white/80 shadow-[0_18px_45px_rgba(15,23,42,0.12)] px-8 py-8 lg:px-10 lg:py-9 max-w-sm">
                <p className="text-xs font-semibold tracking-[0.25em] text-sky-500 uppercase text-center mb-6">Current Preview</p>

                <div className="flex flex-col md:flex-row items-center gap-4">
                  <div className="avatar">
                    <div className="w-40 md:w-20 h-20 rounded-2xl overflow-hidden shadow-md ring-2 ring-sky-100">
                      <img
                        src={photoURL || avatarImg}
                        alt="Current avatar"
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>

                  <div className="space-y-1 text-center md:text-left">
                    <p className="text-base font-semibold text-slate-900 leading-tight">{displayName}</p>
                    <p className="text-xs text-slate-500 break-all">{email}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Container>

      {/* Account Actions */}
      <Container>
        <section className="flex flex-col md:flex-row justify-between items-center gap-6 my-12 py-8 px-6 md:px-10 lg:px-20 rounded-4xl bg-linear-to-br from-[#E0F7FF]/50 via-white to-[#F8FBFD] shadow-[0_12px_35px_rgba(14,165,233,0.08)] border border-white/60 backdrop-blur-sm">
          {/* Title */}
          <h2 className="text-xl md:text-2xl font-semibold text-slate-800 tracking-tight">Account Actions</h2>

          {/* Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            <Link className="px-8 py-3 rounded-xl text-sm font-medium text-white bg-sky-500 hover:bg-sky-600 transition-all shadow-md hover:shadow-lg">
              Change Password
            </Link>

            <button
              onClick={handleLogout}
              className="px-8 py-3 rounded-xl text-sm font-medium text-sky-600 bg-white border border-sky-200 hover:bg-sky-50 transition-all shadow-sm hover:shadow-md cursor-pointer"
            >
              Logout
            </button>
          </div>
        </section>
      </Container>
    </>
  );
};

export default MyProfile;
