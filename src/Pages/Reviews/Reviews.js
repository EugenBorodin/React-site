import React, { Component } from 'react';
import "../Reviews/Reviews.css"
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc, getDocs } from 'firebase/firestore';


// Инициализация Firebase
const firebaseConfig = {
  // Вставьте ваши конфигурационные данные Firebase
  apiKey: 'AIzaSyDbq9Y199WhV86jGIhdbmgtJ21n5pQuTiA',
  authDomain: 'proect-ts-firebase.firebaseapp.com',
  projectId: 'proect-ts-firebase',
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);

export default class Reviews extends Component {
  constructor(props) {
    super(props);

    this.state = {
      reviews: [],
      name: '',
      message: ''
    };
  }

  componentDidMount() {
    // Получение сохраненных отзывов из Firebase
    this.fetchReviews();
  }

  fetchReviews() {
    getDocs(collection(db, 'reviews'))
      .then((querySnapshot) => {
        const reviews = querySnapshot.docs.map((doc) => doc.data());
        this.setState({ reviews });
      })
      .catch((error) => {
        console.error('Error fetching reviews: ', error);
      });
  }

  handleNameChange = (event) => {
    this.setState({ name: event.target.value });
  }

  handleMessageChange = (event) => {
    this.setState({ message: event.target.value });
  }

  handleSubmit = (event) => {
    event.preventDefault();

    const { name, message } = this.state;

    // Создание нового отзыва
    const newReview = {
      name: name,
      message: message
    };

    // Сохранение отзыва в Firebase
    addDoc(collection(db, 'reviews'), newReview)
      .then(() => {
        console.log('Review added successfully!');
        // Обновление списка отзывов
        this.fetchReviews();
      })
      .catch((error) => {
        console.error('Error adding review: ', error);
      });

    this.setState({ name: '', message: '' });
  }

  renderReviews() {
    const { reviews } = this.state;

    if (reviews.length === 0) {
      return <p>Пока нет отзывов.</p>;
    }

    return reviews.map((review, index) => (
      <div className="review" key={index}>
        <div className="review-content">
          <h4 className="name">{review.name}</h4>
          <p className="message">{review.message}</p>
        </div>
      </div>
    ));
  }

  render() {
    const { name, message } = this.state;

    return (
      <div className="reviews-container">
        <div className="review-form">
          <h2>Оставить отзыв</h2>
          <form id="review-form" onSubmit={this.handleSubmit}>
            <label htmlFor="name">Имя:</label>
            <input type="text" id="name" value={name} onChange={this.handleNameChange} required />

            <label htmlFor="message">Сообщение:</label>
            <textarea id="message" value={message} onChange={this.handleMessageChange} required></textarea>

            <button type="submit">Отправить</button>
          </form>
        </div>
        <div className="reviews-list">
          <h1>Отзывы клиентов</h1>
          <div id="reviews">
            {this.renderReviews()}
          </div>
        </div>
      </div>
    );
  }
}

