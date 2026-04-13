import React from 'react'
import { Link } from 'react-router-dom'
import footerLogo  from "../assets/footer-logo.png"

import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa"

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 px-4">
      {/* Top Section */}
      <div className="container mx-auto flex flex-col justify-center items-center gap-8">
        {/* Left Side - Logo and Nav */}
        <div className="flex flex-col items-center w-full">
          {/* We will update this logo as part of the Header/Nav task later, for now we keep it centered */}
          <img src={footerLogo} alt="Logo" className="mb-5 w-36" />
          <ul className="flex flex-row gap-8">
            <li><Link to="/" className="hover:text-primary">Home</Link></li>
            <li><a href="#about" className="hover:text-primary">About Us</a></li>
            <li><Link to="/contact" className="hover:text-primary">Contact</Link></li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="container mx-auto flex flex-col md:flex-row justify-center items-center mt-10 border-t border-gray-700 pt-6">
        {/* Social Icons centered */}
        <div className="flex gap-6">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary">
            <FaFacebook size={24} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary">
            <FaTwitter size={24} />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary">
            <FaInstagram size={24} />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer