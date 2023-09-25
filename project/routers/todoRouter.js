const Router = require("express").Router;
const { validateRequest } = require("../utils/validator");
const { z } = require("zod");
const  verifyToken  = require("../utils/jwtTokenValidator");
const {getTodos, getTodoById, createTodo, updateTodo, deleteTodo} = require("../controllers/todoController");

const router = Router();

const createTodoSchema = z.object({
  body: z.object({
    task: z.string({
      required_error: "Task is required",
      invalid_type_error: "Task must be a string",
    }),
    isComplete: z.boolean({
      required_error: "isComplete is required",
      invalid_type_error: "isComplete must be a boolean",
    }),
  }),
});

const uuidSchema = z.object({
  params: z.object({
    id: z
      .string({
        required_error: "Todo id is required",
      })
  }),
});

const updateTodoSchema = z.object({
  body: z.object({
    task: z.string({
      required_error: "Task is required",
      invalid_type_error: "Task must be a string",
    }),
    isComplete: z.boolean({
      required_error: "isComplete is required",
      invalid_type_error: "isComplete must be a boolean",
    }),
  }),
  params: z.object({
    id: z
      .string({
        required_error: "Todo id is required",
      })
  }),
});

router.get("/", verifyToken(), getTodos);
router.get("/:id", verifyToken(), validateRequest(uuidSchema), getTodoById);
router.put(
  "/:id",
  verifyToken(),
  validateRequest(updateTodoSchema),
  updateTodo
);
router.delete(
  "/:id",
  verifyToken(),
  validateRequest(uuidSchema),
  deleteTodo
);
router.post(
  "/",
  verifyToken(),
  validateRequest(createTodoSchema),
  createTodo
);

module.exports = router;
