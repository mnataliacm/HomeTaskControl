import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IonItemSliding } from '@ionic/angular';

import { isLowResolution as lowres} from 'src/app/utils/screen.utils';
import { Assign, PeopleService, TasksService, Task, Person } from '../..';

@Component({
  selector: 'app-assignment',
  templateUrl: './assignment.component.html',
  styleUrls: ['./assignment.component.scss'],
})
export class AssignmentComponent {

  @Output() onEdit = new EventEmitter;
  @Output() onDelete = new EventEmitter;
  @Input() assign:Assign;
  isLowResolution = lowres;

  constructor(
    private peopleService: PeopleService,
    private tasksService: TasksService,
  ) {}

  getTask():Task{
    //console.log(new Date().toISOString());
    var taskId = this.assign.taskId;
    if(taskId)
      return this.tasksService.getTaskById(taskId);
    return undefined;
  }

  getPerson():Person{
    //console.log(new Date().toISOString());
    var personId = this.assign.personId;
    if(personId)
      return this.peopleService.getPersonById(personId);
    return undefined;
  }

  onEditClick(slide:IonItemSliding){
    slide.close();
    this.onEdit.emit(this.assign);
  }

  onDeleteClick(slide:IonItemSliding){
    slide.close();
    this.onDelete.emit(this.assign);
  }

}