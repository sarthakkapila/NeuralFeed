import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// Gives posts of a user along with the user
export async function getPostsOfUser(authorId: String) {
    return await prisma.post.findMany({
        where: {
            authorId: authorId,
        },
        select: {
            id: true,
            text: true,
            img: true,
            createdAt: true,
            author: {
                select: {
                    id: true,
                    username: true,
                    email: true,
                }
            }
        }
    });
}


export async function getAllPosts(skip: number, take: number) {
    return await prisma.post.findMany({
        skip: skip,
        take: take,
        orderBy: {
            createdAt: 'desc',
        },
        select: {
            id: true,
            text: true,
            img: true,
            createdAt: true,
            author: {
                select: {
                    id: true,
                    username: true,
                    email: true,
                }
            }
        }
    });
}



export async function createPost(authorId: String, text: string, img: string = '') {
    return await prisma.post.create({
        data: {
            authorId: authorId,
            text: text,
            img: img,
        }
    });
}

export async function getPost(id: number) {
    return await prisma.post.findUnique({
        where: {
            id: id,
        },
        select: {
            id: true,
            text: true,
            img: true,
            createdAt: true,
            author: {
                select: {
                    id: true,
                    username: true,
                    email: true,
                }
            }
        }
    });
}

export async function updatePost(id: number, text: string, img: string = '') {
    return await prisma.post.update({
        where: { id: id },
        data: {
            text: text,
            img: img,
        },
    });
}

export async function deletePost(id: number) {
    return await prisma.post.delete({
        where: { id: id },
    });
}

