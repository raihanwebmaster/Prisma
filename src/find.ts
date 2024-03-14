/** @format */

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
  const getAllFromDB = await prisma.post.findMany();

  const findFirst = await prisma.post.findFirst({
    where: {
        id: 5
    }
  })

  const findFirstOrThrow = await prisma.post.findFirstOrThrow({
    where: {
        id: 5
    }
  })

  const findUnique = await prisma.post.findUnique({
    where : {
        id: 5
    },
    select : {
        title: true,
    }
  })
  console.log({findUnique});

};
main();
