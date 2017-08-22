import React from 'react'
import { Container, Row, Col } from 'reactstrap'

const HomeBaner = () =>
  <Container className="home-banner">
    <Row className="home-banner-row">

      <Col className="text-content">
        <h1>#juniorDevForLife</h1>
        <p className="h3">Fail. Learn. Succeed.</p>
        <p className="text">Committed to Learn Forever.</p>
      </Col>
      
      <Col className="img-content"></Col>
    </Row>
  </Container>

export default HomeBaner