import React from 'react'
import { Container } from 'react-bootstrap'

function Footer() {
  return (
    <footer className='bg-dark text-center text-white'>
      <Container className='p-4' fluid>
        <section className='mb-4'>

          <a className='btn btn-outline-light btn-floating-m-1' href='#'>
            <img class="bi-github"></img>
          </a>

        </section>
      </Container>
    </footer>
  )
}

export default Footer

