import React from 'react'
import { Container } from 'react-bootstrap'
import { GoMarkGithub } from 'react-icons/go'
import { FaLinkedinIn,FaTwitch,FaSpotify } from 'react-icons/fa'


function Footer() {
  return (
    <footer className='bg-dark text-center text-white'>
      <Container className='p-4' fluid>
        <section className='mb-4'>

          <a className='btn btn-outline-light m-2' href='https://github.com/Father-of-Cats'>
          <GoMarkGithub/>
          </a>
          <a className='btn btn-outline-light m-2' href='https://www.linkedin.com/in/hunter-k-nelson'>
            <FaLinkedinIn/>
          </a>
          <a className='btn btn-outline-light m-2' href='https://www.twitch.tv/theadventurearchive'>
            <FaTwitch/>
          </a>
          <a className='btn btn-outline-light m-2' href='https://open.spotify.com/show/3ImMl6cwPn6kgydbl5j3Jf?si=9569428b9e5d477e'>
            <FaSpotify/>
          </a>
        </section>
      </Container>
    </footer>
  )
}

export default Footer

