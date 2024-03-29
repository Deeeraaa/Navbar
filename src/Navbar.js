import React, { useState, useRef, useEffect } from 'react'
import { FaBars, FaTwitter } from 'react-icons/fa'
import { links, social } from './data'
import logo from './logo.svg'

const Navbar = () => {
  
   const [show, setShow] = useState(false);

  return <nav>
    <div className="nav-center">
      <div className="nav-header">
        <img src={logo} alt="loggo" />
        <button className="nav-toggle" onClick={() => {
          setShow(!show)
        }}>
          <FaBars />
        </button>
      </div>
      
      {show && <div className="links-container show-container">
        <ul className="links">
          {links.map((link) => {
            const { id, url, text } = link;
            return <li key={id}>
              <a href={url}>{ text }</a>
            </li>
          })}
        </ul>
        </div> }
        
      <ul className="social-icons">
        {social.map((social) => {
          const { id, url, icon } = social;
          return <li key={id}>
            <a href={url}>{ icon }</a>
          </li>
        })}
      </ul>
    </div>
  </nav>
}

export default Navbar
