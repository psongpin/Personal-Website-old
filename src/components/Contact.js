import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import Link from 'gatsby-link'

import divider from '../styles/Assets/Divider.svg'
import paulCTA from '../styles/Assets/CTA.svg'

const Contact = () =>
  <Container className='contact'>
    <Row>
      <Col md='7' className='content-col'>
        <div className='section-head'>
          <img className='zigDivider' src={divider} alt='zigzag divider'/>
          <h2>Let's have a Chat!</h2>
          <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
        </div>

        <div className='porfolio-link'>
          <Link to='/404' className='btn btn-rounded yellow'>Explore</Link>
        </div>
      </Col>

      <Col md='5' className='img-col'>
        <div className='img-container'>
          <img src={paulCTA} alt='Contact CTA'/>
        </div>
      </Col>
    </Row>
  </Container>

export default Contact