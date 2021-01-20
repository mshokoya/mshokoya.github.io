import React from 'react';
import Typewriter from 'typewriter-effect';

export const HeaderMidContent = () => {
  return (
    <div className='header__mid-content'>
        <h3 className='header__mid-content--line-1'>Hi, my name is</h3>
        <div>
          <h1 className='header__mid-content--line-2'>Michael Shokoya</h1>

            <Typewriter 
              options={{
                wrapperClassName: 'header__mid-content--line-3',
                strings: ['I build software', 'I build websites', 'I am passionate about Fitness.', 'I am from Manchester, UK'],
                autoStart: true,
                loop: true,
              }}
            />

          <div className='header__mid-content--line-4'>
             i am a software engineer based in manchester, UK.
             my main focus is building websites & distributed systems
          </div>
        </div>
        <button className='header__mid-content--button'>
          <a href='mailto:mayo_s@hotmail.co.uk'>Get in touch</a>
        </button>
    </div>
  );
}