import Image from 'next/image'
import React, {useState} from 'react'
import Link from 'next/link'
import Router from 'next/router';

type Props = {}

const LeftNav = (props: Props) => {

    const [onImg , setOnImg] = useState(false)

  return (
    <div className='bg-black w-[10vw] md:w-[6vw] flex  text-white flex-col justify-between fixed left-0 top-0 h-screen overflow-hidden'>
        <div className={`${onImg && 'h-[300%] w-[300%] absolute left-[-38px] top-[-30px]  lg:left-[-85px] lg:top-[-67px] md:left-[-55px] md:top-[-45px] '} cursor-pointer`} onMouseEnter={()=>{setOnImg(true)}} onMouseLeave={()=>{setOnImg(false)}} onClick={()=>{Router.push('/')}} >
            {
            onImg? 
            <img src="/logo.gif" alt="logo gif"  className=" h-500 w-500 "/>
            :
            <img src="/logo1.png" alt="logo" height={100} width={100} />
            }
        </div>
        <div>
            <Link href="/portifolio"><a>portifo</a></Link>
        </div>
    </div>
  )
}

export default LeftNav