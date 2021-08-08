import {ListGroup} from 'react-bootstrap'
import { ImGithub, ImDownload2 } from 'react-icons/im';
import {FaLinkedin} from 'react-icons/fa'
import resume from "./CameronLangdonJohnsonResume.pdf"

export default function Contact() {
    return (
        <section className=''
        style={{height: '100vh', textAlign: 'center'}}
        id="contact">
            <h1 style={{paddingTop:'40vh'}}>Get in touch!</h1>
            <p>camlangdev@gmail.com</p>
           
            <ListGroup horizontal
            className='d-flex justify-content-center'>
            <ListGroup.Item>
                <a href="https://github.com/cameronjoy" target="_blank" style={{color: 'black'}}><ImGithub/></a>
            </ListGroup.Item>
            <ListGroup.Item>
                <a href="https://www.linkedin.com/in/cameron-langdon-johnson/" target="_blank" style={{color: 'black'}}><FaLinkedin/></a>
            </ListGroup.Item>
                            
            </ ListGroup>
            <h3>Resume</h3>
            <h1><a href={resume} download style={{color: 'black'}}><ImDownload2/></a></h1>
        </section>
    )
}