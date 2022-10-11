import { Injectable } from '@angular/core';
import { LIST_OF_PEOPLE } from 'src/assets/data/list-of-people';
import { People } from '../models/people';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  people: People[] = LIST_OF_PEOPLE;

  constructor() { }

  getPeople(): People[] {
    return this.people;
  }

  
}
