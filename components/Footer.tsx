import React from 'react'
import styles from '../styles/Home.module.css'
import { FaCode } from "react-icons/fa";
type Props = {}

const Footer = (props: Props) => {
  return (
    <footer className={styles.footer}>
        <a
          href="https://www.linkedin.com/in/saud-malik%F0%9F%92%AD-2b50a2120/"
          target="_blank"
          rel="noopener noreferrer"
        >
          By Saud &nbsp;<FaCode size={32}/> 
         
        </a>
      </footer>
  )
}

export default Footer