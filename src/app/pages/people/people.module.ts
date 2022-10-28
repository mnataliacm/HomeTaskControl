import { NgModule } from '@angular/core';

import { PeoplePageRoutingModule } from './people-routing.module';

import { PeoplePage } from './people.page';
import { CoreModule } from '../../core/core.module';

@NgModule({
  imports: [
    CoreModule,
    PeoplePageRoutingModule
  ],
  declarations: [PeoplePage]
})
export class PeoplePageModule {}
