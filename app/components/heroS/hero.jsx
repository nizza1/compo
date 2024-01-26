import React from 'react'
import HoverText from '@/app/components/global/hoverText/hoverText'
import styles from './styles.module.css'

import Image from 'next/image'
const img = '/hero-ilu/Palette-pana.svg'

import Button from '../global/contactButton/button'
const Hero = () => {
  return (
    <section className={styles.co}>

        

        <div className={styles.textCo}>
             <h1 className={styles.title}>
             <HoverText text='Wir entwickeln      maßgeschneiderte Websites'/>
             </h1>

             <p className={styles.underTitle}>
                 <HoverText text='Die deine  Kunden überzeugt'/>
             </p>

             <div className={styles.buttonCo}>
                <Button />
             </div>
        </div>

        <div className={styles.boxes}>
      
            <div className={styles.box}>
                <div className={styles.iluCo}>
                <Image 
                className={styles.ilu}
                src={img}
                alt='icon'
                fill={true}
                />
                </div>

                <h1 className={styles.boxText}>
                    Design
                </h1>
               
            </div>

            <div className={styles.box}>
               <h1 className={styles.boxText}>
                    Entwicklung
                </h1>
               
            </div>
            <div className={styles.box}>
               <h1 className={styles.boxText}>
                    Strategie
                </h1>
               
            </div>
            <div className={styles.box}>
               <h1 className={styles.boxText}>
                    Beratung
                </h1>
               
            </div>
        </div>
        
        
    </section>
  )
}

export default Hero