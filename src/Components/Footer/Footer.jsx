import React from 'react'
import './footer.css'
import logo from '../../assets/profile1.jpg';

const Footer = () => {
  return (
    <section id="footer" className="footer">
      {/* <img className="profile" src={logo} alt="Logo" /> */}
      <span>Created with love and passion by Shreya Jain</span>
      <img className="profile" src={logo} alt="Logo" />
    </section>
  )
}

export default Footer