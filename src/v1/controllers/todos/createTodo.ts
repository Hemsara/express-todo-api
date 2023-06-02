import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

let createTodo = async (req, res) => {
  try {
    const { title, tasks } = req.body;

    let tasksList = tasks.map((e) => {
      return { text: e["text"], completed: e["completed"] ?? false };
    });

    const post = await prisma.todos.create({
      data: {
        title,
        tasks: {
          createMany: {
            data: tasksList,
          },
        },
      },
    });
    if (post) {
      res.status(201).json(post);
      return;
    }
    res.status(400).json({ message: "something went wrong" });
  } catch (error) {
    res.status(400).json({ message: "Internal server error" });
  }
};

export default createTodo;
