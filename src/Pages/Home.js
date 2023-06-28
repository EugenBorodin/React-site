import React, { Component } from 'react'
import { Container, CardGroup, Card, Button, } from 'react-bootstrap';
import '../App.css';

export default class Home extends Component {
  render() {
    return (
      <Container>
        <h1 className='sal'>Salamanca Logistic</h1>
        <h2 className='text-center m-4'>Наши Услуги</h2>
        <CardGroup>
          <Card className='card'>
            <Card.Img
            className='img'
              src="https://images.pexels.com/photos/4246055/pexels-photo-4246055.jpeg?auto=compress&cs=tinysrgb&w=800"
            />
            <Card.Body className='cardbody'>
              <Card.Title>Мы Упакуем</Card.Title>
              <Button variant='secondary'>About</Button>
            </Card.Body>
          </Card>
          <Card className='card'>
            <Card.Body className='cardbody'>
              <Card.Title>Мы Перевезем</Card.Title>
              <Button variant='secondary'>About</Button>
            </Card.Body>
            <Card.Img
            className='img'
              src="https://images.pexels.com/photos/6169668/pexels-photo-6169668.jpeg?auto=compress&cs=tinysrgb&w=800"
            />
          </Card>
          <Card className='card'>
            <Card.Img
            className='img'
              src="https://bash-pereezd.ru/upload/medialibrary/5b6/5b6317dab62104c2d88263fab015eacb.jpg"
            />
            <Card.Body className='cardbody'>
              <Card.Title>Мы Соберем</Card.Title>
              <Button variant='secondary'>About</Button>
            </Card.Body>
          </Card>
        </CardGroup>
      </Container>
    );
  }
}