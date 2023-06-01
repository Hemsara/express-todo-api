import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

let createTodo = async (req, res) => {
  res.json({});
};

export default createTodo;
