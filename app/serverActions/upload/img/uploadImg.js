"use server"
/* import prisma from "@/lib/prisma"; */
/* import { revalidatePath } from 'next/cache'; */
/* import { upload } from '@vercel/blob/client'; */
import { put } from '@vercel/blob';


export async function uploadImg(file) {

    console.log(file);
   
    if (!file) {
        throw new Error('no file to upload');
    }

    try {
        const blob = await put(file?.name, file, {
            access: 'public',
            token: process.env.BLOB_READ_WRITE_TOKEN
          });

          console.log(blob)
          return blob

    } catch(err) {
        console.log(err);
        throw err;
    }

}