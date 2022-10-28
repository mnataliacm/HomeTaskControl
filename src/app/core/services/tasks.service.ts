import { Injectable } from '@angular/core';
import { LIST_OF_TASKS } from 'src/assets/data/list-of-tasks';
import { Task } from '..';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  constructor() { }

  private _task: Task[] = LIST_OF_TASKS;

  id: number = this._task.length+1;

  getTasks(): Task[] {
    return this._task;
  }

  getTaskById(id:number){
    return this._task.find(p=>p.id==id);
  }

  deleteTaskById(id:number){
    this._task = this._task.filter(p=>p.id != id); 
  }

  addTask(task:Task){
    task.id = this.id++;
    this._task.push(task);
  }

  updateTask(task:Task){
    var _task = this._task.find(p=>p.id==task.id);
    if(_task){
      _task.name = task.name;
      _task.time = task.time;
      _task.picture = task.picture;
    }   
  }

}
