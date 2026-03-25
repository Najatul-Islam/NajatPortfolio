import React from 'react'
import ThemeToggle from './ThemeToggle'
import Container from './Container'
import HeroBanner from './HeroBanner'
import HeroAbout from './HeroAbout'
import HeroResume from './HeroResume'
import HeroContact from './HeroContact'
import HeroPortfolio from './HeroProjects'
import ScrollBtn from './ScrollBtn'
import HeroAchieve from './HeroAchieve'
import HeroBlog from './HeroBlog'
import HeroProjects from './HeroProjects'

const MainPage = () => {
   
  return (
    <div className="">
      <Container>
      <HeroBanner/>
      <HeroAbout/>
      <HeroResume/>
      <HeroProjects/>
      <HeroAchieve/>
      <HeroBlog/>
      <HeroContact/>
      </Container>
    </div>
  )
}

export default MainPage
