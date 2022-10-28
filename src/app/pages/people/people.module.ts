import { NgModule } from '@angular/core';

import { PeoplePageRoutingModule } from './people-routing.module';

import { PeoplePage } from './people.page';
import { PersonComponent } from '../../core/components/person/person.component';
import { PersonDetailComponent } from '../../core/components/person-detail/person-detail.component';
import { CoreModule } from 'src/app/core/core.module';

@NgModule({
  imports: [
    CoreModule,
    PeoplePageRoutingModule
  ],
  declarations: [PeoplePage, PersonComponent, PersonDetailComponent]
})
export class PeoplePageModule {}
