import { Component, OnInit } from '@angular/core';
import { Person } from '../Models/person';
import { Store } from '@ngrx/store';
import { AppState } from '../AppState/person-state';
import { FormsModule } from '@angular/forms';
import * as PersonActions from '../Actions/person-action';
import {FormControl,FormGroup} from '@angular/forms';




@Component({
  selector: 'app-write-person',
  templateUrl: './write-person.component.html',
  styleUrls: ['./write-person.component.scss']
})
export class WritePersonComponent implements OnInit {

  person: Person;
  // 2. Inject Store for AppState in Constructor
  constructor(private store: Store<AppState>) {
    this.person = new Person(0,'');
  }
 
  ngOnInit() {
  }
 
  // 3. dispatch the AddPerson Action
  addPerson() {
    this.store.dispatch(
       new PersonActions.AddPerson(this.person)
    );
  }
  clearPerson() {
    this.person = new Person(0, '');
  }
}
