import Image from 'next/image'
import React, {useState} from 'react'
import Link from 'next/link'
import Router from 'next/router';
import { FiTwitter } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";
import { IconContext } from "react-icons";
import { BsGithub } from "react-icons/bs";
import { useRouter } from 'next/router';
import { FiGithub } from "react-icons/fi";

interface Props  {
  scroll? : number;
}

interface Path{
}

const LeftNav = ({scroll} : Props ) => {
  const router = useRouter()
  const [onImg , setOnImg] = useState(false)
  let path: string = router.pathname 
  console.log(path)

  return (
    <>
    <div className='bg-black w-[10vw] md:w-[6vw] flex flex-col flex-1 justify-between text-white  fixed left-0 top-0 h-screen overflow-hidden'>
    <div className='h-[50%] '>
        <div className={`${onImg && 'h-[300%] w-[300%] absolute left-[-35px] top-[-30px]  lg:left-[-85px] lg:top-[-67px] md:left-[-55px] md:top-[-45px] '} cursor-pointer`} onMouseEnter={()=>{setOnImg(true)}} onMouseLeave={()=>{setOnImg(false)}} onClick={()=>{Router.push('/')}} >
            {
            onImg? 
            <img src="/logo.gif" alt="logo gif"  height={500} width={500}/>
            :
            <img src="/logo1.png" alt="logo" height={100} width={100} />
            }
        </div>
        </div>

        <div className={`h-[50%] flex flex-col flex-wrap flex-1 justify-evenly ${scroll !== undefined && scroll >80 && 'max-h-[30%]' } `}>

          <div className='mx-auto'  >
          <FiGithub size='2em' className='hover:text-slate-400 cursor-pointer' onClick={()=>{window.open('https://github.com/saud00')}}/>
          </div>

          <div className='mx-auto'  >
            <FaLinkedinIn size='2em' className='hover:text-slate-400 cursor-pointer' onClick={()=>{window.open('https://www.linkedin.com/in/saud-malik%F0%9F%92%AD-2b50a2120/')}}/>
          </div>

          <div className='mx-auto'>
            <FiTwitter size='2em' className='hover:text-slate-400 cursor-pointer' onClick={()=>{window.open('https://twitter.com/Saud_sahib')}}/>
          </div>

          <div style={{ writingMode:'vertical-rl',fontFamily: 'Orbitron'}} className={`mx-auto opacity-30 ${scroll !== undefined && scroll>80 && 'hidden' }`} >
            DOB 23 MAR 1994
          </div>

        </div>
    </div>

      <div className='fixed right-4 top-2 scale-x-150 z-1150 font-Staatliches' > 
      <Link href={`${ path === '/portifolio' ? '/' : "/portifolio"}`}>
        <a>
        {
          path && path === '/portifolio' ? 'HOME' : "PORTIFOLIO"
        }
        </a></Link>
      </div>
      </>
  )
}

export default LeftNav

// absolute left-[-35px] top-[-30px]  lg:left-[-85px] lg:top-[-67px] md:left-[-55px] md:top-[-45px] 
// flex content-center text-center