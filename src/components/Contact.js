import React from 'react'
import { Container } from 'reactstrap'

const Contact = () =>
  <Container className='contact text-center'>
    <h2 className='section-header'>Interested working with me?</h2>
    <a href='mailto: paulsimon.ongpin@gmail.com' className='gf-link h5 btn'>Let's have a chat! &nbsp;<i className="fa fa-comment-o" aria-hidden="true"></i></a>

    <div className="social-links">
      <h3 className="h4">Find me on:</h3>
      <p className="social-links-list">
        <a href="https://www.linkedin.com/in/psongpin/" target="_blank"><i className="fa fa-linkedin" aria-hidden="true"></i></a>
        <a href="https://github.com/psongpin" target="_blank"><i className="fa fa-github" aria-hidden="true"></i></a>
        <a href="https://www.facebook.com/psongpin" target="_blank"><i className="fa fa-facebook" aria-hidden="true"></i></a>
        <a href="https://twitter.com/psongpin" target="_blank"><i className="fa fa-twitter" aria-hidden="true"></i></a>
      </p>
    </div>
  </Container>

export default Contact