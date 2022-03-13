import type { NextPage } from 'next'
import React, {useEffect, useState, useRef} from 'react'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import gsap from 'gsap'
import { Wave } from 'react-animated-text'
import FirstPara from '../components/about/FirstPara'
import { collectAssets } from 'next/dist/build/webpack/plugins/middleware-plugin'
import LeftNav from '../components/LeftNav'
// import  SplitText from 'gsap';


const Home: NextPage = () => {
  const [page, setPage] = useState(true)
  const [scroll, setScroll] = useState(0)
  // const name:any = useRef(null)
  // const name2:any = useRef(null)
  // const name3:any = useRef(null)

  // const naam1:string = "SAUD"
  // const naam2:string = "AHMED"
  // const naam3:string = "MALIK"
  // let arr1:string[] = Array.from(naam1)
  // let arr2:string[] = Array.from(naam2)
  // let arr3:string[] = Array.from(naam3)
 
  useEffect(() => {
    let timeout = setTimeout(():void => {
      setPage(false)
    }, 4000);

    // gsap.from(name.current, {
    //   opacity: 0,
    //   x: -100,
    //   duration: 2,
    //   // rotation: 5,
    //   delay: 1,
    // });
    
    // gsap.from(name2.current, {
    //   opacity: 0,
    //   y: -50,
    //   duration: 2,
    //   // rotation: 5,
    //   delay: 1,
    //   ease: "linear"
    // });
    
    // gsap.from(name3.current, {
    //   opacity: 0,
    //   x: 200,
    //   duration: 2,
    //   // rotation: 5,
    //   delay: 1,
    // });

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
    <div className={`${ scroll>80 && 'transition ease-in-out delay-150 duration-700 dark:dark:bg-gray-800 ' } ` &&  styles.container}>
      <Head>
        <title>Saud</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {
          page? 
          <main className={styles.main} style={{backgroundColor:"black"}}>

            {/* <span className="border-l-8 border-white h-20" >&nbsp;&nbsp;&nbsp;</span>

          <span className="text-5xl text-white font-bold font-Staatliches " ref={name}>
            {arr1} &nbsp;&nbsp;
          </span>
         
          <span className="text-5xl text-white font-bold font-Staatliches " ref={name2}>
            {arr2} &nbsp;&nbsp;
          </span>

          <span className="text-5xl text-white font-bold font-Staatliches" ref={name3}>
            {arr3}
          </span> */}
          <div className='overflow-hidden'>

            <img src="sam1.gif" alt="startup" />
          </div>
        </main>

        :

        <main className={`${  scroll>80 && 'transition ease-in-out delay-150 duration-700 dark:dark:bg-black dark:bg-opacity-85 dark:text-white'} h-screen pl-[10vw] md:pl-[7vw]`} >

          <div>
            <img src="/saudshadow.png" alt="background image" className="fixed h-screen z-[-1] fixed right-5 opacity-50"/>
          </div> 

          <LeftNav/>
          <FirstPara/>

        </main>
      }

      {
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
