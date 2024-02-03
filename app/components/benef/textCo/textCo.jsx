"use client"
import React, {useRef} from 'react'
import HoverText from '../../global/hoverText/hoverText'
import {motion ,useTransform ,useScroll } from 'framer-motion'
import styles from './styles.module.css'

const Textco = ({title, p }) => {
    const textAr= useRef(null)
    const { scrollYProgress } = useScroll({
    target: textAr,
    offset: ['start center', 'end end']
     })
   const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.2]);
  return (
    <div className={styles.co}>
         <h1><HoverText text={title}/></h1> 
        
         <motion.div ref={textAr} style={{opacity}}>
          <p>{p}</p>
         </motion.div>
    </div>
  )
}

export default Textco