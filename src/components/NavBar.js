import React, { useEffect, useState } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import "../styles/Navbar.css";
import logo from "../assets/logo.png";
import github from "../assets/github.png";
import linkedin from "../assets/linkedin.png";
import { navLinks } from '../constant';



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
    <div className='navbar'>
        <Navbar expand="md" className={scrolled ? "scrolled" : ""} >
            <Container>
                <Navbar.Brand className='brand' href="#home">
                    <img src={logo} alt="logo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" >
                    <span className='navbar-toggler-icon'></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">

                        {
                            navLinks.map((nav) =>
                                <Nav.Link href={`#${nav.id}`}
                                    className={activeLink === `${nav.id}` ? "active-navbar-link" : "navbar-link"}
                                    onClick={() => onUpdateActiveLink(`${nav.id}`)}>{nav.title}</Nav.Link>)
                        }
                    </Nav>
                    <span className='navbar-text'>
                        <div className='social-icon'>
                            <a href='https://github.com/tufanmerve'><img src={github} alt="" /></a>
                            <a href='https://www.linkedin.com/in/merve-tufan-035216252/'><img src={linkedin} alt="" /></a>
                            <button className='vvd' onClick={() => console.log("connect")}>Connect Me</button>
                        </div>
                    </span>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        </div>
    )
}

export default NavBar