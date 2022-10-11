import { Component, OnInit } from '@angular/core';
import { People } from 'src/app/models/people';
import { PeopleService } from 'src/app/services/people.service';
import { LIST_OF_PEOPLE } from 'src/assets/data/list-of-people';
import { HomePage } from '../home/home.page';

@Component({
  selector: 'app-people',
  template: `
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button></ion-back-button>
        </ion-buttons>
        <ion-title>PEOPLE</ion-title>
      </ion-toolbar>
    </ion-header>
  `,
  templateUrl: './people.page.html',
  styleUrls: ['./people.page.scss'],
})

export class PeoplePage {

  constructor(public peopleService: PeopleService) {}

}
