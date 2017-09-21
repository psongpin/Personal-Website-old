import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import Project from './Project'


const projects = [
  {
    name: 'Farmbase - Hackathon App', 
    imgUrl: 'http://via.placeholder.com/350x250',
    liveUrl: 'https://globe-hackathon.firebaseapp.com/'
  },
  {
    name: 'Stratus Gas', 
    imgUrl: 'http://via.placeholder.com/350x250',
    liveUrl: 'http://stratusgas.com/'
  },
  {
    name: 'Brightgreen', 
    imgUrl: 'http://via.placeholder.com/350x250',
    liveUrl: 'http://brightgreen.com/'
  },
  {
    name: 'Jesse Hernandez Law Firm', 
    imgUrl: 'http://via.placeholder.com/350x250',
    liveUrl: 'http://jessehernandezlaw.com/'
  },
  {
    name: '6:30 Partners', 
    imgUrl: 'http://via.placeholder.com/350x250',
    liveUrl: 'http://6-30partners.com/'
  },
  {
    name: 'J.E. Crawford, Jr. - Associates', 
    imgUrl: 'http://via.placeholder.com/350x250',
    liveUrl: 'https://crawforddefenseattorney.com/'
  }
]

const Portfolio = () =>
  <Container className="portfolio">
    <h2 className="section-header text-center">Portfolio</h2>

    <Row className="portfolio-list">
      {projects.map((project) => (
        <Project key={project.name} {...project} />
      ))}
    </Row>
  </Container>

export default Portfolio