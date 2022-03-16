import React from 'react'
import Cards from './Cards'


type CARDS = {
    id: number,
    name: string
    imgsrc : string,
    gif: string,
    link: string
}[]

const cardData:CARDS = [
    {
        id:1,
        name: "tour site",
        imgsrc: '/tour.jpg',
        gif:'/toursity.gif',
        link: 'https://tour2.netlify.app/'
    },
    {
        id:2,
        name:"resturent site",
        imgsrc:'/hotel.png',
        gif:'/hotel.gif',
        link:'https://friendlyhotel.netlify.app/'
    },
    {
        id:3,
        name:'business',
        imgsrc:'/business.png',
        gif:'/business.gif',
        link:'https://busines12.netlify.app/'
    }
]

const CardDiv = () => {
  return (
    <div  style={{display:'flex', flexWrap:'wrap', justifyContent:'space-evenly', backgroundColor: 'inherit', width:'100%' }}  >
        {
            cardData.map((val , ind)=>{
                return(
                    <div  key={ind} style={{maxWidth:360, maxHeight:400, width:360, height:300, margin:'10px auto'}}  className="rounded-lg" >
                        <Cards val={val} ind={ind}/>
                    </div>
                )
            })
        }
    </div>
  )
}

export default CardDiv