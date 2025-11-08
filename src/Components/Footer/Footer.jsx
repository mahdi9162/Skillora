import React from 'react';
import Container from '../Container/Container';
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';
import { RiInstagramFill } from 'react-icons/ri';
import logoImg from '../../assets/logo.png';

const Footer = () => {
  return (
    <>
      <footer className=" bg-base-200 text-base-content px-4 py-4 md:py-10">
        <Container>
          <div className="flex items-start flex-col md:flex-row gap-5 lg:gap-0 justify-between">
            <aside>
              <figure className="w-8 lg:w-12 animate-spin footer-animation-speed">
                <img src={logoImg} alt="Logo" />
              </figure>
              <p className="my-2 text-xl lg:text-3xl font-bold bg-linear-to-r from-[#7DD3FC] via-[#0EA5E9] to-[#0369A1] bg-clip-text text-transparent drop-shadow-sm">
                Skillora
              </p>
              <p className="font-medium text-xs lg:text-sm text-accent">Learn. Teach. Grow together.</p>
            </aside>

            <nav className="flex flex-col gap-1 text-accent">
              <h6 className="footer-link-li-header">CONTACT INFO</h6>
              <a className="link link-hover footer-link-list">Contact Form</a>
              <a className="link link-hover footer-link-list ">Email Support</a>
              <a className="link link-hover footer-link-list ">Help Center</a>
              <a className="link link-hover footer-link-list ">Call Us</a>
            </nav>

            <nav className="flex flex-col gap-1 text-accent">
              <h6 className="footer-link-li-header">PRIVACY POLICY</h6>
              <a className="link link-hover footer-link-list ">Privacy Policy</a>
              <a className="link link-hover footer-link-list ">Cookie Policy</a>
              <a className="link link-hover footer-link-list ">Terms of Service</a>
              <a className="link link-hover footer-link-list ">Data Protection & Security</a>
            </nav>
            <nav className="flex flex-col gap-1 ">
              <h6 className="footer-link-li-header ">SOCIAL LINKS</h6>
              <a
                href="https://www.facebook.com/mahdi916"
                target="_blank"
                className="link link-hover flex items-center gap-x-2 footer-link-list"
              >
                <FaFacebook size={17} /> <span className='text-accent'>Facebook</span>
              </a>
              <a
                href="https://www.instagram.com/rifu91629/?hl=en"
                target="_blank"
                className="link link-hover flex items-center gap-x-2 footer-link-list"
              >
                <RiInstagramFill size={18} /> <span className='text-accent'>Instagram</span>
              </a>
              <a
                href="https://www.youtube.com/@ProgrammingHeroCommunity"
                target="_blank"
                className="link link-hover flex items-center gap-x-2 footer-link-list"
              >
                <FaYoutube size={18} /> <span className='text-accent'>Youtube</span>
              </a>
            </nav>
          </div>
        </Container>
      </footer>

      <div className="bg-neutral py-3 text-center text-xs lg:text-base text-primary-content tracking-widest mt-5">
        <Container>
          <p>© {new Date().getFullYear()} Skillora | All rights reserved.</p>
        </Container>
      </div>
    </>
  );
};

export default Footer;
