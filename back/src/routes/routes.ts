import { Router } from "express";
import taskController from "../controllers/taskController";
import { validatorTask } from "../config/validator";

const router = Router();

router.post("/task/createTask", validatorTask("createTask"), taskController.createTask);
router.get("/task/showTask", validatorTask("showTask"), taskController.showTask);
router.put("/task/updateTask", validatorTask("updateTask"), taskController.updateTask);
router.delete("/task/destroyTask", validatorTask("destroyTask"), taskController.destroyTask);

export default router;