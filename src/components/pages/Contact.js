import React from 'react'
import { Heading  } from '../common/Heading';
import { contact } from '../data/Data';
import styled from 'styled-components';

const ContactArea = styled.div`
  background-attachment: fixed;
  background-size: cover;
  background-position: center;
  background: #ebf4fa;
  padding-bottom: 50px;
`;

const ContactForm = styled.div`
  @media only screen and (max-width: 768px) {
    margin-bottom: 60px;
  }
`;

const FormGroup = styled.div`
  margin-bottom: 15px;
`;

const Input = styled.input`
  background: #fff;
  border: 1px solid #fff;
  border-radius: 3px;
  box-shadow: none;
  color: #232434;
  font-size: 16px;
  height: 60px;
  padding: 10px;
  width: 100%;
  font-family: 'poppins', sans-serif;
  padding-left: 30px;
  transition: all 0.3s ease 0s;

  &:focus {
    background: #fff;
    border: 1px solid #fff;
    color: #232434;
    box-shadow: none;
    outline: 0 none;
  }
`;

const TextArea = styled.textarea`
  background: #fff;
  border: 1px solid #fff;
  border-radius: 3px;
  box-shadow: none;
  color: #232434;
  font-size: 16px;
  padding: 10px;
  width: 100%;
  font-family: 'poppins', sans-serif;
  padding-left: 30px;
  transition: all 0.3s ease 0s;

  &:focus {
    background: #fff;
    border: 1px solid #fff;
    color: #232434;
    box-shadow: none;
    outline: 0 none;
  }
  &::placeholder{
    color: #232434;
    opacity: 1;
  }
`;



const SubmitButton = styled.button`
  border-radius: 30px;
  color: #000 !important;
  font-weight: 700;
  outline: medium none !important;
  padding: 15px 27px !important;
  text-transform: capitalize;
  transition: all 0.3s ease 0s;
  background:  #fff !important;
  font-family: 'poppins', sans-serif;
  cursor: pointer;
  width: 100%;
  border: 1px solid #7564e5;
  &:hover,
  &:focus {
    background: #7564e5 !important;
    color: #fff !important;
    border: 2px solid #7564e5 !important;
    font-weight: bold;
  }
`;

const Address = styled.div`
  overflow: hidden;
  margin-bottom: 10px;
  padding-left: 40px;
  @media only screen and (max-width: 768px) {
    padding-left: 0px;
  }
 
  
  .single_address h4 {
    font-size: 18px;
    margin-bottom: 0px;
    overflow: hidden;
    font-weight: 600;
  }
  
  .single_address p {
    overflow: hidden;
    margin-top: 5px;
  }
`;
const Icon = styled.i`
  background: #f6f6f6;
  color: #7564e5;
  border-radius: 30px;
  width: 60px;
  height: 60px;
  line-height: 60px;
  text-align: center;
  float: left;
  margin-right: 14px;
  font-size: 22px;
  box-shadow: 0 5px 30px 0 rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
  transition: all 0.3s ease 0s;
  
  &:hover {
    background: #7564e5;
    color: #fff;
  }
`;
  


export const Contact = () => {
  return (
    <ContactArea id="contact" className="contact-area section-padding">
      <div className="container">
        <Heading title='Contact' par='Lorem ipsum dolor sit amet, consectetur adipisicing elit...' />
        <div className="row">
          <div className="col-lg-7">
            <ContactForm className="contact">
              <form className="form" name="enq" method="post" action="contact.php" onsubmit="return validation();" >
                <div className="row">
                  <FormGroup className="form-group col-md-6">
                    <Input type="text" name="name" className="form-control" placeholder="Name" required="required" data-aos='flip-left'/>
                  </FormGroup>
                  <FormGroup className="form-group col-md-6">
                    <Input type="email" name="email" className="form-control" placeholder="Email" required="required" data-aos='flip-right'/>
                  </FormGroup>
                  <FormGroup className="form-group col-md-12">
                    <Input type="text" name="subject" className="form-control"placeholder="Subject" required="required" data-aos='flip-up'/>
                  </FormGroup>
                  <FormGroup className="form-group col-md-12">
                    <TextArea rows="6" name="message" className="form-control" placeholder="Your Message..." required="required" data-aos='flip-down'></TextArea>
                  </FormGroup>
                  <div className="col-md-12 text-center">
                    <SubmitButton type="submit" value="Send message" name="submit" id="submitButton" className="btn btn-contact-bg" title="Submit Your Message!" data-aos='zoom-in'>
                      Send Message
                    </SubmitButton>
                  </div>
                </div>
              </form>
            </ContactForm>
          </div>
          <div className="col-lg-5">
          {contact.map((val) => (
            <Address className="single_address" data-aos='zoom-in'>
              <Icon>{val.icon}</Icon>
              <h4>{val.head4}</h4>
              <p>{val.desc}</p>
            </Address>
            ))}
          </div>
        </div>
      </div>
    </ContactArea>
  );
}
