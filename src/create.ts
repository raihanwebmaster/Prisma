/** @format */

import { PrismaClient, UserRole } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
//   const result = await prisma.post.create({
//     data: {
//       title: "This is title",
//       content: "This is Content...",
//       author: "Raihan Uddin",
//     },
//   });

// const createMany = await prisma.post.createMany({
//   data: [
//     {
//       title: "This is title",
//       content: "This is Content...",
//       author: "Raihan Uddin",
//     },
//     {
//       title: "This is title",
//       content: "This is Content...",
//       author: "Raihan Uddin",
//     },
//     {
//       title: "This is title",
//       content: "This is Content...",
//       author: "Raihan Uddin",
//     },
//   ],
// });
  // console.log(createMany);

     const createUser = await prisma.user.create({
        data: {
            username: "user2",
            email: "user2@ph.com",
            role: UserRole.user
        }
    });
    console.log(createUser)

    const createProfile = await prisma.profile.create({
        data: {
            bio: "this is bio...",
            userId: 1
        }
    })

    const createCategory = await prisma.category.create({
        data: {
            name: "software engineering"
        }
    })

    const createPost = await prisma.post.create({
      data: {
          title: "this is title 5",
          content: "this is content of the post. 5",
          authorId: 3,
          postCategory: {
              create: [
                  {
                      categoryId: 1
                  },
                  {
                      categoryId: 3
                  },
                  {
                      categoryId: 4
                  }
              ]
          }
      },
      include: {
          postCategory: true
      }
  })
};
main();
