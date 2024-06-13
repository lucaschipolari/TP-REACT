export class Task{
    constructor(task){
        this.task = task;
        this.id = window.self.crypto.randomUUID();
    }
}