import React from 'react';
import decorLine from '../../../../assets/decor-line-2-black.svg';
import 'font-awesome/css/font-awesome.min.css';

export const HeaderMidDesign = ({children}) => {
  return (
    <div className='header__mid-design'>
      <div className='header__mid-design--top'>
        <img className='header__mid-design-decor header__mid-design-decor--top' src={decorLine} alt=''/>
      </div>
      {children}
      <div className='header__mid-design--bottom'>
        <img className='header__mid-design-decor header__mid-design-decor--bottom' src={decorLine} alt=''/>
      </div>

      <div className="header__mid-design--arrow-down">
        <a href="#section-about" className="smoth-scroll btn">
          <i className="fa fa-angle-double-down"/>
        </a>
      </div>
      
    </div>
  );
}