
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';

const prisma = new PrismaClient();

// Creates a new user
async function Signup(username: string, email: string, password: string, firstName: string, lastName: string) {
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    await prisma.user.create({
      data: {
        username,
        firstName,
        lastName,
        email,
        password: hashedPassword,
      },
    });
  } catch (error) {
    console.error("Signup DB Error:", error);
    throw new Error('Failed to create user');
  }
}

// Checks if user logged in or not
async function Signin(username: string, password: string) {
  try {
    const user = await prisma.user.findUnique({
      where: { username },
    });

    if (user && await bcrypt.compare(password, user.password)) {
      return user;
    } else {
      return null;
    }
  } catch (error) {
    console.error("Signin DB Error:", error);
    throw new Error('Failed to find user');
  }
}

export { Signup, Signin };

