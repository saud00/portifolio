import React from 'react'
import Image from 'next/image'
interface Props {
    val: {
        id: number,
        name: string
        imgsrc : string,
        link: string
    },
    ind: number
}

const Cards: React.FC<Props>  = (props: Props) => {
    const {id, name, imgsrc, link} = props.val;

  return (
    <div style={{width: '100%', height: '100%', position: 'relative'}}>
        <Image src={`${imgsrc}`} alt={`${name}`} width="100%" height="100%" layout="fill"/>
    </div>
  )
}

export default Cards