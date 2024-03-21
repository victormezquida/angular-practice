import { Component } from '@angular/core';

@Component({
  selector: 'app-todo-input',
  standalone: true,
  imports: [],
  templateUrl: './todo-input.component.html',
  styleUrl: './todo-input.component.css',
})
export class TodoInputComponent {
  onEnter(event: Event) {
    const target = event.target as HTMLInputElement;
    console.log(target.value);
  }
}
