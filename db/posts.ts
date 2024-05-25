import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// Gives tweets of a user along with the user
async function getPostsofUser(authorId: string) {
    return await prisma.post.findMany({
        where: {
            authorId: authorId,
        },
        select:{
            id: true,
            text: true,
            img: true ?? '',
            createdAt: true
        }
    });
}

// Gets all the posts and as it is scrolled gets more
async function getAllPosts(skip: number = 0, take: number) {
    return await prisma.post.findMany({
        skip: skip,
        take: take,
        orderBy: {
            createdAt: 'desc',
            id: 'desc'
        },
        select:{
            id: true,
            text: true,
            img: true ?? '',
            createdAt: true
        }
    });
}

async function createPost(authorId: string, text: string, img: string = '') {
    return await prisma.post.create({
        data: {
            authorId: authorId,
            text: text,
            img: img,
        }
    });
}

async function getpost(id: number) {
    return await prisma.post.findUnique({
        where: {
            id: id,
        }
    });
}

async function updatePost(id: number, text: string, img: string = '') {
    return await prisma.post.update({
        where: { id: id },
        data: {
            text: text,
            img: img,
        },
    });
}

async function deletePost(id: number) {
    return prisma.post.delete({
        where: { id: id },
    });
}
