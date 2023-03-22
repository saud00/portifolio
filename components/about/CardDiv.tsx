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
        name: "SAAS PIXLS RFP WEB APPLICATION",
        imgsrc: '/pixlss.png',
        gif:'pixls.png',
        link: 'https://pixlsio.vercel.app/',
        logo1: 'devicon-nextjs-plain-wordmark',
        logo2: 'devicon-firebase-plain'
    },
    {
        id:2,
        name:"NGO site",
        imgsrc:'/ngos.png',
        gif:'ngo.png',
        link:'https://humanhope.org/',
        logo1:"devicon-react-original",
        logo2:'devicon-materialui-plain',
    },    {
        id:3,
        name: "tour site",
        imgsrc: '/tours.png',
        gif:'tour.gif',
        link: 'https://tour2.netlify.app/',
        logo1: 'devicon-nextjs-plain-wordmark',
        logo2: 'devicon-materialui-plain'
    },
    {
        id:4,
        name:"resturent site",
        imgsrc:'/hotels.png',
        gif:'hotel.gif',
        link:'https://friendlyhotel.netlify.app/',
        logo1:"devicon-react-original",
        logo2:'devicon-bootstrap-plain',
    },
    {
        id:5,
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
    <div className='p-5'>
        <div className='text-4xl sm:text-5xl font-extrabold flex scale-y-50 font-Staatliches my-5  text-black'>
            RECENT PROJECTS
        </div>

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
    </div>
  )
}

export default CardDiv