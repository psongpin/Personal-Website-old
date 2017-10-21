import React from 'react'
import Section from '../Section'

const AboutMain = () =>
    <Section className='about-main'>
      <h2>Hi! My Name is <strong className="paul-name">Paul</strong>.</h2>
      <p>
        <strong>
        Front End Developer • 
        Wordpress Theme Developer • 
        Community Builder • 
        Self-Learner • 
        Hobbyist • 
        Pizza-Lover 
        </strong>
      </p>

      <div className="spacer"></div>  

      <ul className="description-list">
        <li>
          <p>Loves converting awesome Web Designs to Reality as a <strong>Front End / Wordpress Theme Developer</strong> (Currently working as a Javascript Developer)</p>
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
    </Section>

export default AboutMain
