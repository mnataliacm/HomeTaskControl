import { NgModule } from '@angular/core';

import { TasksPageRoutingModule } from './tasks-routing.module';

import { TasksPage } from './tasks.page';
import { TaskComponent } from '../../core/components/task/task.component';
import { TaskDetailComponent } from './task-detail/task-detail.component';
import { CoreModule } from 'src/app/core/core.module';

@NgModule({
  imports: [
    CoreModule,
    TasksPageRoutingModule,
  ],
  declarations: [TasksPage, TaskComponent, TaskDetailComponent]
})
export class TasksPageModule {}
