import React from 'react'
import Window from '../global/window/window'
import styles from './styles.module.css'

import HoverText from '../global/hoverText/hoverText'
const Benefit = () => {
  return (
    <div className={styles.co}>

        <div className={styles.innerCo}>
        <div className={styles.textCo}>
            <h1>
                <HoverText text='Here is the first benefit '/>
            </h1>

            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit illum, fugit id repellat laboriosam, delectus dolores iusto tempora vitae maxime quidem architecto non eaque debitis nulla numquam magnam iste consectetur?
            </p>
        </div>
        <Window />
        </div>
        
    </div>
  )
}

export default Benefit