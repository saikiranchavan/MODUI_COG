import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MentorsearchComponent } from './mentorsearch.component';

describe('MentorsearchComponent', () => {
  let component: MentorsearchComponent;
  let fixture: ComponentFixture<MentorsearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MentorsearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MentorsearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
