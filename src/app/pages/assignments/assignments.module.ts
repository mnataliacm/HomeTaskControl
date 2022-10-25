import { NgModule } from '@angular/core';

import { AssignPageRoutingModule } from './assignments-routing.module';

import { AssignmentsPage } from './assignments.page';
import { AssignmentComponent } from '../../core/components/assignment/assignment.component';
import { AssignmentDetailComponent } from './assignment-detail/assignment-detail.component';
import { CoreModule } from 'src/app/core/core.module';

@NgModule({
  imports: [
    CoreModule,
    AssignPageRoutingModule
  ],
  declarations: [AssignmentsPage, AssignmentComponent, AssignmentDetailComponent]
})
export class AssignmentsPageModule {}
