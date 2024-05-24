import { Signup } from "@/db/user";
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
 try {
   const { username, email, password, firstName, lastName } = await req.json();
   await Signup(username, email, password, firstName, lastName);
   return NextResponse.json({ message: 'User created successfully' });
 } catch (error) {
   return NextResponse.json({ error: 'Failed to create user' }, { status: 500 });
 }
}