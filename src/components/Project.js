import React from 'react';
import "../styles/Project.css";
import { Row, Col, } from 'react-bootstrap';
import { project } from '../constant';
import { useMediaQuery } from 'react-responsive'


const Project = () => {
    // const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' })
    // const isDesktopOrLaptop = useMediaQuery({
    //     query: '(min-width: 1224px)'
    // })

    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1220px)' })



    return (
        <div className='projects' id='projects'>
            <div className='title'> <h2  >Projects</h2></div>
            <Row>
                {
                    project.map((proj, id) =>
                        <Col className={isTabletOrMobile ? "mobile-col" : 'col'} key={id}>
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
        </div>
    )
}

export default Project