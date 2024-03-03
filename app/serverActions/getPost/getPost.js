"use server"

import prisma from "@/lib/prisma";

export async function getPost(id) {

    try {

        const post = await prisma.post.findUnique({
            where: {id: id},
            include: {
                author: {
                    select: {name: true}
            }}
        })

        return post
    
    } catch (err){
        console.log(err);
        throw err;
    }
}