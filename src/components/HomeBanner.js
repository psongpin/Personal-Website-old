import React from 'react'
import { Container, Row, Col } from 'reactstrap'

const HomeBaner = () =>
  <Container className="home-banner">
    <Row className="home-banner-row">

      <Col className="text-content">
        <h1>Paul Simon Ongpin</h1>
        <hr className="divider" />
        <p className="h4">Front-end Web Developer</p>
        <p className="text">Committed to Learn Forever.</p>
      </Col>
      
      <Col className="img-content">
        <img className="img-fluid" src="https://dummyimage.com/600x600/000/fff&text=+" alt="paul"/>
      </Col>
    </Row>
  </Container>

export default HomeBaner