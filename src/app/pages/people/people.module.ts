import { NgModule } from '@angular/core';

import { PeoplePageRoutingModule } from './people-routing.module';

import { PeoplePage } from './people.page';
import { CoreModule } from '../../core/core.module';
import { PersonDetailComponent } from 'src/app/core';

@NgModule({
  imports: [
    CoreModule,
    PeoplePageRoutingModule
  ],
  declarations: [PeoplePage, PersonDetailComponent, PersonDetailComponent]
})
export class PeoplePageModule {}
