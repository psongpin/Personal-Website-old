import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import Link from 'gatsby-link'

import divider from '../../styles/Assets/Divider.svg'
import frontend from '../../styles/Assets/frontend.svg'
import wordpressDev from '../../styles/Assets/wordpressdev.svg'
import communityBuilder from '../../styles/Assets/communityBuilder.svg'
import selfLearner from '../../styles/Assets/selfLearner.svg'
import hobbyist from '../../styles/Assets/hobbyist.svg'
import pizzaLover from '../../styles/Assets/pizzaLover.svg'


const aboutBlurbs = [
  {name: 'Frontend Developer', imgUrl: frontend},
  {name: 'Wordpress Theme Developer', imgUrl: wordpressDev},
  {name: 'Community Builder', imgUrl: communityBuilder},
  {name: 'Self-Learner', imgUrl: selfLearner},
  {name: 'Hobbyist', imgUrl: hobbyist},
  {name: 'Pizza Lover', imgUrl: pizzaLover},
]

const About = () => 
  <Container className='about'>
    <div className='section-head text-center'>
      <img className='zigDivider' src={divider} alt='zigzag divider'/>
      <h2>About Paul</h2>
      <p>Frontend Web Developer since 2015. I take learning as a challenge to improve and motivate myself.</p>
    </div>

    <AboutBlurbs blurbList={aboutBlurbs}/>
    
    <div className='about-link text-center'>
      <Link to='/about' className='btn btn-rounded'>Know More</Link>
    </div>
  </Container>

const AboutBlurbs = ({blurbList}) => (
  <Row className='about-blurbs'>
    {blurbList.map(aboutBlurb => (
      <Col key={aboutBlurb.name} className='about-blurb text-center' xs='12' sm='6' lg='4'>
        <div className='about-blurb-content'>
          <img src={aboutBlurb.imgUrl} alt={aboutBlurb.name} className='img-fluid about-blurb-image'/>
          <p className='about-blurb-name'>{aboutBlurb.name}</p>
        </div>  
      </Col>
    ))}
  </Row>
)

export default About