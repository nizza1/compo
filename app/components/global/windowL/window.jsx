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
    /*  const S = useTransform(scrollYProgress, [0, 1], [0.8, 1]); */
    /*  const scale = useSpring(S,{ stiffness: 1000, damping: 30 }); */
   /*   const scale = spring; */
     const opacity = useTransform(scrollYProgress, [0, 1], [0.5, 1]);
/*      const Y = useTransform(scrollYProgress, [0, 1], [0.8, 1])
     const spring = useSpring(Y); */
    
 /*      const targetScale = 1 -  0.05;
      const targetOpacity = 1 - 0.15; */
/* 
return <motion.div style={{ scaleX }} /> */
  return (
    <motion.div className={styles.outCo} ref={container} style={{scale , opacity}} >
        <div className={styles.titleCo}>
        <h1><HoverText text='Here is some experience' /></h1>
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