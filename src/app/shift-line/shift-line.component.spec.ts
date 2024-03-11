import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShiftLineComponent } from './shift-line.component';

describe('ShiftLineComponent', () => {
  let component: ShiftLineComponent;
  let fixture: ComponentFixture<ShiftLineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShiftLineComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShiftLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
