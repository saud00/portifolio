import React from 'react'
import styles from '../../styles/Home.module.css'
type Props = {}

const ExpertisePara = (props: Props) => {
  return (
    <div>
        <div className='bg-white  text-black py-11 ' >

            <div className='text-6xl sm:text-9xl font-extrabold  flex scale-y-50 font-Staatliches'>
                Expertise
            </div>

            <div className='flex flex-row flex-wrap gap-3 sm:gap-10 justify-evenly '>

            <img className='max-w-[5em] sm:max-w-[10em]' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />

            <img className='max-w-[5em] sm:max-w-[10em]' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" />
           
            <img className='max-w-[5em] sm:max-w-[10em]' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-line.svg" />

            <img className='max-w-[5em] sm:max-w-[10em]' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-plain.svg" />


            <img className='max-w-[5em] sm:max-w-[10em]' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" />

            <img className='max-w-[5em] sm:max-w-[10em]' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" />

            <img className='max-w-[5em] sm:max-w-[10em]' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original-wordmark.svg" />

            <img className='max-w-[5em] sm:max-w-[10em]' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg" />

            <img className='max-w-[5em] sm:max-w-[10em]' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" />

            </div>
            </div>
    </div>
  )
}

export default ExpertisePara