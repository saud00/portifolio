import path from 'path'
import React from 'react'

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
        imgsrc: '/tour.jpg',
        link: ''
    }
]

const CardDiv = () => {
  return (
    <div>
        
    </div>
  )
}

export default CardDiv