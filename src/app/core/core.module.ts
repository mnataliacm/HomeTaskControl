import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { PersonComponent, PersonDetailComponent, TaskComponent, TaskDetailComponent, AssignmentComponent, AssignmentDetailComponent, PersonSelectableComponent, TaskSelectableComponent, DateTimeSelectableComponent } from '.';

@NgModule({
  declarations: [
    PersonComponent,
    PersonDetailComponent,
    TaskComponent,
    TaskDetailComponent,
    AssignmentComponent,
    AssignmentDetailComponent,
    PersonSelectableComponent,
    TaskSelectableComponent,
    DateTimeSelectableComponent
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
    TaskSelectableComponent,
    DateTimeSelectableComponent
  ]
})
export class CoreModule { }
