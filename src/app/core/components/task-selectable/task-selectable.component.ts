import { Component, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { IonAccordionGroup } from '@ionic/angular';
import { Task, TasksService } from '../..';

export const TASK_PROFILE_VALUE_ACCESSOR: any = {
  provide:  NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => TaskSelectableComponent),
  multi: true
}

@Component({
  selector: 'app-task-selectable',
  templateUrl: './task-selectable.component.html',
  styleUrls: ['./task-selectable.component.scss'],
  providers: [TASK_PROFILE_VALUE_ACCESSOR]
})
export class TaskSelectableComponent implements ControlValueAccessor {

  selectedTask: Task = null;
  propagateChange = (_: any) => { }
  isDisabled:boolean = false;

  constructor(private tasksService: TasksService) { }

  writeValue(obj: any): void {
    this.selectedTask = this.tasksService.getTaskById(obj);;
  }
  registerOnChange(fn: any): void {
    this.propagateChange = fn;
  }
  registerOnTouched(fn: any): void {
    
  }
  setDisabledState?(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }

  getTasks() {
    return this.tasksService.getTasks();
  }

  onTaskClicked(task:Task, accordion: IonAccordionGroup){
    this.selectedTask = task;
    accordion.value = '';
    this.propagateChange(this.selectedTask.id);
  }

}
