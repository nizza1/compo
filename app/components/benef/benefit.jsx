
import React from 'react'
import Window from '../global/window/window'
import styles from './styles.module.css'
import Textco from './textCo/textCo'


import HoverText from '../global/hoverText/hoverText'


const Benefit = () => {



  return (
    <div className={styles.co}>

        <div className={styles.innerCo}>


          <div className={styles.textsCo}>
            

          <div className={styles.textCo}>
           <Textco title='Here is the first benefit '
            
            children={<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit illum, fugit id repellat laboriosam, delectus dolores iusto tempora vitae maxime quidem architecto non eaque debitis nulla numquam magnam iste consectetur?</p>}
            />
             </div>

             <div className={styles.textCo}>
           <Textco title='Here is the first benefit '
            
            children={<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit illum, fugit id repellat laboriosam, delectus dolores iusto tempora vitae maxime quidem architecto non eaque debitis nulla numquam magnam iste consectetur?</p>}
            />
             </div>

            


             
          </div>
       <div className={styles.windowCo}>
       <Window />
       </div>
       
        </div>
        
    </div>
  )
}

export default Benefit