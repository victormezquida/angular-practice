import { Component } from '@angular/core';
import { OrdersContainerComponent } from '../orders-container/orders-container.component';

@Component({
  selector: 'app-shift-line',
  standalone: true,
  imports: [OrdersContainerComponent],
  templateUrl: './shift-line.component.html',
  styleUrl: './shift-line.component.css'
})
export class ShiftLineComponent {

}
