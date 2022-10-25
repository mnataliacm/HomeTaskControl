import { Injectable } from '@angular/core';
import { Task } from '../models/task';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  constructor() { }

  private _task: Task[] = [
    {
      id:1,
      name:"Barrer y fregar",
      time:30,
      picture:"https://svgsilh.com/svg/1294960-009688.svg"
    },
    {
      id:2,
      name:"Lavadora",
      time:20,
      picture:"https://media.istockphoto.com/vectors/washing-machine-washer-flat-color-line-icon-isolated-on-white-vector-id1194750450?b=1&k=6&m=1194750450&s=170x170&h=K8pGlX0xN1Qw3bCKk6ou1uIvMnHhl_FDh27tJtLE3L8="
    },
    {
      id:3,
      name:"Planchar",
      time:50,
      picture:"https://cdn.pixabay.com/photo/2013/07/13/11/49/iron-158742_960_720.png"
    },
    {
      id:4,
      name:"Ventanas",
      time:150,
      picture:"https://svgsilh.com/svg_v2/1906739.svg"
    }
  ];

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
