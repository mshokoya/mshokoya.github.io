import React, {useEffect} from 'react';
import logo from '../../assets/logo1n.svg';
import resume from '../../assets/resume.pdf'

export const Nav = () => {
  let prevScrollPosition = window.pageYOffset;

  useEffect(() => {
    window.addEventListener('scroll', responsiveScrollBar);
    // return window.removeEventListener('scroll', responsiveScrollBar);
  })

  const responsiveScrollBar = (event) => {
    var currentScrollPosition = window.pageYOffset;
    prevScrollPosition > currentScrollPosition || currentScrollPosition <= 0
      ? document.querySelector('.nav').style.top = 0
      : document.querySelector('.nav').style.top = '-10rem'
    prevScrollPosition = currentScrollPosition
  }

  const handleLinkClick = (event) => {
    setTimeout(() => document.querySelector('.nav').style.top = 0, 800)
  }

  return (
    <div className='nav'>
        <div className='nav__logo-box'>
          <a href='/'><img className='nav__logo' src={logo} alt='logo' /></a>
        </div>

        <div className='nav__nav-box'>
          <ul className='nav__nav-list'>
            <li className='nav__nav-item'><a href='#section-about' onClick={handleLinkClick}><span>01.</span> About Me</a></li>
            <li className='nav__nav-item'><a href='#section-projects' onClick={handleLinkClick}><span>02.</span> Expreiance</a></li>
            <li className='nav__nav-item'><a href='#section-contact' onClick={handleLinkClick}><span>03.</span> Contact</a></li>
            <li className='nav__nav-item'><a href={resume} target="_blank" rel="noreferrer">Resume</a></li>
          </ul>
        </div>
    </div>
  );
}