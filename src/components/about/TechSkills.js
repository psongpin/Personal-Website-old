import React from 'react'
import Section from '../Section'

import resume from '../../styles/Assets/Paul Simon Ongpin-Resume.pdf'

const TechSkills = () =>
  <Section className='about-skills'>
    <h3>Technical Skills</h3>
    <p>(to be added soon)</p>
    <div className="spacer"></div>

    <div className="about-links text-center">
      <a target="_blank" href={resume} className='btn btn-rounded'>View Resume</a>
    </div>
  </Section>

export default TechSkills