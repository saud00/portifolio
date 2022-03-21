import React from 'react'
import TypeWriter from 'react-typewriter';
import styles from '../../styles/portifolio.module.css'

type Props = {}

function FirstPara({}: Props) {
  return (
    <div className='text-4xl sm:text-9xl font-extrabold flex scale-y-50 items-center h-screen px-4 font-Staatliches'>
         <TypeWriter typing={1}>
            COMPETITION AND <br/> CREATIVITY RUNS <br/> HARD  IN HIS VEINS <span className={styles.blinker}>!</span>
         </TypeWriter>
        
    </div>
  )
}

export function PortifolioPara(){
    return (
        <div className='text-4xl sm:text-9xl font-extrabold flex h-screen scale-y-50 px-4 items-center font-Staatliches'>
             <TypeWriter typing={1}>
               SHIFTING BRANDS FROM GIVING UP TO MOVING FORWARD <span className={styles.blinker}>!</span>
            </TypeWriter>
            
    
        </div>
      )
}

export default FirstPara

