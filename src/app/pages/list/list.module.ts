import { NgModule } from '@angular/core';
import { ListPage } from './list.page';

import { ListPageRoutingModule } from './list-routing.module';
import { CoreModule } from 'src/app/core/core.module';

@NgModule({
  imports: [
    CoreModule,
    ListPageRoutingModule
  ],
  declarations: [ListPage]
})
export class ListPageModule {}
