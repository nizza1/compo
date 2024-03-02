
import React from 'react'
import styles from './styles.module.css'

import Image from 'next/image'
import HoverText from '@/app/components/global/hoverText/hoverText'

async function getPosts(){

  const response = await fetch('http://localhost:3000/api/getAllPosts', {
    next: { revalidate: 60 }, // Revalidate every 60 seconds
    method: 'GET',
  })

  const posts = await response.json();
  return posts

}

const Page = async() => {

const posts = await getPosts();

  return (
    <main className={styles.main}>

        <div className={styles.innerCo}>
        <h1>BLOG   </h1>

        <div className={styles.content}>
    
          {posts.map((post) => (
            <div key={post.id} className={styles.post}>
              <Image
                src={post.image}
                alt={post.title}
                width={300}
                height={200}
                />
              <h2>{post.title}</h2>
              <p>By {post.author.name}</p>
              <p>{post.content}</p>
            </div>
          ))} 
        </div>
        </div>
       
    </main>
  )
}

export default Page