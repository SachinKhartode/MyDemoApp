import { Component, OnInit } from "@angular/core";
// 1a. observable for storing Person information
import { Observable} from 'rxjs';
// 1b. Store, this will be injected in the constructor
import { Store } from "@ngrx/store";
// 1c. Person object
import { Person } from "../Models/person";
// 1d. The AppState to access Application state
import { AppState } from "../AppState/person-state";
// 1e. Actions
import * as PersonActions from '../Actions/person-action';

@Component({
  selector: "app-read-person",
  templateUrl: "./read-person.component.html"
})
export class ReadPersonComponent implements OnInit {
  // 2a. Person Observable
  persons: Observable<Person[]>;
  // 2b.The constructor in injected with Store for Application State
  constructor(private store: Store<AppState>) {
    this.persons = store.select('person');
  }
// 3
  deletePerson(p: Person) {
    this.store.dispatch(new PersonActions.RemovePerson(p));
  }
  ngOnInit() {}
}