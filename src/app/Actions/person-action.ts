import {Action} from '@ngrx/store';
import { Person } from '../Models/person';

 
// 1. defining type of actions
export const ADD_PERSON = '[PERSON] Add';
export const REMOVE_PERSON = '[PERSON] Remove';
 
// 2. The AddPerson class
export class AddPerson implements Action {
  readonly type = ADD_PERSON;
  constructor(
    public payload: Person
  ) {}
}
// 3. The RemovePerson class
export class RemovePerson implements Action {
  readonly type = REMOVE_PERSON;
  constructor(
    public payload: Person
  ) {}
}

export type Actions = AddPerson | RemovePerson;