import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import "../styles/Banner.css";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import header from "../assets/header.png"
import { useNavigate } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive'

const Banner = () => {

  const navigate = useNavigate();
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1000px)' })


  return (
    <section className='banner' id='about'>

      {!isTabletOrMobile ?

        <Row >
          <Col className="content">
            <span className='tagline'>Welcome to my Portfolio</span>
            <h1 className="title">Hi I'm a Web Developer</h1>
            <p>Hello, I'm Merve Tufan a Front-end React Developer. This is my portfolio, I am looking for more experience in my field. </p>
            <button id='form' onClick={() => navigate('contact-form')}>Let's Connect <ArrowRightCircle className='arrow' /></button>
          </Col>
          <Col xs={12} md={6} lg={5}>
            <img className='header-img' src={header} alt="header" />
          </Col>
        </Row>

        : <div className='mbl-banner'>
          <span className='mbl-tagline'  >Welcome to my Portfolio</span>
          <h1 className='mbl-title' >Hi I'm a Web Developer</h1>
          <p>Hello, I'm Merve Tufan a Front-end React Developer. This is my portfolio, I am looking for more experience in my field. </p>
          <button id='form' onClick={() => navigate('contact-form')}>Let's Connect <ArrowRightCircle className='mbl-arrow' /></button>
        </div>}

    </section>
  )
}

export default Banner