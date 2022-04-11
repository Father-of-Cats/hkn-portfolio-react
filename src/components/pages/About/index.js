import React from 'react'
import { Container } from 'react-bootstrap'
import GHM from '../../../assets/GHM.webp'
import ME from '../../../assets/ME.jpg'

function About() {
  return (
    <div>  
        <Container className='row justify-content-center p-4 m-4' fluid>
            <div className='col-lg-4 d-flex align-items-center'>
                <p>
                    <h2 className='text-danger'>"The mystery of life isn’t a problem to solve, but a reality to experience."</h2><i>- Reverend Mother Gaius Helen Mohiam</i>            
                </p>
            </div>
            <div className='col-lg-4'>
                <img className='img img-fluid' src={GHM}/>
            </div>
        </Container>

        <Container className='row justify-content-center p-4 m-6' fluid>
            <div className='col-lg-4'>
                <img className='img img-fluid' src={ME} />
            </div>
            <div className='col-lg-4 d-flex align-items-center'>
                <p className='blockquote border border-dark-7 rounded shadow-lg m-3 p-4'>
                <h2 className='text-danger'>About Me</h2>
                    Hello! name is Hunter Nelson, I am a Dallas native with a passion for web development. I am rock climber and TTRPG nerd with a passion for designing tools for gaming and organizing life. I have recently finished a coding bootcamp through SMU and am excited to work on personal projects and freelance work this summer. I am currently seeking full-time employment as an entry level web developer. When I'm not climbing or coding I'm playing with my dog or working on my podcast.
                </p>
            </div>

        </Container>
    </div>




        // <Container id='body' className='row justify-content-center' fluid>
        //     <div className='col-8 bg-dark border border-dark-5 rounded shadow-lg m-3 py-2'>
        //         <p className='text-center'>
        //             <h1 className='text-danger'>"The mystery of life isn’t a problem to solve, but a reality to experience."</h1> <i className='text-light'> - Reverend Mother Gaius Helen Mohiam</i>                
        //         </p>
        //         <img className="img-fluid" src={GHM}/>
        //     </div>
        //     <div className='col-md-4 bg-light border border-dark-5 shadow-lg m-3 py-3'>
        //         <div className='text-center'>
        //             <h2>
        //                 About Me
        //             </h2>
        //             <p>
        //                 Hello! name is Hunter Nelson, I am a Dallas native with a passion for web development. I am rock climber and TTRPG nerd with a passion for designing tools for gaming and organizing life. I have recently finished a coding bootcamp through SMU and am excited to work on personal projects and freelance work this summer. I am currently seeking full-time employment as an entry level web developer.
        //             </p>
        //         </div>
        //     </div>
        //     <div className='col-md-6 bg-light border border-dark-5 shadow-lg m-3 py-3'>
        //         <div className='text-center'>
        //             <svg src='./'></svg>
        //         </div>
        //     </div>
        // </Container>

  )
}

export default About