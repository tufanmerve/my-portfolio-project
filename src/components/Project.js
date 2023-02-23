import React from 'react';
import "../styles/Project.css";
import { Row, Col,  } from 'react-bootstrap';
import { project } from '../constant';


const Project = () => {
    return (
        <div className='projects' id='projects'>
           <div className='title'> <h2  >Projects</h2></div>
            <Row>
                {
                    project.map((proj,id)=>
                    <Col key={id}>
                    <div className='img-box'>
                        <img className='img' alt={`${proj.title}`} src={proj.imgUrl}></img>
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
                
            </Row>
        </div>
    )
}

export default Project