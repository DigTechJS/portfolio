import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from '../assets/profile1.jpg';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/github-mark-white.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';
import navIcon4 from '../assets/img/leetcode.svg'
import { HashLink } from 'react-router-hash-link';
import {
  BrowserRouter as Router
} from "react-router-dom";

const 
Navbarr = () => {

  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }
  const handleClick = () => {
    window.location.href = `mailto:shreyajain11072003@gmail.com`;
  };

  return (
    <Router>
      <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand href="/">
            <img className="profile" src={logo} alt="Logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
              <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
              <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
              <Nav.Link href="#achievements" className={activeLink === 'achievements' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('achievements')}>Achievements</Nav.Link>
            </Nav>
            <span className="navbar-text">
              <div className="social-icon">
                <a  href="https://www.linkedin.com/in/shreya-jain-98b072219/"  target="_blank"><img src={navIcon1} alt="" /></a>
                <a href="https://github.com/DigTechJS" target="_blank"><img id="navIcon2" src={navIcon2} alt="" /></a>
                <a href="https://www.instagram.com/shreya_jain_shreya/"  target="_blank"><img src={navIcon3} alt="" /></a>
                <a href="https://leetcode.com/u/shreyajainofficial/"  target="_blank"><img src={navIcon4} alt="" /></a>
              </div>
              <HashLink to='#connect'>
                <button className="vvd" onClick={handleClick}><span>Let's Connect over mail</span></button>
              </HashLink>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
  )
}
export default Navbarr;