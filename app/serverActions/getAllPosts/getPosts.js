"use server"

import prisma from "@/lib/prisma";

export async function getPosts() {

    try {
    const posts = await prisma.post.findMany({
        where: {published: true},
        include: {
          author:{
            select: {name: true}
          }
        }
      })

      return posts;

    } catch (err) {
        console.log(err);
        throw err;
    }
}