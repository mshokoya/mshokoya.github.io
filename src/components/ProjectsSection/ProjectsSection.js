import React from 'react';
import 'font-awesome/css/font-awesome.min.css';

export const Projects = () => {
  return (
    <div id='section-projects'>
      <div className='projects__title-box section__title-box'>
        <div className='projects__number section__title-number'>02.</div>
        <div className='projects__title section__title-text'>Projects</div>
        <div className='projects__horizontal-line section__title-horizontal-line'/>
      </div>

      <div className='projects__showcase'>
        
        <div className='projects__showcase-card--left'>
          <div className='projects__showcase-img-box--left'></div>
          <div className='projects__showcase-content-box--main-left'>
            <p className='projects__showcase-content-title--1'>Featured Project</p>
            <p className='projects__showcase-content-title--2'>Uber Clone</p>
            <div className='projects__showcase-content-box--second'>
              This project is a simple clone of Uber written in Typescript. it enables authentication ride discovery and real time ride tracking
            </div>
            <div>
              <ul className='projects__showcase-content-list--left'>
                <li className='projects__showcase-content-list-item--left'>Postgres</li>
                <li className='projects__showcase-content-list-item--left'>React</li>
                <li className='projects__showcase-content-list-item--left'>Node.js</li>
                <li className='projects__showcase-content-list-item--left'>Redis</li>
              </ul>
            </div>
            <div>
              <ul className='projects__showcase-content-list--left'>
                <li className='projects__showcase-content-list-item--left'>
                  <a href='/'><i className='socials__icon fa fa-github'/></a>
                </li>
                <li className='projects__showcase-content-list-item--left'>
                  <a href='/'><i className='socials__icon fa fa-link'/></a>
                </li>
              </ul>
            </div>
          </div>  
        </div>

        <div className='projects__showcase-card--right'>
        <div className='projects__showcase-img-box--right'></div>
          <div className='projects__showcase-content-box--main-right'>
            <p className='projects__showcase-content-title--1'>Featured Project</p>
            <p className='projects__showcase-content-title--2'>Uber Clone</p>
            <div className='projects__showcase-content-box--second'>
              This project is a simple clone of Uber written in Typescript. it enables authentication ride discovery and real time ride tracking
            </div>
            <div>
              <ul className='projects__showcase-content-list--right'>
                <li className='projects__showcase-content-list-item--right'>Postgres</li>
                <li className='projects__showcase-content-list-item--right'>React</li>
                <li className='projects__showcase-content-list-item--right'>Node.js</li>
                <li className='projects__showcase-content-list-item--right'>Redis</li>
              </ul>
            </div>
            <div>
              <ul className='projects__showcase-content-list--right'>
                <li className='projects__showcase-content-list-item--right'>
                  <a href='/'><i className='socials__icon fa fa-github'/></a>
                </li>
                <li className='projects__showcase-content-list-item--left'>
                  <a href='/'><i className='socials__icon fa fa-link'/></a>
                </li>
              </ul>
            </div>
          </div>
          
        </div>
      </div>
      
    </div>
  );
}