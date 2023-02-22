import React from 'react';
import "../styles/Project.css";
import { Row, Col, Container } from 'react-bootstrap';
import { project } from '../constant';
import hoobank from "../assets/hoobank.png"

const Project = () => {
    return (
        <div className='project' id='project'>
            <h2 >Projects</h2>
            <Row>
                {
                    project.map((proj,id)=>
                    <Col key={id}>
                    <div className='img-box'>
                        <img className='img' src={proj.imgUrl}></img>
                        <div className="proj-text">
                            <h4>{proj.title}</h4>
                            <span>{proj.description}</span>
                        </div>
                    </div>
                    <div className='link' >
                        <a href={proj.livePath}> Live </a>/
                        <a href={proj.repoPath}> Repo</a>
                    </div>
                </Col> )
                }
                
                {/* <Col>
                    <div className='img-box'>
                        <img className='img' src={hoobank}></img>
                        <div className="proj-text">
                            <h4>Hoobank</h4>
                            <span>Lorem ipsum dolar sit amet dolar sit sit amet ipsum</span>
                        </div>
                    </div>
                </Col>
                <Col>
                    <div className='img-box'>
                        <img className='img' src={hoobank}></img>
                        <div className="proj-text">
                            <h4>Hoobank</h4>
                            <span>Lorem ipsum dolar sit amet dolar sit sit amet ipsum</span>
                        </div>
                    </div>
                </Col> */}
            </Row>
        </div>
    )
}

export default Project