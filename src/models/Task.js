"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Task = void 0;
class Task {
    constructor(description) {
        this.id = Task.idCounter++;
        this.description = description;
        this.completed = false;
    }
    markComplete() {
        this.completed = true;
    }
}
exports.Task = Task;
Task.idCounter = 1;
