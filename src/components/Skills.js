import { Container, Row, Col } from 'react-bootstrap';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import "../styles/Skills.css";

export const Skills = () => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };


    return (

        <section className='skills' id='skills'>
            <Container>
                <Row>
                    <Col>
                        <div className='skill-box'>
                            <h2>Skills</h2>
                            <p>Enthusiastic and motivated self-learning in  information Technology.These are the what I learn:
                                <h6><span>Dart,Flutter,Figma,HTMl,Css,JavaScript,React,Responsive Design</span></h6>
                            </p>
                            <Carousel className='skill-slider' responsive={responsive} infinite={true}>
                                <div className='item'>
                                    <h5>Web Development</h5>
                                </div>
                                <div className='item'>
                                    <h5>Flutter Development</h5>
                                </div>
                                <div className='item'>
                                    <h5>UI/UX Design</h5>
                                </div>
                                <div className='item'>
                                    <h5>Web Design</h5>
                                </div>
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>

    );
}

