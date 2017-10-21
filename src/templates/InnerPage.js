import React from 'react'
import { Container } from 'reactstrap'
import divider from '../styles/Assets/Divider.svg'

const InnerPageTemplate = ({ title, children }) =>

    <div className='inner-page'>
        <TitleBanner title={title} />
        
        <div className="inner-page-content">
            <Container>
                {children}
            </Container>
        </div>
    </div>


const TitleBanner = ({title}) =>
    <div className='title-banner text-center'>
        <Container>
            <img className='zigDivider' src={divider} alt='zigzag divider'/>
            <h1>{title}</h1>
        </Container>
    </div>

export default InnerPageTemplate;