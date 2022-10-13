import { Injectable } from '@angular/core';
import { LIST_OF_PEOPLE } from 'src/assets/data/list-of-people';
import { People } from '../models/people';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  constructor() { }


  people: People[] = LIST_OF_PEOPLE;
 

  getPeople(): People[] {
     return this.people;
   }

   deletePeople(id: number) {
    this.people = this.people.filter(t => t.id != id);
  }
}
