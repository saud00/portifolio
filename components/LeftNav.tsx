import Image from 'next/image'
import React, {useState} from 'react'
import Link from 'next/link'
import Router from 'next/router';
import { FiTwitter } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";
import { IconContext } from "react-icons";
import { BsGithub } from "react-icons/bs";

import { FiGithub } from "react-icons/fi";

type Props = {
  scroll : number
}

const LeftNav = (props: Props) => {
const {scroll} = props
    const [onImg , setOnImg] = useState(false)
    console.log(props.scroll)

  return (
    <>
    <div className='bg-black w-[10vw] md:w-[6vw] flex flex-col flex-1 justify-between text-white  fixed left-0 top-0 h-screen overflow-hidden'>
      <div className='h-[40%] bg-blue-500'>
        <div className={`${onImg && 'h-[300%] w-[300%] absolute left-[-35px] top-[-30px]  lg:left-[-85px] lg:top-[-67px] md:left-[-55px] md:top-[-45px] '} cursor-pointer`} onMouseEnter={()=>{setOnImg(true)}} onMouseLeave={()=>{setOnImg(false)}} onClick={()=>{Router.push('/')}} >
            {
            onImg? 
            <img src="/logo.gif" alt="logo gif"  height={500} width={500}/>
            :
            <img src="/logo1.png" alt="logo" height={100} width={100} />
            }
        </div>
        </div>

        <div className='h-[60%] flex flex-col flex-wrap flex-1 justify-evenly bg-white'>

          <div className='mx-auto'  >
          <FiGithub size='2em' className='hover:text-blue-400' onClick={()=>{window.open('https://www.linkedin.com/in/saud-malik%F0%9F%92%AD-2b50a2120/')}}/>
          </div>

          <div className='mx-auto'  >
            <FaLinkedinIn size='2em' className='hover:text-blue-400' onClick={()=>{window.open('https://www.linkedin.com/in/saud-malik%F0%9F%92%AD-2b50a2120/')}}/>
          </div>

          <div className='mx-auto'>
            <FiTwitter size='2em' className='hover:text-blue-400' onClick={()=>{window.open('https://twitter.com/Saud_sahib')}}/>
          </div>

          <div style={{writingMode:'vertical-rl',fontFamily: 'Orbitron'}} className='mx-auto opacity-30 ' >
            DOB 23 MAR 1994
          </div>

        </div>
    </div>

      <div className='fixed right-3 top-2 scale-y-150 z-1150' > 
      <Link href="/portifolio"><a>
        PORTIFOLIO
        </a></Link>
      </div>
      </>
  )
}

export default LeftNav