import React from 'react';
import "../styles/Project.css";
import { Row, Col, } from 'react-bootstrap';
import { project } from '../constant';
import { useMediaQuery } from 'react-responsive'


const Project = () => {
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1000px)' });



    return (
        <section className={isTabletOrMobile ? "mobile-projects" : "projects"} id='projects'>
            <div className={isTabletOrMobile ? "mobile-title" : "title"}> <h2  >Projects</h2></div>
            <Row >
                {
                    project.map((proj, id) =>
                        <Col xl={4} lg={6} md={12} sm={12} key={id}>
                            <div className={isTabletOrMobile ? "mobile-img-box" : 'img-box'} >
                                <img className={isTabletOrMobile ? "mobile-img" : 'img'} alt={`${proj.title}`} src={proj.imgUrl}></img>
                                <div className="proj-text">
                                    <h4>{proj.title}</h4>
                                    <span>{proj.description}</span>
                                </div>
                            </div>
                            <div className='link' >
                                <a href={proj.livePath}> Live </a>/
                                <a href={proj.repoPath}> Repo</a>

                            </div>

                        </Col>)
                }

            </Row>
            <div><hr /></div>
        </section>
    )
}

export default Project