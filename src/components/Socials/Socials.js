import React from 'react';
import 'font-awesome/css/font-awesome.min.css';

export const Socials = () => {
  return (
    <div className='socials'>
        <div className='socials__left'>
          <div><a href='https://www.linkedin.com/in/michael-shokoya-284475206' target="_blank" rel="noreferrer"><i className='socials__icon fa fa-linkedin'/></a></div>
          <div><i className='socials__icon fa fa-twitter'/></div>
          <div><i className='socials__icon fa fa-instagram'/></div>
          <div><a href='https://github.com/mshokoya' target="_blank" rel="noreferrer"><i className='socials__icon fa fa-github'/></a></div>
          <div className='socials--vertical-line'/>
        </div>

        <div className='socials__right'>
          <div className='socials__email'>mayo_s@hotmail.co.uk</div>
          <div className='socials--vertical-line'/>
        </div>
    </div>
  );
}