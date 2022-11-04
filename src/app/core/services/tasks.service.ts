import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { LIST_OF_TASKS } from 'src/assets/data/list-of-tasks';
import { Task } from '..';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  constructor() { }

  private _tasks: Task[] = LIST_OF_TASKS;
  private _tasksSubject: BehaviorSubject<Task[]> = new BehaviorSubject(this._tasks);
  public _tasks$ = this._tasksSubject.asObservable()

  id: number = this._tasks.length+1;

  getTasks(): Task[] {
    return this._tasks;
  }

  getTaskById(id:number){
    return this._tasks.find(p=>p.id==id);
  }

  deleteTaskById(id:number){
    this._tasks = this._tasks.filter(p=>p.id != id); 
    this._tasksSubject.next(this._tasks);
  }

  addTask(task:Task){
    task.id = this.id++;
    this._tasks.push(task);
    this._tasksSubject.next(this._tasks)
  }

  updateTask(task:Task){
    var _tasks = this._tasks.find(p=>p.id==task.id);
    if(_tasks){
      _tasks.name = task.name;
      _tasks.time = task.time;
      _tasks.picture = task.picture;
    }   
    this._tasksSubject.next(this._tasks);
  }

}
