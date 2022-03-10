import Image from 'next/image'
import React from 'react'

type Props = {}

const LeftNav = (props: Props) => {
  return (
    <div className='bg-black w-[10vw] md:w-[5vw] flex text-white flex-col justify-between fixed left-0 top-0 h-screen'>
        <div className='color-white' >
            <Image src="/S.jpg" alt="logo" height={100} width={100} />
        </div>
        <div>
            dadj
        </div>
    </div>
  )
}

export default LeftNav