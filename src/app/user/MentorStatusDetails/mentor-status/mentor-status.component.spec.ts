import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MentorStatusComponent } from './mentor-status.component';

describe('MentorStatusComponent', () => {
  let component: MentorStatusComponent;
  let fixture: ComponentFixture<MentorStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MentorStatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MentorStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
