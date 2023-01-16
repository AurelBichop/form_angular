import { Component, Input, HostListener } from '@angular/core';

@Component({
  selector: 'counter',
  template: `
    <h3>Compteur</h3>
    Compteur : {{ count }}
    <button (click)="increment()">+ incrémenter</button>
    <button (click)="decrement()">- décrémenter</button>
  `,
})
export class CounterComponent {
  @Input('initial-value')
  count = 0;

  @Input('step')
  step = 1;

  increment() {
    this.count = this.count + this.step;
  }

  decrement() {
    this.count = this.count - this.step;
  }
}
