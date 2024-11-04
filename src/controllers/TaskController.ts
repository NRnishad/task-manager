import { Task } from "../models/Task";

class TaskController {
  private tasks: Task[] = [];

  addTask(description: string): Task {
    const task = new Task(description);
    this.tasks.push(task);
    return task;
  }

  deleteTask(id: number): void {
    this.tasks = this.tasks.filter(task => task.id !== id);
  }

  completeTask(id: number): void {
    const task = this.tasks.find(task => task.id === id);
    if (task) {
      task.markComplete();
    }
  }

  getTasks(): Task[] {
    return this.tasks;
  }
}

export default new TaskController();
