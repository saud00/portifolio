import React from 'react'
import Cards from './Cards'
import { SiTailwindcss, SiNextdotjs } from "react-icons/si";


type CARDS = {
    id: number,
    name: string
    imgsrc : string,
    gif: string,
    link: string,
    logo1: string,
    logo2: string,
}[]



const cardData:CARDS = [
    {
        id:1,
        name: "tour site",
        imgsrc: '/tour.jpg',
        gif:'tour.gif',
        link: 'https://tour2.netlify.app/',
        logo1: 'devicon-nextjs-plain-wordmark',
        logo2: 'devicon-materialui-plain'
    },
    {
        id:2,
        name:"resturent site",
        imgsrc:'/hotel.png',
        gif:'hotel.gif',
        link:'https://friendlyhotel.netlify.app/',
        logo1:"devicon-react-original",
        logo2:'devicon-bootstrap-plain',
    },
    {
        id:3,
        name:'business',
        imgsrc:'/business.png',
        gif:'business.gif',
        link:'https://busines12.netlify.app/',
        logo1:"devicon-react-original",
        logo2:'devicon-bootstrap-plain',

    }
]

const CardDiv = ({setBlurStyle}) => {
  return (
    <div  style={{display:'flex', flexWrap:'wrap', justifyContent:'space-evenly', backgroundColor: 'inherit', width:'100%'}} className='bg-inherit' >
        {
            cardData.map((val , ind)=>{
                return(
                    <div  key={ind} style={{maxWidth:360, maxHeight:340, width:345, height:340, margin:'10px auto'}}  className='rounded-lg bg-white' onMouseEnter={()=>{setBlurStyle(true)}} onMouseLeave={()=>{setBlurStyle(false)}} >
                        <Cards val={val} ind={ind}/>

                    <div className='flex justify-evenly flex-row h-[40px] flex-nowrap py-1 bg-white text-black'>
                        {val.id == 1 ? 
                        <img alt='next.js' className='w-[2em] ' src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg'/>
                        :  <i  className={`text-[2em] ${val.logo1}`} />}
                        <i   className={`text-[2em] ${val.logo2}`} />

                    </div>
                    </div>
                )
            })
        }
    </div>
  )
}

export default CardDiv