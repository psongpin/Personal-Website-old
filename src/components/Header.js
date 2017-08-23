import React, { Component } from 'react'
import { Container } from 'reactstrap'

export default class Header extends Component {
  render() {
    return(
      <header className="header">
        <Container>
          <nav className="primary-menu">
            <ul className="nav">
              <li><a href="#home"><span>Home</span></a></li>
              <li><a href="#about-me"><span>About Me</span></a></li>
              <li><a href="#portfolio"><span>Portfolio</span></a></li>
              <li><a href="#contact"><span>Contact</span></a></li>
            </ul>
          </nav>
        </Container>
      </header>
    )
  }
}