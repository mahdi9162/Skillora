import React from 'react';
import Container from '../Container/Container';
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';
import { RiInstagramFill } from 'react-icons/ri';
import logoImg from '../../assets/logo.png';

const Footer = () => {
  return (
    <>
      <footer className=" bg-base-200 text-base-content px-4 md:p-10 ">
        <Container>
          <div className="flex items-start flex-col md:flex-row gap-5 lg:gap-0 justify-between">
            <aside>
              <figure className="w-8 lg:w-12 animate-spin footer-animation-speed">
                <img src={logoImg} alt="Logo" />
              </figure>
              <p className="mt-2 text-xl lg:text-2xl font-bold text-primary">Skillora</p>
              <p className="font-medium text-xs lg:text-sm">Learn. Teach. Grow together.</p>
            </aside>

            <nav className="flex flex-col gap-1">
              <h6 className="footer-link-li-header">CONTACT INFO</h6>
              <a className="link link-hover footer-link-list">Contact Form</a>
              <a className="link link-hover footer-link-list ">Email Support</a>
              <a className="link link-hover footer-link-list ">Help Center</a>
              <a className="link link-hover footer-link-list ">Call Us</a>
            </nav>

            <nav className="flex flex-col gap-1">
              <h6 className="footer-link-li-header">PRIVACY POLICY</h6>
              <a className="link link-hover footer-link-list ">Privacy Policy</a>
              <a className="link link-hover footer-link-list ">Cookie Policy</a>
              <a className="link link-hover footer-link-list ">Terms of Service</a>
              <a className="link link-hover footer-link-list ">Data Protection & Security</a>
            </nav>
            <nav className="flex flex-col gap-1">
              <h6 className="footer-link-li-header">SOCIAL LINKS</h6>
              <a
                href="https://www.facebook.com/mahdi916"
                target="_blank"
                className="link link-hover flex items-center gap-x-2 footer-link-list"
              >
                <FaFacebook size={17} /> Facebook
              </a>
              <a
                href="https://www.instagram.com/rifu91629/?hl=en"
                target="_blank"
                className="link link-hover flex items-center gap-x-2 footer-link-list"
              >
                <RiInstagramFill size={18} /> Instagram
              </a>
              <a
                href="https://www.youtube.com/@ProgrammingHeroCommunity"
                target="_blank"
                className="link link-hover flex items-center gap-x-2 footer-link-list"
              >
                <FaYoutube size={18} /> Youtube
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
