import React from 'react'
import './nav.css'

const Nav = () => {
  return (
    <div>
        <div className='nav-container'>
            <a href='/'>Home</a>
            <a href='/projects'>Projects</a>
            <a href='/contact'>Contact Me</a>
        </div>
    </div>
  )
}

export default Nav