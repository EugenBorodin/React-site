/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react'
import { Container, Tab, Nav, Row, Col } from 'react-bootstrap'

export default class About extends Component {
  render() {
    return (
      <Container>
        <Tab.Container id="ledt-tabs-example" defaultActiveKey="first">
          <Row>
            <Col sm={3}>
            <Nav variant="pills" className="flex-column mt-2">
              <Nav.Item>
                <Nav.Link eventKey="first">О НАС</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="second">ДОСТАВКА ГРУЗА</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="third">СБОРКА МЕБЕЛИ</Nav.Link>
              </Nav.Item>
            </Nav>
            </Col>
            <Col sm={9}>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <img src="https://ourspain.ru/images/cities/valencia6.jpg"/>
                  <p>
                  Добро пожаловать в нашу компанию по перевозке малогабаритных грузов и оказанию услуг по помощи
                   в переезде и сборке мебели! Мы - ваш надежный партнер для всех ваших транспортных и логистических потребностей в Европе.
                  </p>
                  <p>
                    Мы находимся в Испания Валенсия
                  </p>
                  <p>
                    тел 12345668866
                  </p>
                  <p>
                    e-mail azsalatay@gmail.com
                  </p>
                  </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <img src="https://federal-tl.ru/netcat_files/userfiles/dostavka-gruzov.jpg"/>
                  <p>
                  Наша компания специализируется на перевозке малогабаритных грузов по всей Европе.
                   Независимо от того, требуется ли вам доставка товаров для вашего бизнеса или перевозка личных вещей,
                    мы гарантируем безопасную и своевременную доставку. Наш профессиональный
                   и опытный персонал обеспечивает, чтобы ваш груз был тщательно упакован, защищен и доставлен в целости и сохранности.
                  </p>
                  <p>
                  Мы также предоставляем широкий спектр услуг по помощи в переезде. 
                  Наша команда поможет вам с планированием, упаковкой и перевозкой всех ваших вещей,
                   чтобы сделать ваш переезд гладким и безопасным. Мы понимаем, что переезд может быть стрессовым,
                    поэтому мы делаем все возможное, чтобы облегчить этот процесс и удовлетворить ваши потребности.
                  </p>
                  </Tab.Pane>
                <Tab.Pane eventKey="third">
                  <img src="https://bash-pereezd.ru/upload/medialibrary/5b6/5b6317dab62104c2d88263fab015eacb.jpg"/>
                  <p>
                  Наши опытные сотрудники готовы предложить вам услугу сборки мебели.
                   Мы позаботимся о сборке всех ваших предметов мебели,
                    чтобы вы могли наслаждаться своим новым домом или офисом сразу после переезда.
                     Наша команда обладает необходимыми навыками и инструментами, чтобы гарантировать,
                      что ваша мебель будет собрана качественно и точно в соответствии с вашими требованиями.
                  </p>
                  </Tab.Pane>

              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </Container>
    )
  }
}
