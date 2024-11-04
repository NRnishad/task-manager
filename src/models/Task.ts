export class Task {
  private static idCounter = 1;
  public id: number;
  public description: string;
  public completed: boolean;

  constructor(description: string) {
    this.id = Task.idCounter++;
    this.description = description;
    this.completed = false;
  }

  markComplete(): void {
    this.completed = true;
  }
}
