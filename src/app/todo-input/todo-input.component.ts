import { Component, output } from '@angular/core';

@Component({
  selector: 'app-todo-input',
  standalone: true,
  imports: [],
  templateUrl: './todo-input.component.html',
  styleUrl: './todo-input.component.css',
})
export class TodoInputComponent {
  onNewTodo = output<string>();

  onEnter(event: Event) {
    const target = event.target as HTMLInputElement;
    target.select();
    this.onNewTodo.emit(target.value);
  }
}
