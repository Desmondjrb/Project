// TODO: Import express and your User model
import { userModel } from "./user.js";
import express from "express";
const router = express.Router();

// TODO: Create an express router

// TODO: Create POST route for user registration (/api/users/register)

router.post("/user/register", async (req, res) => {
  const user = new userModel(req.body);
  try {
    const newUser = await user.save();
    res.status(201).json(newUser);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// 1. Check if a user with the given email already exists
// 2. If not, create a new user with the request body data
// 3. Return the new user (without the password) with status 201

// TODO: Create POST route for user login (/api/users/login)
// 1. Find the user by email
// 2. Check if the password matches
// 3. If authentication successful, return user info (without password)
// 4. If authentication fails, return appropriate error message
// curl -X GET http://localhost:3000/api/user/login \-H 'Content-Type: application/json' \-d '{"firstName":"ea314","lastName":"2114sf"}'

router.get("/user/login", async (req, res) => {
  const user = new userModel(req.body);
  try {
    const query = await userModel.findOne({
      firtsName: user.firstName,
      lastName: user.lastName,
    });
    res.status(201).json(query);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// TODO: Export the router
export { router as userRouter };
