import { NgModule } from '@angular/core';

import { TasksPageRoutingModule } from './tasks-routing.module';

import { CoreModule } from 'src/app/core/core.module';
import { TasksPage } from './tasks.page';
import { TaskComponent, TaskDetailComponent } from 'src/app/core';

@NgModule({
  imports: [
    CoreModule,
    TasksPageRoutingModule,
  ],
  declarations: [TasksPage, TaskComponent, TaskDetailComponent]
})
export class TasksPageModule {}
