import React, { useState } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import "../styles/Navbar.css";
import logo from "../assets/logo.png";
import { navLinks } from '../constant';
import { FiGithub} from "react-icons/fi";
import { RiLinkedinLine } from "react-icons/ri";
import { useNavigate } from 'react-router-dom';



const NavBar = () => {

    const navigate = useNavigate();
    const [activeLink, setActiveLink] = useState('home');
   
   
    

  
    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }

    return (
        <div className='navbar'>
            <Navbar expand="lg" >
                
                    <Navbar.Brand className='brand' href="#home">
                        <img src={logo} alt="logo" onClick={()=> navigate("/")}/>
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
                                <a href='https://github.com/tufanmerve'><FiGithub className='icon' /></a>
                                <a href='https://www.linkedin.com/in/merve-tufan-035216252/'><RiLinkedinLine className='icon' /></a>
                                <button className='vvd' onClick={() => console.log("connect")}>Connect Me</button>

                            </div>

                        </span>
                    </Navbar.Collapse>
                
            </Navbar>
        </div>
    )
}

export default NavBar