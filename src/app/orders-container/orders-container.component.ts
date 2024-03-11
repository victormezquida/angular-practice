import { Component, input } from '@angular/core';

@Component({
  selector: 'app-orders-container',
  standalone: true,
  imports: [],
  templateUrl: './orders-container.component.html',
  styleUrl: './orders-container.component.css'
})
export class OrdersContainerComponent {
shift = input();
orders = input();
}
