import React from 'react'

const Section = ({className, id, children}) =>
  <div className={`${className} section`} id={id}>
    {children}
  </div>

export default Section