import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestExample1Component } from './test-example1.component';

describe('TestExample1Component', () => {
  let component: TestExample1Component;
  let fixture: ComponentFixture<TestExample1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestExample1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestExample1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
