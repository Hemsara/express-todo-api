import { PrismaClient } from "@prisma/client";
const prisma =new PrismaClient();

let getTodos = async (req, res) => {
  const todos = await prisma.todos.findMany({
    include: {
      tasks: true,
    },
  });
  res.json(todos);
};

export default getTodos;
