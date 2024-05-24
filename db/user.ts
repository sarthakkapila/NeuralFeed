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
async function Signin(username: string, password: string) {
    const login = await prisma.user.findMany({
        where: {
        username,
        password
        },
    });
}

// Gives tweets of a user along with the user
async function getPosts(authorId: string) {
    const posts = await prisma.user.findUnique({
        where:{
            id: authorId,
        },
        select:{
            text: true,
            img: true ?? '',
            author: true,
            createdAt: true,
            id: true
        }
    }) 
}

export {
    Signup,
    Signin,
    getPosts
}