import React from 'react';
import { HeaderMidDesign, HeaderMidContent } from './components';

export const Header = () => {
  return (
    <div className='section-header'>
        <HeaderMidDesign>
          <HeaderMidContent/>
        </HeaderMidDesign>
    </div>
  );
}