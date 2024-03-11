"use client"


import React, { useState } from 'react'
import { motion } from 'framer-motion';
import styles from './styles.module.css'

import Image from 'next/image';
const comSvg = '/illustrations/compass.svg'

const Compass = () => {

    const [rotation, setRotation] = useState(0);

    // Function to handle mouse movement over the SVG
    const handleMouseMove = (event) => {
      const { clientX, clientY, currentTarget } = event;
      const { x, y, width, height } = currentTarget.getBoundingClientRect();
      const centerX = x + width / 2;
      const centerY = y + height / 2;
      const radians = Math.atan2(clientX - centerX, clientY - centerY);
      const degree = radians * (180 / Math.PI) * -1;
      setRotation(degree);
    };


  return (
    <motion.div
    onMouseMove={handleMouseMove}
      style={{ width: '300px', height: '300px', 
      display: 'inline-block' }}
      initial={false}
      animate={{ rotate: rotation }}
      transition={{ type: 'just' }} // Customize this for smoother animation
     className={styles.co}>

        <Image 
        style={{
            pointerEvents: 'none',
        }}
        src={comSvg}
        fill={true}
        alt='web-design'
        />
     </motion.div>
  )
}

export default Compass