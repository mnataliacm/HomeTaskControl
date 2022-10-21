import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AssignPageRoutingModule } from './assignments-routing.module';

import { AssignmentsPage } from './assignments.page';
import { AssignmentComponent } from './components/assignment/assignment.component';
import { AssignmentDetailComponent } from './components/assignment-detail/assignment-detail.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    AssignPageRoutingModule
  ],
  declarations: [AssignmentsPage, AssignmentComponent, AssignmentDetailComponent]
})
export class AssignmentsPageModule {}
