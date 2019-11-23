import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MentorAdminComponent } from './mentor-admin.component';

describe('MentorAdminComponent', () => {
  let component: MentorAdminComponent;
  let fixture: ComponentFixture<MentorAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MentorAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MentorAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
