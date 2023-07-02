import React, { Component } from 'react'
import { Container, CardGroup, Card, } from 'react-bootstrap';
import '../App.css';

export default class Home extends Component {
  render() {
    return (
      <Container>
        <h1 className='sal'>Salamanca Logistics</h1>
        <h2 className='text-center m-4'>Наши Услуги</h2>
        <CardGroup>
          <Card className='card'>
            <Card.Img
            className='img'
              src="https://images.pexels.com/photos/4246055/pexels-photo-4246055.jpeg?auto=compress&cs=tinysrgb&w=800"
            />
            <Card.Body className='cardbody'>
              <Card.Title>Мы Упакуем</Card.Title>
              <a href="http://localhost:3000/contacts" class="btn btn-primary btn-lg" rel="noreferrer">Contact us</a>
            </Card.Body>
          </Card>
          <Card className='card'>
            <Card.Body className='cardbody'>
              <Card.Title>Мы Перевезем</Card.Title>
              <a href="http://localhost:3000/about" class="btn btn-primary btn-lg" target="_blank" rel="noreferrer">About us</a>
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
              <a href="http://localhost:3000/blog" class="btn btn-primary btn-lg" target="_blank" rel="noreferrer">Blog</a>
            </Card.Body>
          </Card>
        </CardGroup>
      </Container>
    );
  }
}