"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const TaskController_1 = __importDefault(require("../controllers/TaskController"));
const router = (0, express_1.Router)();
router.get("/", (req, res) => {
    res.render("index", { tasks: TaskController_1.default.getTasks() });
});
router.post("/add", (req, res) => {
    TaskController_1.default.addTask(req.body.description);
    res.redirect("/");
});
router.post("/complete/:id", (req, res) => {
    const id = parseInt(req.params.id);
    TaskController_1.default.completeTask(id);
    res.redirect("/");
});
router.post("/delete/:id", (req, res) => {
    const id = parseInt(req.params.id);
    TaskController_1.default.deleteTask(id);
    res.redirect("/");
});
exports.default = router;
