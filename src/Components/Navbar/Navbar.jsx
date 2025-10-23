import React from 'react';
import { Link, NavLink } from 'react-router';
import Container from '../Container/Container';
import imgLogo from '../../assets/logo.png';

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

  return (
    <>
      <nav className="bg-base-200 shadow-sm">
        <Container>
          <div className="navbar py-4">
            <div className="navbar-start">
              <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    {' '}
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />{' '}
                  </svg>
                </div>
                <ul tabIndex="-1" className="menu menu-sm dropdown-content rounded-box z-1 mt-3 w-52 p-2 shadow">
                  {links}
                </ul>
              </div>
              <div className="flex items-center gap-2 md:gap-3">
                <figure className="w-4 md:w-8 lg:w-10 ">
                  <img src={imgLogo} alt="Logo" />
                </figure>
                <div>
                  <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-primary">Skillora</h2>
                  <p className="text-xs hidden md:inline ">Share what you know, Learn what you love.</p>
                </div>
              </div>
            </div>
            <div className="navbar-center hidden lg:flex">
              <ul className="flex items-center gap-5 menu-horizontal px-1">{links}</ul>
            </div>
            <div className="navbar-end">
              <Link className="btn btn-primary md:px-10 ">Login</Link>
            </div>
          </div>
        </Container>
      </nav>
    </>
  );
};

export default Navbar;
