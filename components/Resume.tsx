import React from 'react'
import Link from 'next/link'
type Props = {}

const Resume = (props: Props) => {
  return (
    <div className='dark:dark-text-white my-5 px-5'>
        <Link href='/saud_cv.pdf'>
         <a target="_blank" className='bg-gradient-to-r from-stone-800 to-gray-500 hover:from-gray-500  hover:to-stone-800' download> Click on me to <strong> <i  >download resume</i> </strong> </a>
        </Link>
    </div>
  )
}

export default Resume