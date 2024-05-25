// import { NextApiRequest, NextApiResponse } from 'next';
// import { PrismaClient } from '@prisma/client';

// const prisma = new PrismaClient();

// async function handler(req: NextApiRequest, res: NextApiResponse) {
//   const { id } = req.query;
//   if (req.method === 'GET') {
//     const post = await prisma.post.findUnique({
//       where: { id: Number(id) },
//     });
//     return res.json(post);
//   } else if (req.method === 'PUT') {
//     const { title, content } = req.body;
//     const post = await prisma.post.update({
//       where: { id: Number(id) },
//       data: { title, content },
//     });
//     return res.json(post);
//   } else if (req.method === 'DELETE') {
//     await prisma.post.delete({
//       where: { id: Number(id) },
//     });
//     return res.status(204).end();
//   } else {
//     res.setHeader('Allow', ['GET', 'PUT', 'DELETE']);
//     res.status(405).end(`Method ${req.method} Not Allowed`);
//   }
// }

// export default handler;
