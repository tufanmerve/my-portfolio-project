import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import "../styles/Banner.css";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import header from "../assets/header.png"
import { useNavigate } from 'react-router-dom';

const Banner = () => {

  const navigate = useNavigate();
  
  return (
    <section className='banner' id='about'>
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} lg={7} className="content">
            <span className='tagline'>Welcome to my Portfolio</span>
            <h1>{`Hi I'm `}<span className='wrap'>Web Developer</span></h1>
            <p>Hello, I'm Merve Tufan a Front-end React Developer. This is my portfolio, I am looking for more experience in my field. </p>
            <button id='form' onClick={()=>navigate('contact-form')}>Let's Connect <ArrowRightCircle className='arrow'/></button>
          </Col>
          <Col xs={12} md={6} lg={5}>
           <img className='header-img' src={header} alt="header"/>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Banner