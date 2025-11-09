'use client';
import React, { use } from 'react';
import { Link, NavLink } from 'react-router';
import Container from '../Container/Container';
import imgLogo from '../../assets/logo.png';
import { AuthContext } from '../../Provider/AuthProvider';
import avatarImg from '../../assets/avatar.png';
import Loading from '../Loading/Loading';
import { toast } from 'react-toastify';

const Navbar = () => {
  const links = (
    <>
      <li className="text-lg">
        <NavLink to="/" className={({ isActive }) => (isActive ? 'active-nav-link-style' : 'inactive-nav-link-style')}>
          Home
        </NavLink>
      </li>
      <li className="text-lg">
        <NavLink to="/my-profile" className={({ isActive }) => (isActive ? 'active-nav-link-style' : 'inactive-nav-link-style')}>
          My Profile
        </NavLink>
      </li>
    </>
  );

  const { user, logout, loading } = use(AuthContext);

  const handleLogout = () => {
    logout()
      .then(() => {
        toast.success('Logged out successfully. See you soon!', {
          position: 'top-center',
          autoClose: 2500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: 'colored',
          className: 'bg-secendory text-white font-semibold rounded-xl shadow-lg',
        });
      })
      .catch((error) => {
        console.log(error.code);
      });
  };

  return (
    <>
      <nav className="bg-[#ffffffcc] backdrop-blur-sm shadow-md border-b border-[#eaeaea]/60 relative z-40">
        <Container>
          <div className="navbar py-4">
            <div className="navbar-start ">
              <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    {' '}
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />{' '}
                  </svg>
                </div>
                <ul tabIndex={0} className="menu menu-sm dropdown-content rounded-box z-50 mt-3 w-52 p-2 shadow bg-base-100">
                  {user && (
                    <li>
                      <Link to="/my-profile">
                        <div className="avatar avatar-online">
                          <div className="w-8 rounded-full">
                            <img src={user.photoURL || avatarImg} />
                          </div>
                        </div>
                        <span className="font-bold">{user.displayName}</span>
                      </Link>
                    </li>
                  )}
                  {links}
                </ul>
              </div>
              <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="flex items-center gap-2 md:gap-3">
                <figure className="w-4 md:w-8 lg:w-10 hidden md:inline ">
                  <img src={imgLogo} alt="Logo" />
                </figure>
                <div>
                  <h2 className="text-xl md:text-2xl lg:text-3xl font-bold bg-linear-to-r from-[#7DD3FC] via-[#0EA5E9] to-[#0369A1] bg-clip-text text-transparent drop-shadow-sm">
                    Skillora
                  </h2>
                  <p className="text-xs hidden md:inline text-accent">Share what you know, Learn what you love.</p>
                </div>
              </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
              <ul className="flex items-center gap-5 menu-horizontal px-1">{links}</ul>
            </div>

            <div className="navbar-end flex gap-2 md:gap-5">
              {loading ? (
                <div className="flex justify-center">
                  <span className="loading loading-spinner bg-secondary"></span>
                </div>
              ) : (
                <div className="flex gap-2 md:gap-5">
                  {user ? (
                    <Link onClick={handleLogout} to="/login" className="btn btn-primary md:px-10 ">
                      Logout
                    </Link>
                  ) : (
                    <Link to="/login" className="btn btn-primary md:px-10 ">
                      Login
                    </Link>
                  )}

                  <Link to="/signup" className={`${user ? 'hidden' : 'btn btn-primary md:px-10'}`}>
                    Signup
                  </Link>
                </div>
              )}
              <Link to="/my-profile">
                <div className={`${user ? 'inline' : 'hidden'} cursor-pointer tooltip`} data-tip={user?.displayName || 'Name is Null'}>
                  <div className="avatar avatar-online hidden md:inline">
                    <div className="w-8 md:w-12 rounded-full">
                      <img src={user?.photoURL ? user?.photoURL : avatarImg} referrerPolicy="no-referrer" />
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </Container>
      </nav>
    </>
  );
};

export default Navbar;
