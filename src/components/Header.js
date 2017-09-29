import React, { Component } from 'react'
import { Row, Col } from 'reactstrap'
import Link from 'gatsby-link'
import Media from 'react-media'

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
            <Col className='logo-col text-left' xs="6" lg="3">
              <Link className='logo-link' exact to='/' activeClassName='active'>
                <span className='logo'>P<span>.</span>S<span>.</span> Ongpin</span>
              </Link>
            </Col>

            <Media query={{ minWidth: 992 }} render={() => (
              <Col className='mid-menu-col text-center d-xs-none' lg='6'>
                <PrimaryNav />
              </Col>
            )} />

            <Col className='right-menu-col text-right' xs="6" lg="3">
              <nav>
                <Media query={{ minWidth: 768 }} render={() => (
                  <a target="_blank" href={resume} className='btn btn-rounded'>View Resume</a>
                )} />

                <Media query={{ maxWidth: 991 }} render={() => (
                  <button className="btn mobile-menu-toggle" onClick={this.toggle}><span className="fa fa-bars"></span></button>  
                )} />
              </nav>
            </Col>
          </Row>
        </div>

        <Media query={{ maxWidth: 991 }} render={() => (
          <PrimaryNav isOpen={this.state.isOpen} toggleClose={this.toggleClose} />
        )} />
      </header>
    )
  }
}

const PrimaryNav = ({ isOpen }) => (
  <nav className={'primary-nav ' + (isOpen ? 'open' : '' )}>
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

    <Media query={{ maxWidth: 767 }}  render={() => (
      <div className="text-center">
        <div style={{marginTop: '2rem'}}>
          <a target="_blank" href={resume} className='btn btn-rounded'>View Resume</a>
        </div>
        <div  style={{marginTop: '1rem'}}>
          <button className='btn btn-rounded' style={{backgroundColor: '#e5007e'}}><span className="fa fa-close"></span>  Close</button>
        </div>
      </div>
    )} />
    
  </nav>
)