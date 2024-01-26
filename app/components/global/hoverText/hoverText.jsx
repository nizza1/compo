import React from 'react'
import styles from './styles.module.css'


  

const HoverText = ({text}) => {
    const change = text || ''
  return (
    <>
      {change.split("").map((child, idx) => (
        <span className={styles.hoverText} key={idx}>
          {child}
        </span>
      ))}
    </>
  );
}

export default HoverText

/* 
<h1 className={`${styles.text} ${raleway.className}`}>
</h1>
 */