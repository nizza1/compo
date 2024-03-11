import React from 'react'
import HoverText from '@/app/components/global/hoverText/hoverText'
import styles from './styles.module.css'

//components
import Avatar from './avatar/avatar'
import Image from 'next/image'
import Compass from './compas/compas'
import Crads from './cards/crads'

const img = '/hero-ilu/Palette-pana.svg'

import Button from '../global/contactButton/button'
const Hero = () => {
  return (
    <section className={styles.co}>

        

        <div className={styles.textCo}>
             <h1 className={styles.title}>
             <HoverText text='Lorem ipsum '/>
             <span></span>
             <span></span>
             <span></span>
             <br />
             <HoverText text=' dolor sit '/>
             </h1>

             <p className={styles.underTitle}>
                 <HoverText text='lorem ipsum '/>
             </p>

             <div className={styles.buttonCo}>
                <Button />
             </div>
        </div>

        <div className={styles.avatarCo}>
         {/*    <Crads /> */}


        </div>

       
        
        
    </section>
  )
}

export default Hero