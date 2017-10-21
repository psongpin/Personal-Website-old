import React from 'react'
import { Container, Row, Col } from 'reactstrap'

// Asset imports
import divider from '../../styles/Assets/Divider.svg'
import html5Logo from '../../styles/Assets/html5.svg'
import css3Logo from '../../styles/Assets/css3.svg'
import jsLogo from '../../styles/Assets/js.svg'
import gitLogo from '../../styles/Assets/git.svg'
import githubLogo from '../../styles/Assets/github.svg'
import sassLogo from '../../styles/Assets/sass.svg'
import reactLogo from '../../styles/Assets/react.svg'
import gatsbyLogo from '../../styles/Assets/gatsby.svg'
import jqueryLogo from '../../styles/Assets/jquery.svg'
import bootstrapLogo from '../../styles/Assets/Bootstrap.svg'
import reduxLogo from '../../styles/Assets/redux.svg'
import wordpressLogo from '../../styles/Assets/wordpress.svg'

const skillArr = [
  {skillName: 'HTML5', imgSrc: html5Logo},
  {skillName: 'CSS3', imgSrc: css3Logo},
  {skillName: 'JavaScript', imgSrc: jsLogo},
  {skillName: 'Git', imgSrc: gitLogo},
  {skillName: 'Github', imgSrc: githubLogo},
  {skillName: 'Sass', imgSrc: sassLogo},
  {skillName: 'React', imgSrc: reactLogo},
  {skillName: 'Redux', imgSrc: reduxLogo},
  {skillName: 'GatsbyJS', imgSrc: gatsbyLogo},
  {skillName: 'Jquery', imgSrc: jqueryLogo},
  {skillName: 'Bootstrap', imgSrc: bootstrapLogo},
  {skillName: 'Wordpress', imgSrc: wordpressLogo},
]

const Skills = () =>
  <Container className='skills text-center'>
    <div className='section-head text-center'>
      <img className='zigDivider' src={divider} alt='zigzag divider'/>
      <h2>Skills</h2>
      <p>These are my beloved skills that I have learned along the course of my Web Development career!</p>
    </div>

    <SkillList skillArr={skillArr} />
  </Container>

const SkillList = ({skillArr}) => {
  const skillListItems = skillArr.map((skill) =>
    <Col xs='6' md='4' lg='3' key={skill.skillName}>
      <div className='skill-img'><img src={skill.imgSrc} alt={skill.skillName} className='img-fluid'/></div>
    </Col>
  )

  return <Row className='skill-row'>{skillListItems}</Row>
}


export default Skills