import express from "express"
import { addTask,getTask,removeTask } from "../Controllers/task.controller.js";
import requireAuth from "../Middlewares/auth.middleware.js";

const router = express.Router();

router.post("/addTask", requireAuth, addTask)
router.get("/getTask",requireAuth, getTask)
router.get("/removeTask",requireAuth, removeTask)

export default router;