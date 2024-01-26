import React from 'react'
import styles from './styles.module.css'

import Link from 'next/link'


const header = () => {
  return (
    <header className={styles.co}>
        <div className={styles.innerCo}>
        <div className={styles.log}>
        <Link href='/'>LOG</Link>

        </div>
        <nav className={styles.nav}>
            <Link href='/blog'>Blog</Link>
        </nav>

        </div>
    </header>
  )
}
export default header