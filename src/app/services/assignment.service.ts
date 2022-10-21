import { Injectable } from '@angular/core';
import { Assign } from '../models/assign';
import { Person } from '../models/person';
import { Task } from '../models/task';

@Injectable({
  providedIn: 'root'
})
export class AssignmentService {

  constructor() { }

  private _assign: Assign[] = [
    {
      id: 1,
      personId: 3,
      taskId: 3,
      createdAt: "15/01/2023",
      dateTime: "18:00:00",

    },
    {
      id: 2,
      personId: 4,
      taskId: 1,
      createdAt: "15/01/2023",
      dateTime: "18:30:00",
    }
  ]

  id: number = this._assign.length + 1;

  getAssignment(): Assign[] {
    return this._assign;
  }

  getAssignmentById(id: number) {
    return this._assign.find(p => p.id == id);
  }

  deleteAssignmentById(id: number) {
    this._assign = this._assign.filter(p => p.id != id);
  }

  addAssignmnet(assign: Assign) {
    assign.id = this.id++;
    this._assign.push(assign);
  }

  updateAssignment(assign: Assign) {
    var _assign = this._assign.find(p => p.id == assign.id)
    if (_assign) {
      _assign.personId = assign.personId;
      _assign.taskId = assign.taskId;
      _assign.createdAt = assign.createdAt;
      _assign.dateTime = assign.dateTime;
    }
  }

}
