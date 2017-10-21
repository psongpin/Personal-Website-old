import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import Link from 'gatsby-link'

import divider from '../../styles/Assets/Divider.svg'
import paulImage from '../../styles/Assets/paulImage.svg'

const HomeBaner = () =>
  <Container className='home-banner'>
    <Row className='home-banner-row'>

      <Col className='text-content home-banner-cols' xs='12' lg='4'>
        <div className='content-wrap'>
          <img src={divider} alt='zigzag divider' className='zigDivider'/>
          <h1 className='h2'>Hello I'm Paul.</h1>
          <p>&lt; Front-end Web Developer /&gt;</p>
          <Link to='/404' className='btn btn-rounded'>Explore</Link>    
        </div>    
      </Col>
      
      <Col className='img-content home-banner-cols' xs='12' lg='8'>
        <img className='img-fluid' src={paulImage} alt='paul'/>
      </Col>
    </Row>
  </Container>

export default HomeBaner