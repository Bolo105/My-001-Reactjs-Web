import React  from "react";
import { Link } from 'react-router-dom'
import { FaBars, FaRegGem } from 'react-icons/fa';
import './Header.css'
import styled from "styled-components";

const Head = styled.h6`
   font-family: 'Kaushan Script', cursive;
   color: #7564e5;
   font-size: 25px;
`;
const Ic = styled.i`
  font-size: 30px !important;
  padding-top: 25px;
`;

export const Header = () => {

  return (
    <header id="header" >
    <div className="container d-flex align-items-center justify-content-lg-between">
    <nav className="navbar navbar-expand-lg navbar-light bg-white py-3 fixed-top">
    <div className="container">
    <Head className="fw-bold mb-4"><Ic className="me-3"><FaRegGem /></Ic>frontEnd</Head>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" style={{color: '#fff', backgroundColor: '#7564e5'}}>
        <span><i id = "bar" className="fas fa-bars"><FaBars color="#fff"/></i></span>
      </button>
      <div className="collapse navbar-collapse justify-content-around" id="navbarSupportedContent">
        <ul className="navbar-nav ">
          <Link className="nav-item pt-2" to="/"><a className="nav-link active" href="#/">Home</a></Link>
          <Link className="nav-item pt-2" to="/about"><a className="nav-link" href="#/about">About</a></Link>
          <Link className="nav-item pt-2" to="/portfolio"><a className="nav-link" href="#/portfolio">Portfolio</a></Link>
          <Link className="nav-item pt-2" to="/services"><a className="nav-link" href="#/services">Services</a></Link>
          <Link className="nav-item pt-2" to="/team"><a className="nav-link" href="#/team">Team</a></Link>
          <Link className="nav-item pt-2" to="/testimonials"><a className="nav-link" href="#/testimonials">Testimonials</a></Link>
          <Link className="nav-item pt-2" to="/contact"><a className="nav-link" href="#/contact">Contact</a></Link>
          <a href="#about" className="get-started-btn" style={{marginLeft: '40px'}}>Get Started</a>
        </ul>
      </div>
      
    </div>
  </nav>
  </div>
  </header>
  );
}


