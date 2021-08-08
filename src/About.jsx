import React from 'react'
import {Image,
Row,
Container,
Col,
ListGroup} from 'react-bootstrap'
import Slide from 'react-reveal/Slide'

import {SiJavascript,
SiReact,
SiNodeDotJs,
SiHtml5,
SiCss3,
SiPython,
SiFlask,
SiPostgresql} from 'react-icons/si'

export default function About() {

    return (
        <section className='d-flex align-items-center'
        
        id="about">
            <Container>
            <Row className="justify-content-md-center">
                <Col md={6}>

                <Slide left>
                    <Image src='./profilepic.jpg'  roundedCircle className='profile'/>
                </Slide>
                </Col>
                <Col md={6}>
                <Slide right>
                    <h5>
                    I’m a results driven software engineer looking to work with a company where I can grow and challenge myself! I’m adaptable and love to solve problems. In my freetime youll probably find me outside reading or drawing :)
                    </h5>
                    <div>
                        <h3 style={{textAlign: 'center'}}>
                            Skills
                        </h3>
                        <ListGroup horizontal style={{textAlign: 'center'}}>
                            <ListGroup.Item>
                                <SiJavascript />
                                <p>Javascript</p>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <SiReact />
                                <p>React</p>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <SiNodeDotJs />
                                <p>Node.js</p>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <SiHtml5 />
                                <p>HTML</p>
                            </ListGroup.Item>
                        </ ListGroup>
                        <ListGroup horizontal style={{textAlign: 'center'}}>
                            <ListGroup.Item>
                                <SiCss3 />
                                <p>CSS</p>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <SiPython />
                                <p>Python</p>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <SiFlask />
                                <p>Flask</p>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <SiPostgresql />
                                <p>SQL</p>
                            </ListGroup.Item>
                        </ListGroup>
                        
                    </div>
                </Slide>
                </Col>
            </Row>
            </Container>
            
        </section>
    )
}