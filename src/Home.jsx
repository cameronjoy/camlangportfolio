import Typing from 'react-typing-animation'

export default function Home() {
    return(
        <section
        className='d-flex flex-column justify-content-center align-items-center '
        style={{height: '100vh'}}
        id="home">

            <h1>
                Hi! I'm Cameron
            </h1>
            <Typing>
            <h3 className='typing'>
                Software Engineer
            </h3>

            </Typing>
            
        </section>
    )
}