import React, { Component } from 'react'
import { Container } from 'reactstrap'
import Section from './Section'
import Contact from './Contact'

export default class Footer extends Component {
  render() {
    return(
      <footer className='footer'>
        <Section id='contact' className='contact-section'>
          <Contact />
        </Section>

        <Section className='footer-bottom'>
          <FooterBottom />
        </Section>
      </footer>
    )
  }
}

const FooterBottom = () => 
  <div className='text-center'>
    <img src='' alt='Paul Simon Ongpin' className='footer-logo'/>
    <p className='alr-text'>2017. All Rights Reserved</p>
    <p className='social-links'>
      <a href='#' className='fa fa-facebook'></a>
      <a href='#' className='fa fa-twitter'></a>
      <a href='#' className='fa fa-github-alt'></a>
      <a href='#' className='fa fa-linkedin'></a>
    </p>

    <div className='creators'>
      <p className='dev-name'>Web Development by P.S. Ongpin</p>
      <p className='design-name'>Web Design by Kimmy</p>
    </div>
  </div>