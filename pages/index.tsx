import type { NextPage } from 'next'
import React, {useEffect, useState, useRef} from 'react'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import gsap from 'gsap'
import FirstPara from '../components/about/FirstPara'
import LeftNav from '../components/LeftNav'
import ExpertisePara from '../components/about/ExpertisePara'
import Footer from '../components/Footer'
import FirstTImeGif from '../components/firstTImeGif'


const Home: NextPage = () => {
  // const [firstTime, setTime] = useState(true)

  const [scroll, setScroll] = useState(0)
   
  // console.log(firstTime)
  const handleScroll = () => {
      setScroll(window.scrollY)
  }

  useEffect(() => {
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    });


  return (
    <div>
    <div className={`${ scroll>80 && 'transition ease-in-out delay-150 duration-700 dark:dark:bg-gray-800 ' } ` &&  styles.container}>
      <Head>
        <title>Saud</title>
        <meta name="description" content="best portifilio site by saud" />
        <link rel="icon" href="/favicon.ico" />
      </Head>


      {/* {
        firstTime && incrementFirstTime===0 ? 
        <FirstTImeGif setTime={setTime} />
       

        :  */}


        <main className={`${  scroll>80 && 'transition ease-in-out delay-150 duration-700 dark:dark:bg-black dark:bg-opacity-85 dark:text-white'} h-full w-screen pl-[10vw] md:pl-[6vw]`} >

          <div  className="fixed h-screen z-[-1] right-0 md:right-4 md:max-w-50 opacity-50">
            <img src="/saudshadow.png" alt="background image"  />
          </div> 

          <LeftNav scroll={scroll} />
          <FirstPara/>
          <ExpertisePara/>
        </main>
     {/* } */}

</div>
      {/* {


        !firstTime && */}
      <Footer/>
      {/* } */}

    </div>
  )
}

export default Home
