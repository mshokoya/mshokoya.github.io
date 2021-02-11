import React from 'react';
import 'font-awesome/css/font-awesome.min.css';
import pinDropImg from '../../assets/pinDrop.png';
import chopCityImg from '../../assets/chopCity.png';
import tinyHouseImg from '../../assets/tinyHouse.png';

export const Projects = () => {
  return (
    <div id='section-projects'>
      <div className='projects__title-box section__title-box'>
        <div className='projects__number section__title-number'>02.</div>
        <div className='projects__title section__title-text'>Projects</div>
        <div className='projects__horizontal-line section__title-horizontal-line'/>
      </div>

      <div className='projects__showcase'>
        {/* left */}
        <div className='projects__showcase-card--left'>
          <div className='projects__showcase-img-box--left'>
            <img src={pinDropImg} alt='Pin Drop' className='projects__showcase-img' />
          </div>
          <div className='projects__showcase-content-box--main-left'>
            <p className='projects__showcase-content-title--1'>Featured Project</p>
            <p className='projects__showcase-content-title--2'>Pin Drop</p>
            <div className='projects__showcase-content-box--second'>
              This application was built for tourists and travel liberated people. It's an app that pins popular tourist spots in selected cities or counties on to a map
            </div>
            <div>
              <ul className='projects__showcase-content-list--left'>
                <li className='projects__showcase-content-list-item--left'>GraphQL</li>
                <li className='projects__showcase-content-list-item--left'>React</li>
                <li className='projects__showcase-content-list-item--left'>Node.js</li>
                <li className='projects__showcase-content-list-item--left'>Redis</li>
                <li className='projects__showcase-content-list-item--left'>Postgres</li>
              </ul>
            </div>
            <div>
              <ul className='projects__showcase-content-list--left'>
                <li className='projects__showcase-content-list-item--left'>
                  <a href='https://github.com/mshokoya/Pin-drop' target="_blank" rel="noreferrer">
                    <i className='socials__icon fa fa-github'/>
                  </a>
                </li>
                <li className='projects__showcase-content-list-item--left'>
                  <a href='https://vigilant-feynman-3228cb.netlify.app' target="_blank" rel="noreferrer">
                    <i className='socials__icon fa fa-link'/>
                  </a>
                </li>
              </ul>
            </div>
          </div>  
        </div>
        {/* end */}
        {/* right */}
        <div className='projects__showcase-card--right'>
          <div className='projects__showcase-img-box--right'>
          <img src={chopCityImg} alt='Chop City' className='projects__showcase-img' />
          </div>
          <div className='projects__showcase-content-box--main-right'>
            <p className='projects__showcase-content-title--1'>Featured Project</p>
            <p className='projects__showcase-content-title--2'>Chop City</p>
            <div className='projects__showcase-content-box--second'>
              This project is a recipe website that allows people to find and share recipes
            </div>
            <div>
              <ul className='projects__showcase-content-list--right'>
                <li className='projects__showcase-content-list-item--right'>Next.js</li>
                <li className='projects__showcase-content-list-item--right'>React</li>
                <li className='projects__showcase-content-list-item--right'>Node.js</li>
                <li className='projects__showcase-content-list-item--right'>GraphQL</li>
              </ul>
            </div>
            <div>
              <ul className='projects__showcase-content-list--right'>
                <li className='projects__showcase-content-list-item--right'>
                  <a href='https://github.com/mshokoya/recipe-website' target="_blank" rel="noreferrer">
                    <i className='socials__icon fa fa-github'/>
                  </a>
                </li>
                <li className='projects__showcase-content-list-item--left'>
                  <a href='https://recipe-website.vercel.app' target="_blank" rel="noreferrer">
                    <i className='socials__icon fa fa-link'/>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* end */}
        {/* left */}
        <div className='projects__showcase-card--left'>
          <div className='projects__showcase-img-box--left'>
            <img src={tinyHouseImg} alt='Tiny House' className='projects__showcase-img' />
          </div>
          <div className='projects__showcase-content-box--main-left'>
            <p className='projects__showcase-content-title--1'>Featured Project</p>
            <p className='projects__showcase-content-title--2'>Tiny House</p>
            <div className='projects__showcase-content-box--second'>
              This project is an AirBNB clone. It allows people to book vacation rentals
            </div>
            <div>
              <ul className='projects__showcase-content-list--left'>
                <li className='projects__showcase-content-list-item--left'>GraphQL</li>
                <li className='projects__showcase-content-list-item--left'>React</li>
                <li className='projects__showcase-content-list-item--left'>Node.js</li>
                <li className='projects__showcase-content-list-item--left'>Redis</li>
                <li className='projects__showcase-content-list-item--left'>Postgres</li>
                <li className='projects__showcase-content-list-item--left'>Stripe</li>
              </ul>
            </div>
            <div>
              <ul className='projects__showcase-content-list--left'>
                <li className='projects__showcase-content-list-item--left'>
                  <a href='https://github.com/mshokoya/hotel-booking-app' target="_blank" rel="noreferrer">
                    <i className='socials__icon fa fa-github'/>
                  </a>
                </li>
                <li className='projects__showcase-content-list-item--left'>
                  <a href='https://tinyhouse-application-01.herokuapp.com' target="_blank" rel="noreferrer">
                    <i className='socials__icon fa fa-link'/>
                  </a>
                </li>
              </ul>
            </div>
          </div>  
        </div>
        {/* end */}
      </div>
      
    </div>
  );
}