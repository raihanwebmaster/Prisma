import  {PrismaClient} from "@prisma/client"

const prisma = new PrismaClient()

const main = async() => {
//  const result = await prisma.post.create({
//     data: {
//         title: "This is title",
//         content: "This is Content...",
//         author: "Raihan Uddin"
//     }
//  })
const getAllFromDB = await prisma.post.findMany()
console.log(getAllFromDB)
}
main()