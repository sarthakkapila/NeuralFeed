
import { Signin, Signup } from "@/db/user";
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const { username, email, password, firstName, lastName } = await req.json();
    await Signup(username, email, password, firstName, lastName);
    return NextResponse.json({ message: 'User created successfully' }, { status: 200 });
  } catch (error) {
    console.error("Signup Error:", error);
    return NextResponse.json({ error: 'Failed to create user' }, { status: 500 });
  }
}

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const username = searchParams.get('username');
    const password = searchParams.get('password');

    if (!username || !password) {
      return NextResponse.json({ error: "Missing username or password" }, { status: 400 });
    }

    const user = await Signin(username, password);
    if (user) {
      return NextResponse.json({ message: "User found in DB" }, { status: 200 });
    } else {
      return NextResponse.json({ message: "User not found in DB" }, { status: 404 });
    }
  } catch (error) {
    console.error("Signin Error:", error);
    return NextResponse.json({ error: "Failed to find user" }, { status: 500 });
  }
}

