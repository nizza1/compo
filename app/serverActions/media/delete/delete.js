"use server"
/* import prisma from "@/lib/prisma"; */
/* import { revalidatePath } from 'next/cache'; */
import { del } from '@vercel/blob';
import { revalidatePath } from 'next/cache'

/* 
{
            access: 'public',
            token: process.env.BLOB_READ_WRITE_TOKEN
          }
 */
export async function deleteImage(file) {
   
    if (!file) {
        throw new Error('no file selected');
    }

    try {

        const response = await del(file);
           console.log(response);
           revalidatePath('/media');
          return response

    } catch(err) {
        console.log(err);
        throw err;
    }

}