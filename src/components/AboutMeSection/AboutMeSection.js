import React from 'react';

export const AboutMe = () => {
  return (
    <div id='section-about'>

      <div className='about__title-box section__title-box'>
        <div className='about__number section__title-number'>01.</div>
        <div className='about__title section__title-text'>About Me</div>
        <div className='about__horizontal-line section__title-horizontal-line'/>
      </div>

      <div className='about__left-side'>
        <div className='about__text-box'>
          <p className='about__text--1'>Hello I'm Michael Shokoya, a self taught software engineer based in Manchester, UK.</p>
          <p className='about__text--2'>
            I'm passionate about creating software & web applications. I'm a perfectionist so I spend 
            a lot of time optimising my code and always looking for ways to improve it in terms of performance and readability.
          </p>
        </div>

        <div className='about__table'>
          <div className='about__table--1'>
            <div className='about__table--title'>Some things i'm great with</div>
            <div className='about__table--list-box'>
              <ul className='about__table--list'>
                <li className='about__table--list-item'>Javascript (ES6+)</li>
                <li className='about__table--list-item'>React</li>
                <li className='about__table--list-item'>Nodejs</li>
                <li className='about__table--list-item'>HTML & CSS</li>
                <li className='about__table--list-item'>SQL & NOSQL (Postgres & Mongo)</li>
                <li className='about__table--list-item'>GraphQL</li>
                <li className='about__table--list-item'>Microservices</li>
                <li className='about__table--list-item'>Docker</li>
                <li className='about__table--list-item'>Kubernetes</li>
                <li className='about__table--list-item'>Many microservices patterns</li>
                <li className='about__table--list-item'>Kafka</li>
                <li className='about__table--list-item'>+ Many more</li>
              </ul>
            </div>
          </div>

          <div className='about__table--2'>
            <div className='about__table--title'>Some things i'm learning</div>
            <div className='about__table--list-box'>
              <ul className='about__table--list'>
                <li className='about__table--list-item'>Event driven arcitecture</li>
                <li className='about__table--list-item'>Domain-driven design</li>
                <li className='about__table--list-item'>CQRS</li>
                <li className='about__table--list-item'>Event sourcing</li>
                <li className='about__table--list-item'>AWS</li>
                <li className='about__table--list-item'>Devops (Mastery)</li>
                <li className='about__table--list-item'>+ Many more</li>
              </ul>
            </div>
          </div>

          <div className='about__table--3'>
            <div className='about__table--title'>Some things I plan an leaning in 2021</div>
            <div className='about__table--list-box'>
              <ul className='about__table--list'>
                <li className='about__table--list-item'>Data Science</li>
                <li className='about__table--list-item'>Data Analysis</li>
                <li className='about__table--list-item'>Machine Learning</li>
                <li className='about__table--list-item'>Deep Learning</li>
                <li className='about__table--list-item'>+ Many more</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}