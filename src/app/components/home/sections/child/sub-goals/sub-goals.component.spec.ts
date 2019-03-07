import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubGoalsComponent } from './sub-goals.component';

describe('SubGoalsComponent', () => {
  let component: SubGoalsComponent;
  let fixture: ComponentFixture<SubGoalsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubGoalsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubGoalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
