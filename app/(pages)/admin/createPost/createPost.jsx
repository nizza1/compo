"use client"

import React, {useState, useRef} from 'react'
import styles from './styles.module.css'

import { uploadImg } from '@/app/serverActions/upload/img/uploadImg';

const CreatePost = () => {

    const [loading, setLoading] = useState(false);

    const imageFile = useRef(null);
    const [blob, setBlob] = useState(null);

    const [res , setRes] = useState(null);


    const initValues = {
        title: '',
        by:'',
        des: '' ,
        imgUrl: '',
     };

    const initState = {values: initValues};

    const [state , setState ] = useState(initState);
    
  /*   const {values} = state; */

    const handleChange = ({target}) => setState((prev)=> ({
        ...prev,
        values: {
            ...prev.values,
            [target.name]: target.value
        }
    }))

    const handleCreate = async(e)=> {
  
              e.preventDefault();
              setLoading(true);

              const file = imageFile?.current.files[0];

              const ress = await uploadImg(file);
              
              console.log(ress);


            /*   const response = await fetch(
                `/api/img/upload?filename=${file?.name}`,
                {
                  method: 'POST',
                  body: {
                    file
                  }
                },
              ); */
     /* 
              const newBlob = (await response.json());
    
              setState(prevState => ({
                ...prevState,
                values: {
                  ...prevState.values,
                  imgUrl: newBlob?.url || ''
                }
              })); */

           /*   if (newBlob?.url) {
             const { title, des, by, imgUrl } = state.values;
              const response = await fetch(
                '/api/post/upload', // Update the URL to match your new route
                {
                  method: 'POST',
                  body: JSON.stringify({ title, des, by, imgUrl })
                 // Sending file, title, and des as JSON
                }
              );

              console.log(response);
            } */
            
              setLoading(false);
    
        }
      

          
  return (
    <div className={styles.co}>
        <form onSubmit={handleCreate}>

          {blob && (<h1>{blob?.url || blob}</h1>)}

        < div className={styles.inputCo} >
               < label htmlFor='theName'
                className={styles.label}
                >
                  Title
                </label>
               < input type='text'
                name='title'
                placeholder='title of your post'
                className={styles.inputField} 
             
               onChange={handleChange}/>  
        </div>
        <div className={styles.inputCo}>
                    <label htmlFor="imageFile" className={styles.label}>
                        Image
                    </label>
                    <input
                       ref={imageFile}
                        type="file"
                        name="imageFile"
                        accept="image/*"
                        className={styles.inputField}
                    />
                </div>
        < div className={styles.inputCo} >
               < label htmlFor='des'
                className={styles.label}
                >
                  description
                </label>
               < input type='text'
                name='des'
                placeholder='post description'
                className={styles.inputField} 
             
               onChange={handleChange}/>  
        </div>
      
        < div className={styles.inputCo} >
               < label htmlFor='by'
                className={styles.label}
                >
                  By
                </label>
               < input type='text'
                name='by'
                placeholder='Author name'
                className={styles.inputField} 
             
               onChange={handleChange}/>  
        </div>

        < div className={styles.inputCo} >
               < label htmlFor='body'
                className={styles.label}
                >
                  Body
                </label>
               < input type='text'
                name='body'
                placeholder='text of the post'
                className={styles.inputField} 
             
               onChange={handleChange}/>  
        </div>


             <div className={styles.createBuCo}>
                 <button type='submit' 
                 className={styles.contactButton} 
                 disabled={loading}>
                     create post 
                </button>
             </div>
             
        </form>
    </div>
  )
}

export default CreatePost