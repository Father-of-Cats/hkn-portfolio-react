import React from 'react'
import { Container } from 'react-bootstrap'
import GHM from '../../assets/GHM.webp'
import ME from '../../assets/ME.jpg'

function About() {

  return (
    <div id='about'>  
        <Container className='row justify-content-center p-auto m-2'fluid>
            <div className='col-lg-4 d-flex align-items-center'>
                <p>
                    <h2 className='text-danger'>"The mystery of life isn’t a problem to solve, but a reality to experience."</h2><i>- Reverend Mother Gaius Helen Mohiam</i>            
                </p>
            </div>
            <div className='col-lg-4'>
                <img className='img img-fluid' src={GHM}/>
            </div>
        </Container>
        <breakLine/>
        <Container className='row justify-content-center px-3 mx-auto my-5' fluid>
            <div className='col-lg-4'>
                <img className='img img-fluid shadow-lg' src={ME} />
            </div>
            <div className='col-lg-4 d-flex align-items-center'>
                <p className='blockquote border border-dark-7 rounded shadow-lg m- p-4'>
                <h2 className='text-danger'>About Me</h2>
                    Hello! name is Hunter Nelson, I am a Dallas native with a passion for web development. I am rock climber and TTRPG nerd with a passion for designing tools for gaming and organizing life. I have recently finished a coding bootcamp through SMU and am excited to work on personal projects and freelance work this summer. I am currently seeking full-time employment as an entry level web developer. When I'm not climbing or coding I'm playing with my dog or working on my podcast.
                </p>
            </div>

        </Container>
    </div>
  )
}

export default About