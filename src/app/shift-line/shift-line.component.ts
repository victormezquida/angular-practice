import { Component } from '@angular/core';
import { OrdersContainerComponent } from '../orders-container/orders-container.component';

@Component({
  selector: 'app-shift-line',
  standalone: true,
  imports: [OrdersContainerComponent],
  templateUrl: './shift-line.component.html',
  styleUrl: './shift-line.component.css',
})
export class ShiftLineComponent {
  data = [
    {
      id: 1,
      shift: 'T1',
      orders: 89,
    },
    {
      id: 2,
      shift: 'T2',
      orders: 53,
    },
    {
      id: 3,
      shift: 'T3',
      orders: 115,
    },
    {
      id: 4,
      shift: 'T4',
      orders: 214,
    },
    {
      id: 1,
      shift: 'T1',
      orders: 89,
    },
    {
      id: 2,
      shift: 'T2',
      orders: 53,
    },
    {
      id: 3,
      shift: 'T3',
      orders: 115,
    },
    {
      id: 4,
      shift: 'T4',
      orders: 214,
    },
  ];
}
