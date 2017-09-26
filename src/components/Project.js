import React from 'react'
import { Col } from 'reactstrap'

const Project = ({ name, imgUrl, liveUrl }) => (
  <Col className='portfolio-list-item' xs='12' md='6' lg='4'>
    <div className='profolio-bg' style={{backgroundImage: `url(${imgUrl})`}}>
      <a className="link-overlay" href={ liveUrl } target='_blank'>
        <span className="project-name">{name}</span>
        <span className="btn btn-rounded yellow">view</span>
      </a>
    </div>
  </Col>
)

export default Project