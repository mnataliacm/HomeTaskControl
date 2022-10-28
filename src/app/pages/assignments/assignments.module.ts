import { NgModule } from '@angular/core';

import { AssignPageRoutingModule } from './assignments-routing.module';

import { CoreModule } from '../../core/core.module';
import { AssignmentsPage } from './assignments.page';
import { AssignmentComponent, AssignmentDetailComponent } from '../../core';


@NgModule({
  imports: [
    CoreModule,
    AssignPageRoutingModule
  ],
  declarations: [AssignmentsPage, AssignmentComponent, AssignmentDetailComponent]
})
export class AssignmentsPageModule {}
