import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { PersonComponent, PersonDetailComponent, TaskComponent, TaskDetailComponent, AssignmentComponent, AssignmentDetailComponent, PersonSelectableComponent, TaskSelectableComponent, DateTimeSelectableComponent } from '.';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { createTranslateLoader } from './utils/translate';


@NgModule({
  declarations: [
    PersonComponent,
    PersonDetailComponent,
    TaskComponent,
    TaskDetailComponent,
    AssignmentComponent,
    AssignmentDetailComponent,
    PersonSelectableComponent,
    TaskSelectableComponent,
    DateTimeSelectableComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule.forRoot(),
    ReactiveFormsModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
      provide: TranslateLoader,
      useFactory: (createTranslateLoader),
      deps: [HttpClient]
      }
      }),
    
  ],
  exports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    TranslateModule,
    PersonComponent,
    PersonDetailComponent,
    TaskComponent,
    TaskDetailComponent,
    AssignmentComponent,
    AssignmentDetailComponent,
    PersonSelectableComponent,
    TaskSelectableComponent,
    DateTimeSelectableComponent
  ]
})
export class CoreModule { }
