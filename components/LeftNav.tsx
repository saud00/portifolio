import Image from 'next/image'
import React, {useState} from 'react'

type Props = {}

const LeftNav = (props: Props) => {

    const [onImg , setOnImg] = useState(false)

  return (
    <div className='bg-black w-[10vw] md:w-[7vw] flex text-white flex-col justify-between fixed left-0 top-0 h-screen overflow-hidden'>
        <div className={`${onImg && 'h-[300%] w-[300%] absolute left-[-70px] top-[-100] overflow-hidden'} cursor-pointer`} onMouseEnter={()=>{setOnImg(true)}} onMouseLeave={()=>{setOnImg(false)}}>
            {
            onImg? 
            <img src="/logo.gif" alt="logo gif"  className=" h-500 w-500 "/>
            :
            <img src="/logo.png" alt="logo" height={100} width={100} />
            }
        </div>
        <div>
            dadj
        </div>
    </div>
  )
}

export default LeftNav