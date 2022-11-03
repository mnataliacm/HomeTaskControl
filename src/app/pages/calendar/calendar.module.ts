import { NgModule } from '@angular/core';
import { CalendarPage } from './calendar.page';

import { CalendarPageRoutingModule } from './calendar-routing.module';
import { CoreModule } from 'src/app/core/core.module';

@NgModule({
  imports: [
    CoreModule,
    CalendarPageRoutingModule
  ],
  declarations: [CalendarPage]
})
export class CalendarPageModule {}
