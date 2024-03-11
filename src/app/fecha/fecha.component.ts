import { Component, input } from '@angular/core';

@Component({
  selector: 'app-fecha',
  standalone: true,
  imports: [],
  templateUrl: './fecha.component.html',
  styleUrl: './fecha.component.css'
})
export class FechaComponent {
icn = input();
fecha = input();
}
