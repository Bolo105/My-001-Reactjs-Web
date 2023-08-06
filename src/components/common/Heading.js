import React from 'react'
import styled from 'styled-components';

const Head2 = styled.h2`
  font-size: 30px;
  color: #707070;
  font-weight: 600;
  text-align: center;
  margin-bottom: 15px;
  margin-top: 30px;
  padding-top: 60px;
`;

export const Heading = ({ title, par }) => {
  return (
    <div className="container">
      <div className="row">
        <div className="enc text-center">
          <Head2 className="heading " data-aos="zoom-in-down">
            {title}
          </Head2>
          <p className="par pb-3">{par}</p>
        </div>
      </div>
    </div>
  );
}
