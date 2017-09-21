import React from 'react'
import { Col } from 'reactstrap'

const Project = ({ name, imgUrl, liveUrl }) => (
  <Col className="portfolio-list__item col-md-4">
    <div className="card">
      <a href={ liveUrl } target="_blank">
        <img className="card-img-top img-fluid" src={ imgUrl } alt={ name } />
      </a>
      <div className="card-block">
        <p className="card-title"><a href={ liveUrl } target="_blank">{ name }</a></p>
      </div>
    </div>
  </Col>
)

export default Project