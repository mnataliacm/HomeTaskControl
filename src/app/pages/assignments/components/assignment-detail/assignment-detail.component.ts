import { Component, Input, OnInit, } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { Assign } from 'src/app/models/assign';
import { Person } from 'src/app/models/person';
import { AssignmentService } from 'src/app/services/assignment.service';
import { PeopleService } from 'src/app/services/people.service';
import { TasksService } from 'src/app/services/tasks.service';

@Component({
  selector: 'app-assignment-detail',
  templateUrl: './assignment-detail.component.html',
  styleUrls: ['./assignment-detail.component.scss'],
})
export class AssignmentDetailComponent implements OnInit {

  form: FormGroup;
  mode: "New" | "Edit" = "New";
  _personID: undefined;
  

  @Input('assign') set assign(assign: Assign) {
    if (assign) {
      this.form.controls.id.setValue(assign.id);
      this.form.controls.personId.setValue(assign.personId);
      this.form.controls.taskId.setValue(assign.taskId);
      this.form.controls.createdAt.setValue(assign.createdAt);
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
      personId: [, []],
      taskId: [-1, []],
      createdAt: ['', []],
      dateTime: ['', []]
    });
  }

  ngOnInit() {
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

  /* Seleccionar personas */
  people = this.peopleService.getPeople();
  tasks = this.tasksService.getTasks();

  handleChange(e) {
    //this.pushLog('ionChange fired with value: ' + e.detail.value);
    this._personID = e.detail.value;
  }

}
