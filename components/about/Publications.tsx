import Link from 'next/link'
import React from 'react'

type Props = {}

const Publications = (props: Props) => {
  return (
      <div className='p-5 '>

        <div className='text-6xl sm:text-9xl font-extrabold  flex scale-y-50 font-Staatliches'>
            Publications 
        </div>
        <ul className='p-5'>
            <li className='p-5'>

            <Link href={'https://link.springer.com/chapter/10.1007/978-3-030-12385-7_11'}>
                <a>Malik, Saud Ahmed, et al. An efficient segmentation technique for Urdu optical character recognizer (OCR). Future of Information and Communication Conference. Springer, Cham, 2019.</a>
            </Link>
            </li>
            <li className='p-5'>

            <Link href={'https://www.hindawi.com/journals/sp/2020/8866041/'}>
                <a>Malik, Saud, et al. An efficient skewed line segmentation technique for cursive script OCR. Scientific Programming 2020 (2020).</a>    
            </Link>
            </li>
        </ul>
      </div>
  )
}

export default Publications