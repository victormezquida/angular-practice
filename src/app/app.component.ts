import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FechaComponent } from './fecha/fecha.component';
import { OrdersContainerComponent } from './orders-container/orders-container.component';
import { ShiftLineComponent } from './shift-line/shift-line.component';
import { DayPlanningComponent } from './day-planning/day-planning.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FechaComponent, OrdersContainerComponent, ShiftLineComponent, DayPlanningComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Seat';
}
