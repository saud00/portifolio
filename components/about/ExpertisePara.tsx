import Image from 'next/image'
import React from 'react'
import styles from '../../styles/Home.module.css'
import { SiTailwindcss, SiNextdotjs } from "react-icons/si";

type Props = {}

const ExpertisePara = (props: Props) => {
  return (
    <div>
        <div className='bg-white  p-5' >

            <div className='text-6xl sm:text-9xl font-extrabold flex text-black  scale-y-50 font-Staatliches'>
                Expertise
            </div>

            <div className='flex flex-row flex-wrap gap-5 sm:gap-[8rem] text-zinc-700 justify-evenly my-10 '>

            <i className="devicon-react-original text-[5em] sm:text-[8em]"></i>

            <i className="devicon-javascript-plain text-[5em] sm:text-[8em]"></i>

            <SiNextdotjs className=" text-[5em] sm:text-[8em]"/>
          

            <i className="text-[5em] sm:text-[8em] devicon-typescript-plain"></i>
          
            <SiTailwindcss className=" text-[5em] sm:text-[8em]"/>


            <i className="text-[5em] sm:text-[8em] devicon-html5-plain"></i>

            <i className="text-[5em] sm:text-[8em] devicon-css3-plain"></i>

            <i className="text-[5em] sm:text-[8em] devicon-materialui-plain"></i>

            <i className="text-[5em] sm:text-[8em] devicon-bootstrap-plain"></i>
            </div>
            </div>
    </div>
  )
}

export default ExpertisePara