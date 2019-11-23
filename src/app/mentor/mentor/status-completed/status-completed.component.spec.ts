import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusCompletedComponent } from './status-completed.component';

describe('StatusCompletedComponent', () => {
  let component: StatusCompletedComponent;
  let fixture: ComponentFixture<StatusCompletedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatusCompletedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatusCompletedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
