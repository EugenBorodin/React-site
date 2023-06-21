import React, { Component } from 'react'
import { Form, Button, Container } from 'react-bootstrap';

export default class Contacts extends Component {
  render() {
    return (
      <Container style={{ width: "500px"}}>
        <h1 className='text-center'>Contact us</h1>
        <Form>
          <Form.Group controlID="formBasicEmail">
            <Form.Label>Email addres</Form.Label>
            <Form.Control type="email" placeholder='Enter email' />
            <Form.Text>
              We'll newer share your email with anyone else
            </Form.Text>
          </Form.Group>

          <Form.Group controlId='formBasicPassword'>
            <Form.Label>Example textarea</Form.Label>
            <Form.Control as="textarea" row="3" />
          </Form.Group>

          <Form.Group controlId='formBasicCheckbox'>
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button variant='primary' type="submit">Submit</Button>
        </Form>
      </Container>
    )
  }
}
