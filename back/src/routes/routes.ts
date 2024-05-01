import { Router } from "express";
import taskController from "../controllers/taskController";

const router = Router();

router.post("/task/createTask", taskController.createTask);
router.get("/task/showTask", taskController.showTask);
router.put("/task/updateTask", taskController.updateTask);
router.delete("/task/destroyTask", taskController.destroyTask);

export default router;