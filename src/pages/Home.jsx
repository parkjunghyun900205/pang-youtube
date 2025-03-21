import React from 'react'
import Main from '../components/section/Main'
import Today from '../components/comtents/Today'
import Developer from '../components/comtents/Developer'
import Webd from '../components/comtents/Webd'
import Website from '../components/comtents/Website'
import Gsap from '../components/comtents/Gsap'
import Port from '../components/comtents/Port'
import Youtube from '../components/comtents/Youtube'


const Home = () => {
  return (
    <Main title="팡식이 유튜브" description="팡식이 유튜브 채널 페이지입니다.">
      <Today />
      <Developer />
      <Webd />
      <Website />
      <Gsap />
      <Port />
      <Youtube />
    </Main>
  )
}

export default Home