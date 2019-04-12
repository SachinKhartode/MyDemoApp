import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WritePersonComponent } from './write-person.component';

describe('WritePersonComponent', () => {
  let component: WritePersonComponent;
  let fixture: ComponentFixture<WritePersonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WritePersonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WritePersonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
