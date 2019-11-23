import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainerregisterComponent } from './trainerregister.component';

describe('TrainerregisterComponent', () => {
  let component: TrainerregisterComponent;
  let fixture: ComponentFixture<TrainerregisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrainerregisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainerregisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
