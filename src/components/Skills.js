import { Row, Col } from 'react-bootstrap';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import "../styles/Skills.css";
import { skills } from '../constant';
import { useMediaQuery } from 'react-responsive'



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
            items: 1
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1000px)' })


    return (

        <section className='skills' id='skills'>
            
                <Row className={isTabletOrMobile ? 'mobile-skill-box' : 'skill-box'}>
                    <Col>
                        <div>
                            <h2 className={isTabletOrMobile ? 'mobile-title' : 'title'}>Skills</h2>
                            <p className={isTabletOrMobile ? 'mobile-content' : 'content'} >Enthusiastic and motivated self-learning in  information Technology.</p>
                            <Carousel className='skill-slider'  responsive={responsive} infinite={true} autoPlay={true}
                                removeArrowOnDeviceType={["laptop", "mobile","desktop"]} autoPlaySpeed={3000} pauseOnHover={false} >

                                {
                                    skills.map((skill, id) =>
                                        <div className='item' key={id}>
                                            <h5>{skill.title}</h5>
                                        </div>)
                                }

                            </Carousel>
                        </div>
                    </Col>
                </Row>
            
        </section>

    );
}

