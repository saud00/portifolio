import React,{useState} from 'react'
import CardDiv from '../components/about/CardDiv'
import { PortifolioPara } from '../components/about/FirstPara'
import Hire from '../components/about/Hire'
import Footer from '../components/Footer'
import LeftNav from '../components/LeftNav'


type Props = {
}

const Portifolio = (props: Props) => {
  const [scroll, setScroll] = React.useState(0)
  const [blurStyle, setBlurStyle] = useState(false)


  const handleScroll = () => {
    setScroll(window.scrollY)
}

    React.useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    });


  return (
      
    <main className={`${  scroll>80 && 'transition ease-in-out delay-150 duration-700 dark:dark:bg-black dark:bg-opacity-85  dark:text-white'} ${blurStyle && 'dark:bg-opacity-0' } h-screen pl-[10vw] md:pl-[6vw]`} >

    <LeftNav scroll={scroll}/>
    <PortifolioPara/>
    <CardDiv setBlurStyle={setBlurStyle} />
    <Hire/>
    <Footer/>
  </main>

  )
}

export default Portifolio