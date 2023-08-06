import React from 'react'
import { FaHome, FaEnvelope, FaPhone, FaRegGem } from 'react-icons/fa';
import { BsPhone } from 'react-icons/bs';
import { footerSoc } from '../data/Data';
import styled from 'styled-components';

const Head = styled.h6`
   font-family: 'Kaushan Script', cursive;
   color: #7564e5;
   font-size: 25px;
`;
const Head6 = styled.h6`
  color: #7564e5;
`;

const A = styled.a`
  text-decoration: none;
`;
const Ad = styled.a`
  text-decoration: none;
  font-family: 'Kaushan Script', cursive;
  font-size: 18px;
  color: #7564e5 !important;
`;
const Copy = styled.div`
  background-color: rgba(0, 0, 0, 0.05) !important;
`;
const FooterBot = styled.div`
  border-bottom: 1px solid #282828;
  z-index: 2;
  text-align: center;
  position: relative;
  padding-top: 40px;
  padding-bottom: 40px;
  .copyright {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    span {
      font-weight: bold;
    }
  }

  .credits {
    margin-left: auto;
    justify-content: end;
    a {
      color: #7564e5;
      text-align: right;
      text-decoration: none;
      &:hover {
        text-decoration: none;
      }
    }
  }
`;
const Ic = styled.i`
  font-size: 30px;
  padding-top: 5px;
`;
const Icon = styled.i`
    color: #7564e5;
    width: 30px;
    height: 30px;
    padding: 6px 10px;
    border-radius: 50%;
    border: 1px solid #7564e5;
    font-size: 14px;
    &:hover {
      color: #fff;
      background: #7564e5;
    }
`;
export const Footer = () => {
  return (
    
<footer className="text-center text-lg-start bg-light text-muted">
    <FooterBot className="container footer-bottom clearfix d-flex">
      <div className="copyright" data-aos='fade-right'>
        &copy; Copyright. All Rights Reserved.  
      </div>
      {footerSoc.map((val) => (
      <div className="credits" data-aos='flip-left'>
        <a href='/'><Icon>{val.icon}</Icon></a>
      </div>
       ))}
    </FooterBot>
  <section className="">
    <div className="container text-center text-md-start mt-5">
      <div className="row mt-3">
        <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4" data-aos='fade-up'>
          <Head className="fw-bold mb-4"><Ic className="me-4"><FaRegGem /></Ic>frontEnd</Head>
          <p>Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        </div>
        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4" data-aos='fade-up'>
          <Head6 className="text-uppercase fw-bold mb-4">Products</Head6>
          <p><A href="#!" className="text-reset">Design</A></p>
          <p><A href="#!" className="text-reset">Development</A></p>
          <p><A href="#!" className="text-reset">UX Experience</A></p>
          <p><A href="#!" className="text-reset">UI Experience</A></p>
        </div>
        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4" data-aos='fade-up'>
          <Head6 className="text-uppercase fw-bold mb-4">Useful links</Head6>
          <p><A href="#!" className="text-reset">Pricing</A></p>
          <p><A href="#!" className="text-reset">Settings</A></p>
          <p><A href="#!" className="text-reset">Orders</A></p>
          <p><A href="#!" className="text-reset">Help</A></p>
        </div>
        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4" data-aos='fade-up'>
          <Head6 className="text-uppercase fw-bold mb-4">Contact</Head6>
          <p><Icon className="me-3"><FaHome /></Icon> Louisville Ky, US</p>
          <p><Icon className="me-3"><FaEnvelope /></Icon>info@example.com</p>
          <p><Icon className="me-3"><FaPhone /></Icon> + 01 234 567 88</p>
          <p><Icon className="me-3"><BsPhone /></Icon> + 01 234 567 89</p>
        </div>
      </div>
    </div>
  </section>
  <Copy className="text-center p-4 copy">
    © 2021 Copyright:
    <Ad className="text-reset fw-bold"> myWebsite.com</Ad>
  </Copy>
</footer>
  );
}
