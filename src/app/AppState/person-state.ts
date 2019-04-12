import { Person } from '../Models/person';

export  interface AppState {
    readonly persons: Person[];
  }