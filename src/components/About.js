import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import Scroll, { Link } from 'react-scroll'

const About = () => 
  <Container className="about">
    <Row>
      <Col className="about-image-col" sm="6">
        <img className="img-fluid" src="https://dummyimage.com/600x800/000/fff&text=+" alt="paul"/>
      </Col>

      <Col className="about-content-col" sm="6">
        <h2>Hi! My Name is <strong className="paul-name">Paul</strong>.</h2>
        <hr className="divider" /> 

        <p className="personal-labels">
          Front End Developer • 
          Wordpress Theme Developer • 
          Community Builder • 
          Self-Learner • 
          Hobbyist • 
          Pizza-Lover 
        </p>

        <ul className="description-list">
          <li>
            <p>Loves converting awesome Web Designs to Reality as a <strong>Front End / Wordpress Theme Developer</strong> (Currently working for a startup company that focuses on Wordpress Development)</p>
          </li>
          <li>
            <p>Continuously building a great learning community at <strong>Free Code Camp Manila</strong> and does volunteer jobs for teaching about basic Front end web development concepts for aspiring and upcoming developers.</p>
          </li>
          <li>
            <p>Got my hands dirty by playing around <strong>ReactJS</strong> as a hobby and kill boredom while being productive at the same time. here are my beloved <a href="https://github.com/psongpin?tab=repositories"><strong>mad science experiments!</strong></a></p>
          </li>
          <li>
            <p>Recently got my first open source contributions to <a href="https://github.com/gatsbyjs/gatsby"><strong>GatsbyJS</strong></a>  (a React Static Site Generator)!</p>
          </li>
          <li>
            <p>Loves learning while having <strong>Pizza</strong>!</p>
          </li>
        </ul> 

        <p className="button-links">
          <a href="#" className="btn btn-about btn-view-resume">View Resume <span className="fa fa-file-text-o"></span></a>
          <Link href="#" to="skills" spy={false} smooth={true} duration={500} className="btn btn-about btn-view-skills">View Skills <span className="fa fa-cogs"></span></Link>
        </p>
      </Col>
    </Row>
  </Container>

export default About