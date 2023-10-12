import express from 'express';
import { loginUser,registerUser,getUser } from '../Controllers/user.controller.js';
import requireAuth from '../Middlewares/auth.middleware.js';
const router = express.Router();

router.post("/login",loginUser);
router.post("/register",registerUser);
router.get("/getuser", requireAuth, getUser)

export default router;