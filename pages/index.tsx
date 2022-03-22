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


const Home: NextPage = () => {
  const [firstTime, setTime] = useState(true)
  const initialState = 0
  const [incrementFirstTime, setIncrementFirstTime] = useState(initialState)
  const counterRef = useRef(initialState)

  const [scroll, setScroll] = useState(0)

  useEffect(() => {
    let timeout = setTimeout(():void => {
    setTime(false)
    // setIncrementFirstTime( prevState => prevState + 1 )
    setIncrementFirstTime(counterRef.current + 1)
    // localStorage.setItem('incrementFirstTime',incrementFirstTime)
    console.log('1',incrementFirstTime)

    }, 4000);
    console.log(incrementFirstTime)

    return () => { clearTimeout(timeout) }
  }, [])
   

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
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

{//startup of site
}

      {
        firstTime && incrementFirstTime===0 ? 
          <main className={styles.main} style={{backgroundColor:"black"}}>

          <div className='overflow-hidden'>

            <img src="sam1.gif" alt="startup" />
          </div>
        </main>

        :

//About front firstTime

        <main className={`${  scroll>80 && 'transition ease-in-out delay-150 duration-700 dark:dark:bg-black dark:bg-opacity-85 dark:text-white'} h-full w-screen pl-[10vw] md:pl-[6vw]`} >

          <div  className="fixed h-screen z-[-1] right-0 md:right-4 md:max-w-50 opacity-50">
            <img src="/saudshadow.png" alt="background image"  />
          </div> 

          <LeftNav scroll={scroll} />
          <FirstPara/>
          <ExpertisePara/>
        </main>
      }

</div>
      {

        //if its not a startup than show footer

        !firstTime &&
      <Footer/>
      }

    </div>
  )
}

export default Home
