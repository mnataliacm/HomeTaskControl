import * as moment from 'moment-timezone';
import { Injectable } from '@angular/core';
import { Assign } from '..';
import { LIST_OF_ASSIGNMENTS } from 'src/assets/data/list-of-assignments';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AssignmentService {

  momentjs:any = moment;
  private _assigns: Assign[] = LIST_OF_ASSIGNMENTS;
  private _assignsSubject: BehaviorSubject<Assign[]> = new BehaviorSubject(this._assigns);
  public _assigns$ = this._assignsSubject.asObservable()

  id: number = this._assigns.length + 1;

  getAssignment() {
    return this._assigns;
  }

  getAssignmentById(id:number){
    return this._assigns.find(a=>a.id==id);
  }

  getAssignmentByPersonId(personId: number): Assign[] {
    return this._assigns.filter(p => p.personId == personId);
  }

  getAssignmentByTaskId(taskId: number): Assign[] {
    return this._assigns.filter(p => p.taskId == taskId);
  }

  

  deleteAssignmentById(id: number) {
    this._assigns = this._assigns.filter(p => p.id != id);
    this._assignsSubject.next(this._assigns);
  }

  addAssignmnet(assign: Assign) {
    assign.id = this.id++;
    this._assigns.push(assign);
    this._assignsSubject.next(this._assigns);
  }

  updateAssignment(assign: Assign) {
    var _assign = this._assigns.find(p => p.id == assign.id)
    if (_assign) {
      _assign.personId = assign.personId;
      _assign.taskId = assign.taskId;
      _assign.createdAt = assign.createdAt;
      _assign.dateTime = assign.dateTime;
    }
    this._assignsSubject.next(this._assigns);
  }
}
