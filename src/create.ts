/** @format */

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
//   const result = await prisma.post.create({
//     data: {
//       title: "This is title",
//       content: "This is Content...",
//       author: "Raihan Uddin",
//     },
//   });

const createMany = await prisma.post.createMany({
  data: [
    {
      title: "This is title",
      content: "This is Content...",
      author: "Raihan Uddin",
    },
    {
      title: "This is title",
      content: "This is Content...",
      author: "Raihan Uddin",
    },
    {
      title: "This is title",
      content: "This is Content...",
      author: "Raihan Uddin",
    },
  ],
});
  console.log(createMany);
};
main();
