import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

let deleteTodo = async (req, res) => {
  const { id } = req.params;
  await prisma.todos.delete({
    where: { id: +id },
  });
  res.json({"message" : "delete success"});
};

export default deleteTodo;
