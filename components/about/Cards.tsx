import React,{useState} from 'react'
import Image from 'next/image'
import styles from '../../styles/portifolio.module.css'


interface Props {
    val: {
        id: number,
        name: string
        imgsrc : string,
        link: string,
        gif: string,
        logo1: string,
        logo2: string
    },
    ind: number
}


const Cards: React.FC<Props>  = (props: Props) => {
    const {id, name, imgsrc, link, gif, logo1, logo2} = props.val;
    const [changeLogo, setChangeLogo] = useState(false)

    const mouseEnter=(e,id:any)=>{
            setChangeLogo(true)
            {
                id === 1 ? document.body.style.backgroundColor = "rgb(6 95 70)" :
                id === 2 ? document.body.style.backgroundColor = "rgb(115 16 16)" :
                id === 3 ? document.body.style.backgroundColor = "rgb(12 74 110)" :
                document.body.style.backgroundColor = "inherit"
            }
        }
        
        const mouseLeave=()=>{
        setChangeLogo(false)
        document.body.style.backgroundColor = "inherit";
    }

  return (
      <div className= 'cursor-pointer w-[100%] h-[300px] relative rounded-xl'>
        {
            changeLogo ? 
            <Image   src={`${gif}`} alt={`${name}`} layout="fill" onClick={()=>{window.open(`${link}`)}}  className={styles.imgDiv && 'rounded-xl'} onMouseEnter={e=>mouseEnter(e,id)} onMouseLeave={mouseLeave}/>
            :
            <Image   src={`${imgsrc}`} alt={`${name}`}  layout="fill" onClick={()=>{window.open(`${link}`)}}  className={styles.imgDiv && 'rounded-xl'} onMouseEnter={e=>mouseEnter(e,id)} onMouseLeave={mouseLeave}/>
        }
    </div>
    
  )
}

export default Cards