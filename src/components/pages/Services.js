import React from 'react'
import { services } from '../data/Data';
import { Heading } from '../common/Heading';
import styled from "styled-components";

const Sec = styled.section`
background: #ebf4fa;
padding-bottom: 50px;
`;
const SingleServices = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;
const ServiceIcon = styled.i`
  margin-bottom: 30px;
  font-size: 50px;
  color: #7564e5;
`;
const IconBox = styled.div`
  margin-bottom: 30px;
`;

const ServiceParagraph = styled.p`
  color: #969696;
  line-height: 33px;
`;


export const Services = () => {
  return (
    <Sec className="services-area gray-bg section-padding" id="services">
      <div className="container">
      <Heading title="Services" par="Lorem ipsum dolor sit amet, consectetur adipisicing elit..." />
        <div className="row">
         {services.map((val) => (
          <div className="col-md-4" data-aos='flip-left'>
            <SingleServices className="single-services text-center">
              <IconBox className='icon-box'>
                 <ServiceIcon>{val.icon}</ServiceIcon>
              </IconBox>
              <h4>{val.head4}</h4>
              <ServiceParagraph>
                {val.desc}
              </ServiceParagraph>
            </SingleServices>
          </div>
           ))}
        </div>
      </div>
    </Sec>
  );
}