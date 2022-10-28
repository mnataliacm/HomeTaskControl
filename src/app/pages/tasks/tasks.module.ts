import { NgModule } from '@angular/core';

import { TasksPageRoutingModule } from './tasks-routing.module';

import { CoreModule } from '../../core/core.module';
import { TasksPage } from './tasks.page';

@NgModule({
  imports: [
    CoreModule,
    TasksPageRoutingModule,
  ],
  declarations: [TasksPage]
})
export class TasksPageModule {}
