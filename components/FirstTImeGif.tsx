import React from 'react'
import styles from '../styles/Home.module.css'

type Props = {
    setTime: boolean
}

const FirstTImeGif = () => {

  
  
    // React.useEffect(() => {
    //   let timeout = setTimeout(():void => {
    //   // setTime(false)
  
    //   }, 4000);
  
    //   return () => { clearTimeout(timeout) }
    // }, [])
     
  return (
    <div> 
          <main className={styles.main} style={{backgroundColor:"black"}}>

          <div className='overflow-hidden'>

            <img src="sam1.gif" alt="startup" />
          </div>
        </main>
        
</div>
  )
}

export default FirstTImeGif