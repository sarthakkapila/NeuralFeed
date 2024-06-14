import { Signin, Signup } from "@/db/user";
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest, res: NextResponse) {
 try {
   const { username, email, password, firstName, lastName } = await req.json();
   await Signup(username, email, password, firstName, lastName);
   return NextResponse.json({ message: 'User created successfully' }, {status:200});
 } catch (error) {
   return NextResponse.json({ error: 'Failed to create user' }, { status: 500 });
 }
}

export async function GET(req: NextRequest) {
    try {
        const { email, password } = await req.json();
        await Signin(email, password);
        return NextResponse.json({message: "User found in DB"}, {status: 200})
    } catch (e) {
        return NextResponse.json({message: "User not found in DB"}, {status: 500})
    }
}