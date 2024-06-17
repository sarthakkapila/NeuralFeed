import { displayPosts, getAllPosts } from '@/db/posts';
import { NextRequest, NextResponse } from 'next/server';


// Taking 50 posts for now
export async function GET() {
    await displayPosts();
}