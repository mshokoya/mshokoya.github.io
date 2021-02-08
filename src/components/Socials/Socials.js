import React from 'react';
import 'font-awesome/css/font-awesome.min.css';

export const Socials = () => {
  return (
    <div className='socials'>
        <div className='socials__left'>
          <div><a href='/'><i className='socials__icon fa fa-linkedin'/></a></div>
          <div><a href='/'><i className='socials__icon fa fa-twitter'/></a></div>
          <div><a href='/'><i className='socials__icon fa fa-instagram'/></a></div>
          <div><a href='https://github.com/mshokoya'><i className='socials__icon fa fa-github'/></a></div>
          <div className='socials--vertical-line'/>
        </div>

        <div className='socials__right'>
          <div className='socials__email'>mayo_s@hotmail.co.uk</div>
          <div className='socials--vertical-line'/>
        </div>
    </div>
  );
}