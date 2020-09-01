import React, { useState } from 'react';
import Hero from '../Components/Hero/Hero';
import Content from '../Components/Content/Content';
import { Form, Button } from 'react-bootstrap';

function ContactPage(props) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [disabled, setDisabled] = useState(false);
  const [emailSent, setEmailSent] = useState(null);

  const handleNameChange = (event) => {
    const target = event.target;
    setName(target.value);
  }
  const handleEmailChange = (event) => {
    const target = event.target;
    setEmail(target.value);
  }
  const handleMessageChange = (event) => {
    const target = event.target;
    setMessage(target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    setDisabled(true);
    console.log('banana');
  }

  return (
    <div>
      <Hero title={props.title} />
      <Content>
        <Form onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Label htmlFor='full-name'>Full name</Form.Label>
            <Form.Control id='full-name'
              name='name' type='text' value={name}
              onChange={handleNameChange}></Form.Control>
          </Form.Group>

          <Form.Group>
            <Form.Label htmlFor='email'>Email</Form.Label>
            <Form.Control id='email'
              name='email' type='email' value={email}
              onChange={handleEmailChange}></Form.Control>
          </Form.Group>

          <Form.Group>
            <Form.Label htmlFor='message'>Message</Form.Label>
            <Form.Control id='message'
              name='message' as='textarea' value={message}
              rows='5'
              onChange={handleMessageChange}></Form.Control>
          </Form.Group>

          <Button className='d-inline-block' variant='dark' type='submit'
            disabled={disabled}>
            Send
            </Button>

          {emailSent === true && <p className='d-inline success-msg'>Email sent!</p>}
          {emailSent === false && <p className='d-inline err-msg'>Email not sent!</p>}

        </Form>
      </Content>
    </div >
  );
};

export default ContactPage;