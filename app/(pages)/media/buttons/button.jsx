"use client"

import React from 'react'

import { deleteImage } from '@/app/serverActions/media/delete/delete';

const Button = ({text, pathName}) => {

    const handleDelete = async() => {
        const del = await deleteImage(pathName);
        console.log(del);
    }

  return (
    <button onClick={handleDelete}>
        {text}
    </button>
  )
}

export default Button