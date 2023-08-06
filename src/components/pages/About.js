import React from 'react'
import { about  } from '../data/Data';
import styled from "styled-components";

const AboutText = styled.div`
  @media (max-width: 991px) {
    margin-top: 40px;
  }
  h3 {
    font-size: 35px;
    font-weight: 700;
    margin: 0 0 10px;
    color: #707070;
  }
  @media (max-width: 767px) {
    h3 {
      font-size: 35px;
    }
  }
  h4 {
    font-weight: 600;
    margin-bottom: 15px;
    color: #707070;
  }
  @media (max-width: 767px) {
    h4 {
      font-size: 18px;
    }
  }
  p {
    font-size: 18px;
    mark {
      font-weight: 600;
      color: #3a3973;
    }
  }
  .btn-bar {
    padding-top: 8px;
    a {
      min-width: 150px;
      text-align: center;
      margin-right: 10px;
    }
  }
`;


const AboutImg = styled.div`
  box-shadow: 0 5px 14px 0 rgba(0, 0, 0, 0.06);
  padding: 10px;
  background: #ffffff;
  border-radius: 8px;
  @media (max-width: 991px) {
    margin-top: 30px;
  }
`;


const Section = styled.div`
  padding: 120px 0;
  position: relative;
  background-color: #ebf4fa;
`;

const PxBtnTheme = styled.a`
  padding: 0 20px;
  text-decoration: none;
  line-height: 42px;
  margin-right: 20px !important;
  border: 2px solid transparent;
  position: relative;
  display: inline-block;
  background: #7564e5;
  border: none;
  color: #fff;
  -moz-transition: ease all 0.35s;
  -o-transition: ease all 0.35s;
  -webkit-transition: ease all 0.35s;
  transition: ease all 0.35s;
    border-radius: 5px;
    font-size: 16px;
    font-weight: 500;
    &:hover {
      color: #fff;
    }
`;
const ThemeT = styled.a`
    background: transparent;
    border: 2px solid #7564e5;
    color: #7564e5;
    padding: 9px 20px;
    text-decoration: none;
    border-radius: 5px;
    color: #7564e5;
`;

export const About = () => {
    return (
      <Section className="section about-section gray-bg" id="about">
        <div className="container">
          <div className="row align-items-center justify-content-around flex-row-reverse">
            {about.map((val) => (
              <>
            <div className="col-lg-6" data-aos='fade-down-left'>
              <AboutText className="about-text">
                <h3 className="dark-color">{val.head3}</h3>
                <h4 className="theme-color">{val.head4}</h4>
                <p>{val.desc1}</p>
                <div className="btn-bar">
                  <PxBtnTheme className="px-btn theme" href="/" data-aos='zoom-in'>{val.btn1}</PxBtnTheme>
                  <ThemeT className="px-btn theme-t" href="/" data-aos='fade-left'>{val.btn2}</ThemeT>
                </div>
              </AboutText>
            </div>
            <div className="col-lg-5 text-center" data-aos='fade-down-right'>
              <AboutImg className="about-img">
                <img
                  src={val.cover}
                  className='img-fluid'
                  alt=""
                />
              </AboutImg>
            </div>
            </>
              ))}
          </div>
        </div>
      </Section>
    );
  }