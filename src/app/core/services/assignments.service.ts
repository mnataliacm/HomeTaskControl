import * as moment from 'moment-timezone';
import { Injectable } from '@angular/core';
import { Assign } from '..';
import { LIST_OF_ASSIGNMENTS } from 'src/assets/data/list-of-assignments';

@Injectable({
  providedIn: 'root'
})
export class AssignmentService {

  momentjs:any = moment;
  private _assign: Assign[] = LIST_OF_ASSIGNMENTS;

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
