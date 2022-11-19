import { Component, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { IonAccordionGroup } from '@ionic/angular';
import { PeopleService, Person } from '../..';

export const USER_PROFILE_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => PersonSelectableComponent),
  multi: true
}

@Component({
  selector: 'app-person-selectable',
  templateUrl: './person-selectable.component.html',
  styleUrls: ['./person-selectable.component.scss'],
  providers: [USER_PROFILE_VALUE_ACCESSOR]
})
export class PersonSelectableComponent implements ControlValueAccessor {
  selectedPerson: Person = null;
  propagateChange = (_: any) => { }
  isDisabled:boolean = false;

  constructor(private peopleService: PeopleService) { }

  writeValue(obj: any): void {
    this.selectedPerson = this.peopleService.getPersonById(obj);
  }

  registerOnChange(fn: any): void {
    this.propagateChange = fn;
  }

  registerOnTouched(fn: any): void {
  }

  setDisabledState?(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }

  getPeople() {
    return this.peopleService.getPeople();
  }

  onPersonClicked(person:Person, accordion?:IonAccordionGroup){
    this.selectedPerson = person;
    accordion.value = '';
    this.propagateChange(this.selectedPerson.id);
  }
  
}
