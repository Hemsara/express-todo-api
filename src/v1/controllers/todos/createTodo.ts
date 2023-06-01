import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
import ITodo from "../../../models/todo.js";

let createTodo = async (req, res) => {
  const { title, tasks } = req.body;
  const post = await prisma.todos.create({
    data: {
      title,
    },
  });
  res.json(post);
};

export default createTodo;
