import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IonItemSliding } from '@ionic/angular';
import { Assign } from 'src/app/core/models/assign.model';
import { Person } from 'src/app/core/models/person.model';
import { Task } from 'src/app/core/models/task.model';
import { AssignmentService } from 'src/app/core/services/assignments.service';
import { PeopleService } from 'src/app/core/services/people.service';
import { TasksService } from 'src/app/core/services/tasks.service';
import { isLowResolution as lowres} from 'src/app/utils/screen.utils';

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
    private assignService: AssignmentService
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