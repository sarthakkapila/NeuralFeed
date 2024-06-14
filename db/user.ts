import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()


// Creates a new user
async function Signup(username: string, email: string, password: string, firstName: string, lastName: string,){
    const signup = await prisma.user.create({
        data:{
            username,
            firstName,
            lastName,
            email,
            password,
        },
    });
}

// Checks if user logged in or not
async function Signin(email: string, password: string) {
    return await prisma.user.findUnique({
        where:{
        email,
        password
        },
    });
}

export {
    Signup,
    Signin,
}