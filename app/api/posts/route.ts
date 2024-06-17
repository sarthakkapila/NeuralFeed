import { createPost, getAllPosts } from '@/db/posts';
import { NextRequest, NextResponse } from 'next/server';



// Taking 50 posts for now
// export async function GET() {

// }


export async function POST(req: NextRequest){
    try {
        const {authorId, text, image} = await req.json();
        createPost(authorId, text, image);
        return NextResponse.json({ message: 'Post created!' }, { status: 200 });
    } catch (e) {
        console.error("Error while creating post", e);
        return NextResponse.json({ e: "Couldn't create post"  }, { status: 500 });        
    }
}
