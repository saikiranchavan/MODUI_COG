import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MentorCompletedStatusComponent } from './mentor-completed-status.component';

describe('MentorCompletedStatusComponent', () => {
  let component: MentorCompletedStatusComponent;
  let fixture: ComponentFixture<MentorCompletedStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MentorCompletedStatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MentorCompletedStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
