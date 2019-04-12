import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadPersonComponent } from './read-person.component';

describe('ReadPersonComponent', () => {
  let component: ReadPersonComponent;
  let fixture: ComponentFixture<ReadPersonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReadPersonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadPersonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
