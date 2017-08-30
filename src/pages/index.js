import React from 'react'
import Link from 'gatsby-link'
import Section from '../components/Section'
import HomeBanner from '../components/HomeBanner'
import About from '../components/About'
import Skills from '../components/Skills'
import Portfolio from '../components/Portfolio'
import Contact from '../components/Contact'

import { Element } from 'react-scroll'

const IndexPage = () =>
  <div className='page-sections'>
    <Element name="home">
      <Section id="home" className="home-banner-section">
        <HomeBanner />
      </Section>
    </Element>
    
    <Element name="about">
      <Section id="about-me" className="about-section">
        <About />
      </Section>
    </Element>
    
    <Section id="skills" className="skills-section">
      <Skills />
    </Section>
    
    <Element name="portfolio">
      <Section id="portfolio" className="portfolio-section">
          <Portfolio />
      </Section>
    </Element>

    <Element name="contact">
      <Section id="contact" className="contact-section">
        <Contact />
      </Section>
    </Element>
  </div>

export default IndexPage
