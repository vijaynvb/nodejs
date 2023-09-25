const Router = require("express").Router;
const { validateRequest } = require("../utils/validator");
const { z } = require("zod");
const mongoose = require("mongoose")
const  verifyToken  = require("../utils/jwtTokenValidator");
const { getUsers, getUserById, login, signup, updateUser, deleteUser} = require("../controllers/userController");
const { ADMIN } = require("../utils/constants");

const router = Router();

const signupSchema = z.object({
  body: z.object({
    firstName: z.string({
      required_error: "First name is required",
      invalid_type_error: "First name must be a string",
    }),
    lastName: z.string({
      required_error: "Last name is required",
      invalid_type_error: "Last name must be a string",
    }),
    email: z
      .string({ required_error: "Email is required" })
      .email({ message: "Must be a valid email" }),
    password: z
      .string()
      .min(8, "Password cannot less than 8 characters")
      .max(16, "Password cannot be greater than 16 characters"),
  }),
});

const loginUserSchema = z.object({
  body: z.object({
    email: z
      .string({ required_error: "Email is required" })
      .email({ message: "Must be a valid email" }),
    password: z
      .string()
      .min(8, "Password cannot less than 8 characters")
      .max(16, "Password cannot be greater than 16 characters"),
  }),
});

const uuidSchema = z.object({
  params: z.object({
    id: z
      .string({
        required_error: "User id is required",
      })
  }),
});

const updateUserSchema = z.object({
  body: z.object({
    firstName: z.string({
      required_error: "First name is required",
      invalid_type_error: "First name must be a string",
    }),
    lastName: z.string({
      required_error: "Last name is required",
      invalid_type_error: "Last name must be a string",
    }),
  }),
  params: z.object({
    id: z
      .string({
        required_error: "User id is required",
      })
  }),
});

router.get("/", verifyToken(), getUsers);
router.get("/:id", verifyToken(), validateRequest(uuidSchema), getUserById);
router.put(
  "/:id",
  verifyToken(ADMIN),
  validateRequest(updateUserSchema),
  updateUser
);
router.delete(
  "/:id",
  verifyToken(ADMIN),
  validateRequest(uuidSchema),
  deleteUser
);
router.post(
  "/signup",
  verifyToken(ADMIN),
  validateRequest(signupSchema),
  signup
);
router.post("/login", validateRequest(loginUserSchema), login);

module.exports = router;
