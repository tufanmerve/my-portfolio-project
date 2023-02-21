import React, { useEffect, useState } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import "../styles/Navbar.css";
import logo from "../assets/logo.png";
import github from "../assets/github.png";
import linkedin from "../assets/linkedin.png";


const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true)
            } else {
                setScrolled(false)
            }
        }
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener
    }, [])

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }

    return (
        <Navbar expand="md" className={scrolled ? "scrolled" : ""} >
            <Container className='navbar'>
                <Navbar.Brand className='brand' href="#home">
                    <img className='brand' src={logo} alt="logo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" >
                    <span className='navbar-toggler-icon'></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home"
                            className={activeLink === "about" ? "active-navbar-link" : "navbar-link"}
                            onClick={() => onUpdateActiveLink('about')}>About</Nav.Link>
                        <Nav.Link href="#link"
                            className={activeLink === "skills" ? "active-navbar-link" : "navbar-link"}
                            onClick={() => onUpdateActiveLink('skills')} >Skills</Nav.Link>
                        <Nav.Link href='project'
                            className={activeLink === "project" ? "active-navbar-link" : "navbar-link"}
                            onClick={() => onUpdateActiveLink('project')} >Project</Nav.Link>
                    </Nav>
                    <span className='navbar-text'>
                        <div className='social-icon'>
                            <a href='#'><img src={github} alt="" /></a>
                            <a href='#'><img src={linkedin} alt="" /></a>
                            <button className='vvd' onClick={() => console.log("connect")}>Connect Me</button>
                        </div>
                    </span>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar