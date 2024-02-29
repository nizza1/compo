// createPost.js

import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';



export async function POST(req) {

  const body = await req.json();
  console.log(body);

  const imgUrl = body.imgUrl;

  console.log(imgUrl);
  if (!imgUrl) {
   /*  return NextResponse.error('postImage is required', { status: 400 }); */
   return {
    status: 201,
    body: JSON.stringify({ message: 'Post created successfully' }),
  };
  }
try {
  // Create post in database
  const { title, by, des, imgUrl } = body;
  const createdPost = await prisma.post.create({
    data: {
      title,
      author: {
        connect: { id: clt4vd9ti00005ag8ik2ge9i0 }, // Replace this with actual author id
      },
      content: des,
      image: imgUrl,
    },
  });

  console.log(createdPost);

  return NextResponse.json({ message: 'Post created successfully' }, { status: 201 });

} catch (error) {
 /*  return NextResponse.error('Error creating post', { status: 500 }); */
 return {
  status: 201,
  body: JSON.stringify({ message: 'Post created successfully'}),
};
}



}