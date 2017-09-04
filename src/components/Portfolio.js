import React from 'react'
import { Container, Row, Col } from 'reactstrap'

const Portfolio = () =>
  <Container className="portfolio">
    <h2 className="section-header text-center">Portfolio</h2>

    <Row className="portfolio-list">
      <Col className="portfolio-list__item col-md-4">
        <div className="card">
          <img className="card-img-top img-fluid" src="http://via.placeholder.com/350x250" alt="test" />
          <div className="card-block">
            <p className="card-title"><a href="#">Card title</a></p>
          </div>
        </div>
      </Col>
      <Col className="portfolio-list__item col-md-4">
        <div className="card">
          <img className="card-img-top img-fluid" src="http://via.placeholder.com/350x250" alt="test" />
          <div className="card-block">
            <p className="card-title"><a href="#">Card title</a></p>
          </div>
        </div>
      </Col>
      <Col className="portfolio-list__item col-md-4">
        <div className="card">
          <img className="card-img-top img-fluid" src="http://via.placeholder.com/350x250" alt="test" />
          <div className="card-block">
            <p className="card-title"><a href="#">Card title</a></p>
          </div>
        </div>
      </Col>
      <Col className="portfolio-list__item col-md-4">
        <div className="card">
          <img className="card-img-top img-fluid" src="http://via.placeholder.com/350x250" alt="test" />
          <div className="card-block">
            <p className="card-title"><a href="#">Card title</a></p>
          </div>
        </div>
      </Col>
      <Col className="portfolio-list__item col-md-4">
        <div className="card">
          <img className="card-img-top img-fluid" src="http://via.placeholder.com/350x250" alt="test" />
          <div className="card-block">
            <p className="card-title"><a href="#">Card title</a></p>
          </div>
        </div>
      </Col>
      <Col className="portfolio-list__item col-md-4">
        <div className="card">
          <img className="card-img-top img-fluid" src="http://via.placeholder.com/350x250" alt="test" />
          <div className="card-block">
            <p className="card-title"><a href="#">Card title</a></p>
          </div>
        </div>
      </Col>
    </Row>
  </Container>

export default Portfolio