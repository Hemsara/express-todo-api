import { Router } from 'express';
import * as TodoController from './controllers/todos/index.js';
import * as CreateTodoValidation from './validations/createTodoValidation.js'
const router = Router();

//todos
router.get("/todos", TodoController.getTodos);
router.get("/todos/todo/:id", TodoController.getSingleTodo);
router.delete("/todos/todo/delete/:id", TodoController.deleteTodo);
router.post("/todos/create", CreateTodoValidation.validateTodoCreate ,TodoController.createTodo);


export default router;
