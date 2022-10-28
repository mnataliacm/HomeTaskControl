import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { PersonComponent, PersonDetailComponent, TaskComponent, TaskDetailComponent, AssignmentComponent, AssignmentDetailComponent } from './components';
import { PersonSelectableComponent } from './components';

@NgModule({
  declarations: [
    PersonComponent,
    PersonDetailComponent,
    TaskComponent,
    TaskDetailComponent,
    AssignmentComponent,
    AssignmentDetailComponent,
    PersonSelectableComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule.forRoot(),
    ReactiveFormsModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    PersonComponent,
    PersonDetailComponent,
    TaskComponent,
    TaskDetailComponent,
    AssignmentComponent,
    AssignmentDetailComponent,
    PersonSelectableComponent,
  ]
})
export class CoreModule { }
