"use client"
import React from 'react'
import styles from './styles.module.css'
import HoverText from '../hoverText/hoverText'
import { useScroll , useSpring , motion , useTransform } from 'framer-motion'
import { useRef } from 'react'
const Window = () => {
    
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start center', 'end end']
      })

     const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
     const opacity = useTransform(scrollYProgress, [0, 1], [0.5, 1]);

  return (
    <motion.div className={styles.outCo} ref={container} 
    style={{
      scale ,
      opacity
      }} >
        <div className={styles.titleCo}>
        <h1><HoverText text='Lorem ipsum dolor sit amet consectetur' /></h1>
        </div>
        
        
    <div className={styles.co}>

        <div className={styles.header}>
            <div className={styles.buttons}>
                <div className={styles.circle}/>
                <div className={styles.circle}/>
                <div className={styles.circle}/>
            </div>
        </div>
        <div className={styles.body}>
        Window
        </div>
    </div>
    </motion.div>
  )
}

export default Window