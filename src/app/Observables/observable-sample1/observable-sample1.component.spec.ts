import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObservableSample1Component } from './observable-sample1.component';

describe('ObservableSample1Component', () => {
  let component: ObservableSample1Component;
  let fixture: ComponentFixture<ObservableSample1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObservableSample1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObservableSample1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
