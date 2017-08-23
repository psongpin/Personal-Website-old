import React, { Component } from 'react'
import { Container } from 'reactstrap'

import Scroll, { Link } from 'react-scroll'

export default class Header extends Component {
  render() {
    return(
      <header className="header">
        <Container>
          <nav className="primary-menu">
            <ul className="nav">
              <li><Link href="#" to="home" spy={false} smooth={true} duration={500}><span>Home</span></Link></li>
              <li><Link href="#" to="about" spy={false} smooth={true} duration={500}><span>About Me</span></Link></li>
              <li><Link href="#" to="portfolio" spy={false} smooth={true} duration={500}><span>Portfolio</span></Link></li>
              <li><Link href="#" to="contact" spy={false} smooth={true} duration={500}><span>Contact</span></Link></li>
            </ul>
          </nav>
        </Container>
      </header>
    )
  }
}