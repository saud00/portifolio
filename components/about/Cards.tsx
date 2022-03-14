import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

interface Props {
    val: {
        id: number,
        name: string
        imgsrc : string,
        link: string
    },
    ind: number
}

interface childProps{
    
}

const Cards: React.FC<Props>  = (props: Props) => {
    const {id, name, imgsrc, link} = props.val;

    const mouseEnter=(id:any)=>{
        {
            id === 1 ? document.body.style.backgroundColor = "red" :
            id === 2 ? document.body.style.backgroundColor = "blue" :
            id === 3 ? document.body.style.backgroundColor = "yellow" :
            document.body.style.backgroundColor = "inherit"
        }
    }
    
    const mouseLeave=()=>{
        document.body.style.backgroundColor = "inherit"
    }

  return (
    <div style={{width: '100%', height: '100%', position: 'relative'}} className='cursor-pointer' >
            <Image src={`${imgsrc}`} alt={`${name}`} width="100%" height="100%" layout="fill" onClick={()=>{window.open(`${link}`)}} onMouseEnter={e=>mouseEnter(id)} onMouseLeave={mouseLeave} />
    </div>
  )
}

export default Cards