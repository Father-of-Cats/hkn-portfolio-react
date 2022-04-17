import React, { useState } from 'react'
import { Form,Button,Alert } from 'react-bootstrap'
import { validateEmail } from '../../util/helper'


function Contact() {

    const [formState, setFormState] = useState({ name:'', email:'', message:''});

    const [errorMessage, setErrorMessage] = useState('');

    const { name, email, message } = formState;

    const handleInputChange = (e) => {
        e.preventDefault()

        if(e.target.name === 'email') {
            const validEmail = validateEmail(e.target.value);

            if(!validEmail) {
                setErrorMessage('sus email, try again')
            } else {
                setErrorMessage('')
            }
        } 
    }



  return (
    <Form id='contact' className='p-5 m-5 border border-dark rounded shadow-lg text-light bg-dark'>
        <Form.Group className='"mb-3' controlId='name-input'>
            <Form.Label>Name</Form.Label>
            <Form.Control
            name='name'
            type='text'
            />
        </Form.Group>
  <Form.Group className="mb-3" controlId="email-input">
    <Form.Label>Email address</Form.Label>
    <Form.Control
    name="email"
    onSubmit={handleInputChange} 
    type="email" 
    defaultValue={email} 
    />
  </Form.Group>

  <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
    <Form.Label>Example textarea</Form.Label>
    <Form.Control as="textarea" rows={3} />
  </Form.Group>
  <Button className='btn-danger' type='submit' onSubmit={handleInputChange}>Submit</Button>
</Form>
  )
}

export default Contact