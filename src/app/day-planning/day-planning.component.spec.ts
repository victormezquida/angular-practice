import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DayPlanningComponent } from './day-planning.component';

describe('DayPlanningComponent', () => {
  let component: DayPlanningComponent;
  let fixture: ComponentFixture<DayPlanningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DayPlanningComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DayPlanningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
