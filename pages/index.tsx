import type { NextPage } from 'next'
import React, {useEffect, useState, useRef} from 'react'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import gsap from 'gsap'
import FirstPara from '../components/about/FirstPara'
import LeftNav from '../components/LeftNav'
import ExpertisePara from '../components/about/ExpertisePara'


const Home: NextPage = () => {
  const [page, setPage] = useState(true)
  const [scroll, setScroll] = useState(0)
  useEffect(() => {
    let timeout = setTimeout(():void => {
      setPage(false)
    }, 4000);


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
          page? 
          <main className={styles.main} style={{backgroundColor:"black"}}>

          <div className='overflow-hidden'>

            <img src="sam1.gif" alt="startup" />
          </div>
        </main>

        :

//About front page

        <main className={`${  scroll>80 && 'transition ease-in-out delay-150 duration-700 dark:dark:bg-black dark:bg-opacity-85 dark:text-white'} h-full pl-[10vw] md:pl-[7vw]`} >

          <div  className="fixed h-screen z-[-1] right-5 opacity-50">
            <img src="/saudshadow.png" alt="background image"/>
          </div> 

          <LeftNav/>
          <FirstPara/>
          <ExpertisePara/>
        </main>
      }

</div>
      {

        //if its not a startup than show footer

        !page &&
      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by &nbsp;  <b>Saud</b>
         
        </a>
      </footer>
      }

    </div>
  )
}

export default Home
