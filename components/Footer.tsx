import React from 'react'
import styles from '../styles/Home.module.css'
import { FaCode } from "react-icons/fa";
type Props = {}

const Footer = (props: Props) => {
  return (
    <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Build by  Saud &nbsp;&nbsp;<FaCode size={32}/> 
         
        </a>
      </footer>
  )
}

export default Footer