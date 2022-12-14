import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { LIST_OF_PEOPLE } from 'src/assets/data/list-of-people';
import { Person } from '..';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  private _people: Person[] = LIST_OF_PEOPLE;
  private _peopleSubject: BehaviorSubject<Person[]> = new BehaviorSubject(this._people);
  public _people$ = this._peopleSubject.asObservable()

  id: number = this._people.length + 1;

  getPeople(): Person[] {
    return this._people;
  }

  getPersonById(id: number) {
    return this._people.find(p => p.id == id);
  }

  deletePersonById(id: number) {
    this._people = this._people.filter(p => p.id != id);
    this._peopleSubject.next(this._people)
  }

  addPerson(person: Person) {
    person.id = this.id++;
    this._people.push(person);
    this._peopleSubject.next(this._people);
  }

  updatePerson(person: Person) {
    var _person = this._people.find(p => p.id == person.id);
    if (_person) {
      _person.name = person.name;
      _person.surname = person.surname;
      _person.nickname = person.nickname;
      _person.picture = person.picture;
    }
    this._peopleSubject.next(this._people);
  }
}
