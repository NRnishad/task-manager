// src/routes/taskRoutes.ts

import { Router } from "express";
import taskController from "../controllers/TaskController";

const router = Router();

router.get("/", (req, res) => {
  res.render("index", { tasks: taskController.getTasks() });
});

router.post("/add", (req, res) => {
  taskController.addTask(req.body.description);
  res.redirect("/");
});

router.post("/complete/:id", (req, res) => {
  const id = parseInt(req.params.id);
  taskController.completeTask(id);
  res.redirect("/");
});

router.post("/delete/:id", (req, res) => {
  const id = parseInt(req.params.id);
  taskController.deleteTask(id);
  res.redirect("/");
});

export default router;
