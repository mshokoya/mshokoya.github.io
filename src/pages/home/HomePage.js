import React from 'react';
import { Header } from '../../components/HeaderSection';
import { Nav } from '../../components/Nav';
import { Socials } from '../../components/Socials';
import { AboutMe } from '../../components/AboutMeSection';
import { BackgroundLayout } from '../../components/BackgroundLayout';
import { Projects } from '../../components/ProjectsSection';
import { Contact } from '../../components/ContactSection';
import { Footer } from '../../components/FooterSection';

export const HomePage = () => {
  
  return (
    <div className='section-home'>
      <BackgroundLayout/>
      <Nav />
      <Header/>
      <AboutMe />
      <Projects />
      <Contact />
      <Footer />
      <Socials />
    </div>
  );
}