import React from 'react'
import Link from 'gatsby-link'
import Section from '../components/Section'
import HomeBanner from '../components/HomeBanner'
import About from '../components/About'
import Skills from '../components/Skills'
import Portfolio from '../components/Portfolio'
import Contact from '../components/Contact'

const IndexPage = () =>
  <div className='page-sections'>
    <Section className="home-banner-section"><HomeBanner /></Section>
    <Section className="about-section"><About /></Section>
    <Section className="skills-section"><Skills /></Section>
    <Section className="portfolio-section"><Portfolio /></Section>
    <Section className="contact-section"><Contact /></Section>
  </div>

export default IndexPage
