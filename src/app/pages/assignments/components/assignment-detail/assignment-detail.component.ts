import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { Assign } from 'src/app/models/assign';

@Component({
  selector: 'app-assignment-detail',
  templateUrl: './assignment-detail.component.html',
  styleUrls: ['./assignment-detail.component.scss'],
})
export class AssignmentDetailComponent {

  form:FormGroup;
  mode:"New" | "Edit" = "New";

  @Input('person') set assign(assign:Assign){
    if(assign){
      this.form.controls.id.setValue(assign.id);
      this.form.controls.personId.setValue(assign.personId);
      this.form.controls.taskId.setValue(assign.taskId);
      this.form.controls.createdAt.setValue(assign.createdAt);
      this.form.controls.dateTime.setValue(assign.dateTime);
      this.mode = "Edit";
    }
  }
  
  constructor(
    private fb:FormBuilder,
    private modal:ModalController
  ) { 
    this.form = this.fb.group({
      id:[null],personId:['', [Validators.required]],
      taskId:['', [Validators.required]],
      createdAt:['', [Validators.required]],
      dateTime:['', [Validators.required]]
    });
  }

  ngOnInit() {

  }

  onSubmit(){
    
    this.modal.dismiss({assign: this.form.value, mode:this.mode}, 'ok');
  }

  onDismiss(result){
    this.modal.dismiss(null, 'cancel');
  }

}
