import React from 'react'
import {Image,
Row,
Container,
Col} from 'react-bootstrap'
import Slide from 'react-reveal/Slide'

export default function About() {

    return (
        <section className='d-flex align-items-center'
        style={{height: '100vh'}}
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
                </Slide>
                </Col>
            </Row>
            </Container>
            
        </section>
    )
}