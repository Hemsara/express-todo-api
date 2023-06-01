import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

let getSingleTodo = async (req, res) => {
    const { id} = req.params
    const todos = await prisma.todos.findUnique({
    where: {  id : +id },
    include: {
      tasks: true,
    },
  });
  res.json(todos);
};

export default getSingleTodo;
