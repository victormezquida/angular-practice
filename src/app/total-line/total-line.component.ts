import { Component } from '@angular/core';
import { OrdersContainerComponent } from '../orders-container/orders-container.component';

@Component({
  selector: 'app-total-line',
  standalone: true,
  imports: [OrdersContainerComponent],
  templateUrl: './total-line.component.html',
  styleUrl: './total-line.component.css'
})
export class TotalLineComponent {

}
