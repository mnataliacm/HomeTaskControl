import { NgModule } from '@angular/core';

import { HomePage } from './home.page';
import { HomePageRoutingModule } from './home-routing.module';
import { CoreModule } from 'src/app/core/core.module';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { createTranslateLoader } from 'src/app/core';
import { HttpClient } from '@angular/common/http';


@NgModule({
  imports: [
    CoreModule,
    HomePageRoutingModule
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
