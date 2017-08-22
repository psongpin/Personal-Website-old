import React from 'react'
import { Container } from 'reactstrap'

const Contact = () =>
  <Container className='contact text-center'>
    <h2 className='section-header'>Interested working with me?</h2>
    <a href='#' className='gf-link h5 btn'>Let's have a chat! </a>

    <div className="social-links">
      <h3>Find me on:</h3>
      <p className="social-links-list">
        <a href="#"><i className="fa fa-linkedin" aria-hidden="true"></i></a>
        <a href="#"><i className="fa fa-github" aria-hidden="true"></i></a>
        <a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a>
        <a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a>
      </p>
    </div>
  </Container>

export default Contact