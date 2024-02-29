import { put } from '@vercel/blob';
import { NextResponse } from 'next/server';
 
export async function POST(request) {
  const { searchParams } = new URL(request.url);
  const filename = searchParams.get('filename') ;
 
  if (!filename) {

    return NextResponse.error('filename is required', { status: 400 });
  
  }
  const blob = await put(filename, request.body, {
    access: 'public',
    token: process.env.BLOB_READ_WRITE_TOKEN
  });
 
  return NextResponse.json(blob);
}