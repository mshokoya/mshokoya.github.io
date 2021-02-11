import React from 'react';

export const Contact = () => {
  return (
    <div id='section-contact'>
      <h3 className='contact__line--1'> <span className='contact__line--number'>.03</span> What's next</h3>
      <h1 className='contact__line--2'>Get in touch</h1>
      <p className='contact__line--3'>I am currently looking for opportunities to work. 
        if you're interested in hiring me, 
        don't hesitate to email me. 
        I will respond ASAP
      </p>
      <button className='contact__line--button'>
        <a href='mailto:mayo_s@hotmail.co.uk'>Get in touch</a>
      </button>
    </div>
  );
}