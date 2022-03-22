import React from 'react'
import styles from '../styles/Home.module.css'

type Props = {}

const FirstTImeGif = (props: Props) => {

    const [firstTime, setTime] = React.useState(true)
    const initialState = 0
    const [incrementFirstTime, setIncrementFirstTime] = React.useState(initialState)
    const counterRef = React.useRef(initialState)
  
  
    React.useEffect(() => {
      let timeout = setTimeout(():void => {
      setTime(false)
      // setIncrementFirstTime( prevState => prevState + 1 )
      setIncrementFirstTime(counterRef.current + 1)
      // localStorage.setItem('incrementFirstTime',incrementFirstTime)
      console.log('1',incrementFirstTime)
  
      }, 4000);
      console.log(incrementFirstTime)
  
      return () => { clearTimeout(timeout) }
    }, [])
     
  return (
    <div> 
        {
        firstTime && incrementFirstTime===0 &&
          <main className={styles.main} style={{backgroundColor:"black"}}>

          <div className='overflow-hidden'>

            <img src="sam1.gif" alt="startup" />
          </div>
        </main>
        }
</div>
  )
}

export default FirstTImeGif