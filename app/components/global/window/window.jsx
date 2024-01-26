import React from 'react'
import styles from './styles.module.css'
const Window = () => {
  return (
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
  )
}

export default Window