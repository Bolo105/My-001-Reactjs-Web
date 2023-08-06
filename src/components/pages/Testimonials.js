import React from "react"
import Slider from "react-slick"
import { testimonials } from "../data/Data.js"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { Heading } from "../common/Heading"
import styled from "styled-components"

import testimonialsBg from '../images/testimonialsbg.png';

const Testi = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  background-color: hsl(0, 0%, 85%) !important;
  &::after {
    background-image: url(${testimonialsBg}) !important;
  }
  .box {
    max-width: 60%;
  }
  .img {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 120px;
    height: 120px;
    margin: auto;
    border-radius: 50%;
    border: 3px solid #7564e5;
    margin-bottom: 20px;
    img {
      width: 100px;
      height: 100px;
      background-size: cover;
      border-radius: 50%;
      object-fit: cover;
    }
  }
  label {
    color: #7564e5;
    display: block;
    margin-top: -10px;
    margin-bottom: 25px;
    font-style: italic;
  }
  .desc2 {
    font-size: 25px;
  }
`;


export const Testimonials = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }
  return (
    <>
      <Testi className='testimonials py-3 hero' id='testimonials'>
        <div className='container'>
          <Heading title='Testimonials' par='Lorem ipsum dolor sit amet, consectetur adipisicing elit...'/>
          <Slider {...settings}>
            {testimonials.map((val) => (
             <div className="box">
                 <div class="img" data-aos='zoom-out-right'>
                   <img src={val.cover} alt="" className="img-fluid"/>
                 </div>
                 <p class="desc1" data-aos='zoom-out-down'>{val.desc1}</p>
                 <p class="desc2" data-aos='fade-left'><b>{val.desc2}</b></p> 
                 <label className="desc3" data-aos='zoom-out'>{val.desc3}</label>
            </div>
            ))}
          </Slider>
        </div>
      </Testi>
    </>
  )
}
