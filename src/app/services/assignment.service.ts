import * as moment from 'moment-timezone';
import { Injectable } from '@angular/core';
import { Assign } from '../models/assign';

@Injectable({
  providedIn: 'root'
})
export class AssignmentService {

  momentjs:any = moment;
  private _assign: Assign[] = [
    {
      id: 1,
      personId: 3,
      taskId: 3,
      createdAt: this.momentjs().toISOString(),
      dateTime: this.momentjs().add(1, 'days').toISOString(),

    },
    {
      id: 2,
      personId: 4,
      taskId: 1,
      createdAt:this.momentjs().toISOString(),
      dateTime:this.momentjs().add(1, 'days').toISOString(),
    }
  ]

  id: number = this._assign.length + 1;

  getAssignment() {
    return this._assign;
  }

  getAssignmentById(id:number){
    return this._assign.find(a=>a.id==id);
  }

  getAssignmentByPersonId(personId: number): Assign[] {
    return this._assign.filter(p => p.personId == personId);
  }

  getAssignmentByTaskId(taskId: number): Assign[] {
    return this._assign.filter(p => p.taskId == taskId);
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
