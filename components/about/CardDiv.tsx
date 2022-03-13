import React from 'react'
import Cards from './Cards'

type CARDS = {
    id: number,
    name: string
    imgsrc : string,
    link: string
}[]

const cardData:CARDS = [
    {
        id:1,
        name: "tour site",
        imgsrc: '/tour.png',
        link: 'tour2.netlify.app/'
    },
    {
        id:2,
        name:"resturent site",
        imgsrc:'/hotel.png',
        link:'friendlyhotel.netlify.app/'
    },
    {
        id:3,
        name:'business',
        imgsrc:'/business.png',
        link:'busines12.netlify.app/'
    }
]

const CardDiv = () => {
  return (
    <div  style={{display:'flex', flexWrap:'wrap', justifyContent:'space-evenly', backgroundColor:'inherit'}} >
        {
            cardData.map((val , ind)=>{
                return(
                    <div key={ind} style={{maxWidth:360, maxHeight:400,backgroundColor:'blue',width:360, height:300, margin:'10px auto'}}  >
                        <Cards val={val} ind={ind}/>
                    </div>
                )
            })
        }
    </div>
  )
}

export default CardDiv