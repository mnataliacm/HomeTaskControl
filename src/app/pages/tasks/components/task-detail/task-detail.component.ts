import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { Task } from 'src/app/models/task';

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.scss'],
})
export class TaskDetailComponent {

  form:FormGroup;
  mode:"New" | "Edit" = "New";

  @Input('task') set task(task:Task){
    if(task){
      this.form.controls.id.setValue(task.id);
      this.form.controls.name.setValue(task.name);
      this.form.controls.time.setValue(task.time);
      this.form.controls.picture.setValue(task.picture);
      this.mode = "Edit";
    }
  }
  
  constructor(
    private fb:FormBuilder,
    private modal:ModalController
  ) { 
    this.form = this.fb.group({
      id:[null],
      name:['', [Validators.required]],
      time:['', [Validators.required]],
      picture:['']
    });
  }

  onSubmit(){   
    this.modal.dismiss({task: this.form.value, mode:this.mode}, 'ok');
  }

  onDismiss(result){
    this.modal.dismiss(null, 'cancel');
  }

}
