import React from 'react'
import styles from './styles.module.css'
import prisma from '@/lib/prisma'

async function getPosts(){
  const posts = await prisma.post.findMany({
    where: {published: true},
    include: {
      author:{
        select: {name: true}
      }
    }
  })

  return posts
}

const Page = async() => {

  const posts = await getPosts()
  console.log(posts);
  return (
    <main className={styles.main}>

        <div className={styles.innerCo}>
        <h1>BLOG</h1>

        <div className={styles.content}>
          {posts.map((post) => (
            <div key={post.id} className={styles.post}>
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