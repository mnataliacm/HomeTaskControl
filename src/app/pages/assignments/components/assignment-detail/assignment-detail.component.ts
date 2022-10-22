import { Component, Input, OnInit, } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { Assign } from 'src/app/models/assign';
import { AssignmentService } from 'src/app/services/assignment.service';
import { PeopleService } from 'src/app/services/people.service';
import { TasksService } from 'src/app/services/tasks.service';

@Component({
  selector: 'app-assignment-detail',
  templateUrl: './assignment-detail.component.html',
  styleUrls: ['./assignment-detail.component.scss'],
})
export class AssignmentDetailComponent {

  form: FormGroup;
  mode: "New" | "Edit" = "New";
  people = this.peopleService.getPeople();
  tasks = this.tasksService.getTasks();
  

  @Input('assign') set assign(assign: Assign) {
    if (assign) {
      this.form.controls.id.setValue(assign.id);
      this.form.controls.personId.setValue(assign.personId);
      this.form.controls.taskId.setValue(assign.taskId);
      this.form.controls.dateTime.setValue(assign.dateTime);
      this.mode = "Edit";
    }
  }

  constructor(
    private peopleService: PeopleService,
    private tasksService: TasksService,
    private assignService: AssignmentService,
    private fb: FormBuilder,
    private modal: ModalController,

  ) {
    this.form = this.fb.group({
      id: [null],
      personId: [-1, [Validators.min(1)]],
      taskId: [-1, [Validators.min(1)]],
      dateTime: ['', []]
    });
  }

  onSubmit() {
    this.modal.dismiss({ assign: this.form.value, mode: this.mode }, 'ok');
  }

  onDismiss(result) {
    this.modal.dismiss(null, 'cancel');
  }

  onChangeDateTime(dateTime) {
    this.form.controls.dateTime.setValue(dateTime);
  }

}
