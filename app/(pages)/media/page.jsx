import React from 'react'
import { copy, del, list } from '@vercel/blob';
import styles from './styles.module.css'
import Image from 'next/image';

import Button from './buttons/button';

const Page = async() => {

    /* const del = await deleteImage(); */
    const response = await list();

    const handleDelete = async(pathname) => {
        console.log(pathname);
    }
   /*  console.log(response.blobs); */
  return (
    <main className={styles.main}>
        <div className={styles.innerCo}>
        <h1>
            here is the media
        </h1>

        <p>files : {response.blobs.length}</p>

        <div>
        {response.blobs.map((blob) => (
            <div key={blob.pathname} className={styles.line}>
               {/*  <Image src={blob.url} 
                alt={blob.name}
                width={300}
                height={200}
                /> */}
                <h2>{blob.pathname}</h2>
                
                <div>
                <a href={blob.url}>
                {blob.pathname}
                 </a>
                 <Button text='delete' pathName={blob.url}/>
                </div>                
              
            </div>
      ))}
        </div>
        </div>
       
    </main>
  )
}

export default Page