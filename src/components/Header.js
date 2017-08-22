import React, { Component } from 'react'
import { Container } from 'reactstrap'

export default class Header extends Component {
  render() {
    return(
      <header className="header">
        <Container>
          <nav className="primary-menu">
            <ul className="nav">
              <li><a href="#"><span>Home</span></a></li>
              <li><a href="#"><span>About Me</span></a></li>
              <li><a href="#"><span>Portfolio</span></a></li>
              <li><a href="#"><span>Contact</span></a></li>
            </ul>
          </nav>
        </Container>
      </header>
    )
  }
}