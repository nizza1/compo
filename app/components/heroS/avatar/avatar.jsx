import React from 'react'
import styles from './styles.module.css'
import Image from 'next/image'

import Me from '/public/me/pMe.jpg'

const Avatar = () => {
  return (
    <div className={styles.co}>
        <div className={styles.imgCo}>
          <div className={styles.imgSingle}>
          </div>
          <div className={styles.imgSingle}>
          </div>
          <div className={styles.imgSingle}>
          </div>
          <div className={styles.imgSingle}>
          </div>
           {/*  <Image
            src={Me}
            placeholder='blur'
            alt='web Entwickler'
            fill={true}
            /> */}
        </div>
    </div>
  )
}

export default Avatar