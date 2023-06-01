import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

let deleteTodo = async (req, res) => {
  const { id } = req.params;
  const todos = await prisma.todos.delete({
    where: { id: +id },
  });
  res.json(todos);
};

export default deleteTodo;
