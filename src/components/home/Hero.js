import React from "react";
import styled from "styled-components";
import { RiArrowRightCircleLine } from 'react-icons/ri';
import webMaker from '../images/webMaker.jpg';

const Header = styled.div`
  position: relative;
  padding: 90px 0;
  margin-top: 90px;
  background-position: center;
  background-size: cover;
  background-attachment: fixed;
  background-repeat: no-repeat;
  background: #fff;
`;
const Cont = styled.div`
  width: 100%;
  text-align: left;
`;
const Head = styled.h2`
  font-family: 'Quicksand', sans-serif;
  color: #707070 !important;
  font-size: 40px;
  font-weight: 700;
  margin-bottom: 20px;
`;
const Span = styled.span`
  color: #7564e5;
`;
const Ul = styled.ul`
  margin-left: -30px;
  margin-bottom: 30px;
  
`;
const Li = styled.li`
  font-size: 22px;
  list-style: none;
  color: #707070;
`;
const A = styled.a`
    font-size: 22px;
    padding: 7px 20px;
    border: 2px solid #7564e5;
    color: #7564e5;
    &:hover {
        color: #fff;
        background: #7564e5;
    }
`;
const HeadImg = styled.div`
    position: relative;
    overflow: hidden;
    text-align: right;
`;
const Imag = styled.img`
    width: 900px;
    height: 500px;
`;
const Icon = styled.i`
    margin-right: 15px;
`;

function Hero() {
  return (
    <Header id="homecomp4">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-7">
            <Cont className="header-content">
              <Head>
                <Span>We</Span> Design amazing<Span> websites</Span> for your bussiness
              </Head>
              <Ul className="fa-ul">
                <Li>
                  <Icon className="fa-li">
                    <RiArrowRightCircleLine color="#7564e5" size='26px'/>
                  </Icon>
                  CEO and digital marketing
                </Li>
                <Li>
                  <Icon className="fa-li">
                    <RiArrowRightCircleLine color="#7564e5" size='26px'/>
                  </Icon>
                  Intuitive design
                </Li>
                <Li>
                  <Icon className="fa-li">
                    <RiArrowRightCircleLine color="#7564e5" size='26px'/>
                  </Icon>
                  Easy contact with customers
                </Li>
                <Li>
                  <Icon className="fa-li">
                    <RiArrowRightCircleLine color="#7564e5" size='26px'/>
                  </Icon>
                  Responsive design
                </Li>
              </Ul>
              <A className="btn" href="/">
                Read More
              </A>
            </Cont>
          </div>
          <div className="col-md-5">
            <HeadImg className="header-img">
              <Imag src={webMaker} alt="Product" className="img-fluid"/>
            </HeadImg>
          </div>
        </div>
      </div>
    </Header>
  );
}

export default Hero;