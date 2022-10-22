import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from 'src/app/models/task';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
})
export class TaskComponent {

  @Output() onEdit = new EventEmitter;
  @Output() onDelete = new EventEmitter;
  @Input() task:Task;

  onEditClick(){
    this.onEdit.emit(this.task);
  }

  onDeleteClick(){
    this.onDelete.emit(this.task);
  }

}
