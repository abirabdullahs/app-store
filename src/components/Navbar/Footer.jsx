// src/components/Footer.jsx
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import Logo from '../../assets/images/logo.png'; // adjust path

const Footer = () => {
  return (
    <footer className="bg-black text-white py-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4">
        {/* Logo */}
        <div className="flex items-center mb-4 md:mb-0">
          <img src={Logo} alt="Hero.IO" className="h-8 mr-2" />
          <span className="font-bold text-lg">HERO.IO</span>
        </div>

        {/* Social Links */}
        <div className="flex space-x-4 mb-4 md:mb-0 px-10">
          <a
            href="#"
            className="hover:text-blue-500 transition-colors duration-200"
            aria-label="LinkedIn"
          >
            <FaLinkedinIn />
          </a>
          <a
            href="#"
            className="hover:text-blue-500 transition-colors duration-200"
            aria-label="Facebook"
          >
            <FaFacebookF />
          </a>
        </div>

      </div>
      <footer className="footer sm:footer-horizontal bg-neutral text-neutral-content p-10">
        <nav>
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </footer>
      {/* Copyright */}
      <p className="text-sm mt-4 text-center">&copy; 2025 - All rights reserved</p>
    </footer>
  );
};

export default Footer;
