import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import Project from './Project'
import Link from 'gatsby-link'

import divider from '../../styles/Assets/Divider.svg'
import fb from '../../styles/Assets/portfolio/farmbase.png'
import stratus from '../../styles/Assets/portfolio/stratus.png'
import bg from '../../styles/Assets/portfolio/bg.png'
import je from '../../styles/Assets/portfolio/je.png'
import rob from '../../styles/Assets/portfolio/630.png'
import jh from '../../styles/Assets/portfolio/jh.png'

const projects = [
  {
    name: 'Farmbase - Hackathon App', 
    imgUrl: fb,
    liveUrl: 'https://globe-hackathon.firebaseapp.com/'
  },
  {
    name: 'Stratus Gas', 
    imgUrl: stratus,
    liveUrl: 'http://stratusgas.com/'
  },
  {
    name: 'Brightgreen', 
    imgUrl: bg,
    liveUrl: 'http://brightgreen.com/'
  },
  {
    name: 'Jesse Hernandez Law Firm', 
    imgUrl: jh,
    liveUrl: 'http://jessehernandezlaw.com/'
  },
  {
    name: '6:30 Partners', 
    imgUrl: rob,
    liveUrl: 'http://6-30partners.com/'
  },
  {
    name: 'J.E. Crawford, Jr. - Associates', 
    imgUrl: je,
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