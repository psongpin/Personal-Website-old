import React, { Component } from 'react'
import { Row, Col } from 'reactstrap'
import Link from 'gatsby-link'
import MediaQuery from 'react-responsive'

import resume from '../styles/Assets/Paul Simon Ongpin-Resume.pdf'

export default class Header extends Component {
  constructor(props) {
    super(props)

    this.toggle = this.toggle.bind(this)
    this.toggleClose = this.toggleClose.bind(this)
    this.state = {
      isOpen: false
    }
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }

  toggleClose() {
    this.setState({
      isOpen: false
    })
  }

  render() {
    return(
      <header className='header'>
        <div className='container-fluid'>
          <Row className='align-items-center'>
            <Col className='logo-col text-left' xs="8" md="6" lg="3">
              <Link className='logo-link' exact to='/' activeClassName='active'>
                <span className='logo'>P<span>.</span>S<span>.</span> Ongpin</span>
              </Link>
            </Col>

            <MediaQuery minWidth={992}>
              <Col className='mid-menu-col text-center d-xs-none' lg='6'>
                <PrimaryNav />
              </Col>
            </MediaQuery>

            <Col className='right-menu-col text-right' xs="4"md="6" lg="3">
              <nav>
                <MediaQuery minWidth={768}>
                  <a target="_blank" href={resume} className='btn btn-rounded'>View Resume</a>
                </MediaQuery>

                <MediaQuery maxWidth={991}>
                  <button className="btn mobile-menu-toggle" onClick={this.toggle}><span className="fa fa-bars"></span></button>  
                </MediaQuery>
              </nav>
            </Col>
          </Row>
        </div>

        <MediaQuery maxWidth={991}>
          <PrimaryNav isOpen={this.state.isOpen} toggleClose={this.toggleClose} />
        </MediaQuery>
      </header>
    )
  }
}

const PrimaryNav = ({ isOpen, toggleClose }) => (
  <nav className={'primary-nav ' + (isOpen ? 'open' : '' )}>
    <ul>
      <li>
        <Link exact to='/' activeClassName='active'>Home</Link>
      </li>
      <li>
        <Link to='/about' activeClassName='active'>About</Link>
      </li>
      <li>
        <Link to='/404' activeClassName='active'>Portfolio</Link>
      </li>
      <li>
        <Link to='/404' activeClassName='active'>Contact</Link>
      </li>
    </ul>

    <MediaQuery maxWidth={991} minWidth={768}>
      <div className="text-center">
        <div  style={{marginTop: '1rem'}}>
          <button className='btn btn-rounded' style={{backgroundColor: '#e5007e'}} onClick={toggleClose}><span className="fa fa-close"></span>  Close</button>
        </div>
      </div>
    </MediaQuery>
    
    <MediaQuery maxWidth={767}>
      <div className="text-center">
        <div style={{marginTop: '2rem'}}>
          <a target="_blank" href={resume} className='btn btn-rounded'>View Resume</a>
        </div>
        <div  style={{marginTop: '1rem'}}>
          <button className='btn btn-rounded' style={{backgroundColor: '#e5007e'}} onClick={toggleClose}><span className="fa fa-close"></span>  Close</button>
        </div>
      </div>
    </MediaQuery>
  </nav>
)