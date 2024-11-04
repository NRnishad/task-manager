"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Task_1 = require("../models/Task");
class TaskController {
    constructor() {
        this.tasks = [];
    }
    addTask(description) {
        const task = new Task_1.Task(description);
        this.tasks.push(task);
        return task;
    }
    deleteTask(id) {
        this.tasks = this.tasks.filter(task => task.id !== id);
    }
    completeTask(id) {
        const task = this.tasks.find(task => task.id === id);
        if (task) {
            task.markComplete();
        }
    }
    getTasks() {
        return this.tasks;
    }
}
exports.default = new TaskController();
