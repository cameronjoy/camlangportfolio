import { ImGithub } from 'react-icons/im';
import {FaLinkedin} from 'react-icons/fa'

export default function Contact() {
    return (
        <section className='d-flex justify-content-center align-items-center'
        style={{height: '100vh'}}
        id="contact">
            <ul>
                <li>
                    <a href=""><ImGithub/></a>
                </li>
                <li>
                    <a href=""><FaLinkedin/></a>
                </li>
                <li>
                    <a href=""></a>
                </li>
            </ul>
        </section>
    )
}