import React from 'react'
import styles from './styles.module.css'

import CreatePost from './createPost/createPost'

const page = () => {
  return (
    <main className={styles.main}>
        <div className={styles.innerCo}>
            <h1>
                here is the admin panel 
            </h1>

            <div className={styles.formCo}>
                <CreatePost />
            </div>

        </div>
    </main>
  )
}

export default page