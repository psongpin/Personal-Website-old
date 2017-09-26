import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import Project from './Project'
import Link from 'gatsby-link'

import divider from '../styles/Assets/Divider.svg'

const projects = [
  {
    name: 'Farmbase - Hackathon App', 
    imgUrl: 'http://via.placeholder.com/350x550',
    liveUrl: 'https://globe-hackathon.firebaseapp.com/'
  },
  {
    name: 'Stratus Gas', 
    imgUrl: 'http://via.placeholder.com/350x550',
    liveUrl: 'http://stratusgas.com/'
  },
  {
    name: 'Brightgreen', 
    imgUrl: 'http://via.placeholder.com/350x550',
    liveUrl: 'http://brightgreen.com/'
  },
  {
    name: 'Jesse Hernandez Law Firm', 
    imgUrl: 'http://via.placeholder.com/350x550',
    liveUrl: 'http://jessehernandezlaw.com/'
  },
  {
    name: '6:30 Partners', 
    imgUrl: 'http://via.placeholder.com/350x550',
    liveUrl: 'http://6-30partners.com/'
  },
  {
    name: 'J.E. Crawford, Jr. - Associates', 
    imgUrl: 'http://via.placeholder.com/350x550',
    liveUrl: 'https://crawforddefenseattorney.com/'
  }
]

const Portfolio = () =>
  <Container className='portfolio'>
    <div className='section-head text-center'>
      <img className='zigDivider' src={divider} alt='zigzag divider'/>
      <h2>Portfolio</h2>
      <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.</p>
    </div>

    <Row className='portfolio-list'>
      {projects.map((project) => (
        <Project key={project.name} {...project} />
      ))}
    </Row>

    <div className='porfolio-link text-center'>
      <Link to='/404' className='btn btn-rounded'>Explore</Link>
    </div>
  </Container>

export default Portfolio