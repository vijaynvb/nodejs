const Router = require('express').Router 
const {z} = require("zod")
const {validateRequest} = require("../utils/validator")
const {getUsers, getById, signup} = require("../controllers/userController")

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

router.get('/', getUsers) ;
router.get('/:id', getById); // path variable
router.post("/signup",validateRequest(signupSchema), signup);

module.exports = router