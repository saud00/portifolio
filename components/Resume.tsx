import React from 'react'
import Link from 'next/link'
type Props = {}

const Resume = (props: Props) => {
  return (
    <div className='dark:dark-text-white my-5 px-5'>
        <Link href='/saud_cv.pdf'>
         <a target="_blank" className='text-gradient-to-r from-white to-gray-500 hover:from-pink-500 hover:to-yellow-500' download> Click on me to <strong> <i  >download resume</i> </strong> </a>
        </Link>
    </div>
  )
}

export default Resume