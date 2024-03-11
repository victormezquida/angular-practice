import { Component } from '@angular/core';
import { TotalLineComponent } from '../total-line/total-line.component';
import { FechaComponent } from '../fecha/fecha.component';
import { ShiftLineComponent } from '../shift-line/shift-line.component';

@Component({
  selector: 'app-day-planning',
  standalone: true,
  imports: [TotalLineComponent, FechaComponent, ShiftLineComponent],
  templateUrl: './day-planning.component.html',
  styleUrl: './day-planning.component.css'
})
export class DayPlanningComponent {

}
