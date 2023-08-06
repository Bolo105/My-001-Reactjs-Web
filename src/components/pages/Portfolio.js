import React from 'react'
import { FaSearch } from 'react-icons/fa';
import { portfolio } from '../data/Data';
import { Heading } from '../common/Heading';
import styled from 'styled-components';

const PortArea = styled.section`
  background: #fff;
  padding-bottom: 50px;
`;
const PortImgArea = styled.div`
  position: relative;
  img {
    border-radius: 8px;
  }
  .port-text {
    position: absolute;
    top: 0;
    left: 0;
    font-size: 35px;
    color: #fff;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.7);
    text-align: center;
    transform: scale(0);
    transition: all 0.5s ease-in-out;
  }
  &:hover .port-text {
    transform: scale(1);
  }
`;
const IconBox = styled.div`
  padding: 20% !important;
`;
const Head4 = styled.h4`
  font-size: 25px;
  margin-top: 25px;
`;
const SingPort = styled.div`
  margin: 25px 0;
`;

export const Portfolio = () => {
  return (
    <PortArea className="portfolio-area section-padding" id="portfolio">
        <div className="container">
            <Heading title="Portfolio" par="Lorem ipsum dolor sit amet, consectetur adipisicing elit..."/>
            <div className="row">
               {portfolio.map((val) => (
                <div className="col-md-4">
                    <SingPort className="single-portfolio text-center" data-aos='fade-up'>
                        <PortImgArea className="port-img-area">
                            <img src={val.cover} alt="" className='img-fluid' style={{borderRadius: '8px', width: '450px', height: '270px'}} />
                            <div className="port-text">
                              <IconBox className='icon-box'>
                                <FaSearch />
                              </IconBox>
                            </div>
                        </PortImgArea>
                        <Head4>{val.head4}</Head4>
                        <p data-aos='zoom-in'>{val.desc}</p>
                    </SingPort>
                </div>
                ))}
            </div>
        </div>
    </PortArea>
  )
}
