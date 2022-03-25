import React from 'react'
import Cards from './Cards'


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
        gif:'/toursity.gif',
        link: 'https://tour2.netlify.app/',
        logo1: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-line.svg',
        logo2: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg'
    },
    {
        id:2,
        name:"resturent site",
        imgsrc:'/hotel.png',
        gif:'/hotel.gif',
        link:'https://friendlyhotel.netlify.app/',
        logo1:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg',
        logo2:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
    },
    {
        id:3,
        name:'business',
        imgsrc:'/business.png',
        gif:'/business.gif',
        link:'https://busines12.netlify.app/',
        logo1:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg',
        logo2:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"

    }
]

const CardDiv = ({setBlurStyle}) => {
  return (
    <div  style={{display:'flex', flexWrap:'wrap', justifyContent:'space-evenly', backgroundColor: 'inherit', width:'100%'}} className='bg-inherit' >
        {
            cardData.map((val , ind)=>{
                return(
                    <div  key={ind} style={{maxWidth:360, maxHeight:350, width:345, height:340, margin:'10px auto'}}  className='rounded-xl bg-inherit' onMouseEnter={()=>{setBlurStyle(true)}} onMouseLeave={()=>{setBlurStyle(false)}} >
                        <Cards val={val} ind={ind}/>

                    <div className='flex justify-evenly flex-row h-[40px] flex-nowrap py-1 bg-white'>
                        <img  src={`${val.logo1}`} alt={`${val.name}`}   className='w-[4em]  ' />
                        <img  src={`${val.logo2}`} alt={`${val.name}`}  className='w-[4em] ' />

                    </div>
                    </div>
                )
            })
        }
    </div>
  )
}

export default CardDiv