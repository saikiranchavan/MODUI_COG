import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmintechnologyComponent } from './admintechnology.component';

describe('AdmintechnologyComponent', () => {
  let component: AdmintechnologyComponent;
  let fixture: ComponentFixture<AdmintechnologyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmintechnologyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmintechnologyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
