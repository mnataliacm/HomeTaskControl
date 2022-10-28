import { Component, OnInit } from '@angular/core';
import { IonAccordionGroup } from '@ionic/angular';
import { PeopleService, Person } from '../..';


@Component({
  selector: 'app-person-selectable',
  templateUrl: './person-selectable.component.html',
  styleUrls: ['./person-selectable.component.scss'],
})
export class PersonSelectableComponent implements OnInit {

  selectedPerson: Person = null;
  constructor(
    private peopleService: PeopleService
  ) { }

  ngOnInit() {}

  getPeople() {
    return this.peopleService.getPeople();
  }

  onPersonClicked(person:Person, accordion:IonAccordionGroup){
    this.selectedPerson = person;
    accordion.value = '';
  }
  
}
