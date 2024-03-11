import React from 'react'

const Boxes = () => {
  return (
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
  )
}

export default Boxes