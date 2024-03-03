import React from 'react'
import styles from './styles.module.css'
import { getPost } from '@/app/serverActions/getPost/getPost';

import Image from 'next/image';


const Page = async({params}) => {
    const postId = params.slug;
    const post = await getPost(postId);

  return (
    <main className={styles.main}>
        <div className={styles.innerCo}>
        <h1>
            {post.title}
        </h1>
        <p>by {post.author.name}</p>
        <Image src={post.image} 
        alt={post.title}
        width={300}
        height={200}
        /> 
         <p>
            {post.content}
        </p>
        
         </div>

       
        
    </main>
  )
}

export default Page