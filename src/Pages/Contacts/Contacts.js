import React, { useState } from 'react';
import axios from 'axios';
import '../Contacts/Contacts.css';

function FeedbackForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const url = `https://api.telegram.org/bot6040738846:AAG-x5IAbgBT2XgQHq3gJ8Qx3ePnswVqRHQ/sendMessage`; // Замените YOUR_BOT_TOKEN на токен вашего бота

      const text = `Имя: ${name}\nEmail: ${email}\nСообщение: ${message}`;

      const response = await axios.post(url, {
        chat_id: '95103157', // Замените YOUR_CHAT_ID на ID вашего чата с ботом
        text: text,
      });

      if (response.status === 200) {
        alert('Ваше сообщение отправлено в Telegram. Спасибо!');
        setName('');
        setEmail('');
        setPhone('');
        setMessage('');
      } else {
        throw new Error('Произошла ошибка при отправке сообщения в Telegram.');
      }
    } catch (error) {
      console.error(error);
      alert('Произошла ошибка при отправке сообщения. Пожалуйста, попробуйте снова.');
    }
  };

  return (
    <div className="container">
      <div className="content">
        {/* Левая колонка: адрес, телефоны, email. Можете добавить свое */}
        <div className="left-side">
          <div className="address details">

            {/* Вместо классов: название шрифтовых иконок (fontawesome.com) */}
            <i className="fas fa-map-marker-alt"></i>

            {/* topic - заголовок, text-one, text-two - текст */}
            <div className="topic">Адрес</div>
            <div className="text-one">г. Москва</div>
            <div className="text-two">Пресненская наб., 8 стр. 1</div>
          </div>
          <div className="phone details">
            <i className="fas fa-phone-alt"></i>
            <div className="topic">Телефон</div>
            <div className="text-one">8-800-000-00-00</div>
            <div className="text-two">8-900-000-00-00</div>
          </div>
          <div className="email details">
            <i className="fas fa-envelope"></i>
            <div className="topic">Email</div>
            <div className="text-one">support@site.com</div>
            <div className="text-two">admin@site.com</div>
          </div>
        </div>

        {/* Правая колонка: сама форма */}
        <div className="right-side">

          {/* Заголовок для формы */}
          <div className="topic-text">Отправьте нам сообщение</div>

          {/* Какой-то дополнительный текст */}
          <p>
            Если у вас есть какие-то вопросы или предложения по сотрудничеству -
            заполните форму ниже
          </p>

          {/* Форма обратной связи */}
          <form onSubmit={handleSubmit}>

            {/* Каждый input для выравнивания вкладываем в блок input-box */}
            <div className="input-box">
              <input
                type="text"
                placeholder="Ваше имя"
                value={name}
                onChange={(event) => setName(event.target.value)}
              />
            </div>
            <div className="input-box">
              <input
              type="text"
              placeholder="Введите email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              />
            </div>
            <div className="input-box">
              <input type="text"
              placeholder="Введите телефон"
              value={phone}
              onChange={(event) => setPhone(event.target.value)}
              />
            </div>
            <div className="input-box message-box">
              <textarea
              placeholder="Сообщение"
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              ></textarea>
            </div>
            <div className="button">
              <input type="submit" value="Отправить" />
            </div>
          </form>
        </div>
      </div>
    </div>
    
  );
}

export default FeedbackForm;
