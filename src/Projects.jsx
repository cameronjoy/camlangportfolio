import {Card,
Button,
Container,
Col,
Row} from 'react-bootstrap'


export default function Projects() {
    return (
        <section className=' justify-content-center align-items-center'
        style={{marginTop: '5rem'}}
        id="projects">
            
            <Container>
                <Row className="">
                <Col>
            <Card style={{ width: '18rem', margin: '2rem 0' }}>
            <Card.Img variant="top" src="https://media4.giphy.com/media/Ie0yQxZRFE4FPrqJFf/giphy.gif" />
            <Card.Body>
                <Card.Title>Park Hopper</Card.Title>
                <Card.Text>
                React app that uses the National Parks API to search for national parks in your area
                </Card.Text>
                <a href="https://60f218e4f706db1bc61b6b8c--elated-davinci-76e9b0.netlify.app/" target="_blank">
                <Button variant="light" href="">Try Me!</Button>
                </a>
            </Card.Body>
            </Card>
            </Col>
            <Col>
            <Card style={{ width: '18rem', margin: '2rem 0' }}>
            <Card.Img variant="top" src="https://media2.giphy.com/media/rRmspO5TqgPL4WvDMY/giphy.gif" />
            <Card.Body>
                <Card.Title>Im Bored</Card.Title>
                <Card.Text>
                App that searches Bored API for activity requirements and generates activities for you to save to your favorites list

                </Card.Text>
                <a href="https://im-bored-app.herokuapp.com/" target="_blank">
                <Button variant="light" href="">Try Me!</Button>
                </a>
            </Card.Body>
            </Card>
            </Col>
            <Col>
            <Card style={{ width: '18rem', margin: '2rem 0' }}>
            <Card.Img variant="top" src="https://media3.giphy.com/media/RWvTes8uVShKDJjrc9/giphy.gif" />
            <Card.Body>
                <Card.Title>RoadKill</Card.Title>
                <Card.Text>
                Endless Frogger style Javascript game developed in a 1-week sprint.

                </Card.Text>
                <a href="https://cameronjoy.github.io/ROADKILL/" target="_blank">
                <Button variant="light" href="">Try Me!</Button>
                </a>
            </Card.Body>
            </Card>
            </Col>
            </Row>
            </Container>
            
        </section>
    )
}