import React,{useState} from 'react'
import CardDiv from '../components/about/CardDiv'
import { PortifolioPara } from '../components/about/FirstPara'
import LeftNav from '../components/LeftNav'
import styles from '../styles/portifolio.module.css'


type Props = {
}

const Portifolio = (props: Props) => {
  const [scroll, setScroll] = React.useState(0)
  const [blurStyle, setBlurStyle] = useState(0)


  const handleScroll = () => {
    setScroll(window.scrollY)
}

    React.useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    });


  return (
      
    <main className={`${  scroll>80 && 'transition ease-in-out delay-150 duration-700 dark:dark:bg-black dark:bg-opacity-85 dark:text-white'} h-screen pl-[10vw] md:pl-[7vw]`} >

    <LeftNav scroll={scroll}/>
    <PortifolioPara/>
        <CardDiv  />

  </main>
  )
}

export default Portifolio