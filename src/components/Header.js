import React, { Component } from 'react'
import { Row, Col } from 'reactstrap'
import Link from 'gatsby-link'

import resume from '../styles/Assets/Paul Simon Ongpin-Resume.pdf'

export default class Header extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return(
      <header className='header'>
        <div className='container-fluid'>
          <Row className='align-items-center'>
            <Col className='logo-col text-left'>
              <Link className='logo-link' exact to='/' activeClassName='active'>
                <span className='logo'>P<span>.</span>S<span>.</span> Ongpin</span>
              </Link>
            </Col>

            <Col className='mid-menu-col text-center' lg='7'>
              <nav>
                <ul>
                  <li>
                    <Link exact to='/' activeClassName='active'>Home</Link>
                  </li>
                  <li>
                    <Link to='/404' activeClassName='active'>About</Link>
                  </li>
                  <li>
                    <Link to='/404' activeClassName='active'>Portfolio</Link>
                  </li>
                  <li>
                    <Link to='/404' activeClassName='active'>Contact</Link>
                  </li>
                </ul>
              </nav>
            </Col>

            <Col className='right-menu-col text-right'>
              <nav>
                <a target="_blank" href={resume} className='btn btn-rounded'>View Resume</a>
              </nav>
            </Col>
          </Row>
        </div>
      </header>
    )
  }
}