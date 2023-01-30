import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<h1>Découverte Angular</h1>

    Mon revenu : {{ revenuDeBase }}

    <input
      [(model)]="revenuDeBase"
      type="number"
      placeholder="Vos
    revenus"
    />

    <button (click)="calculImpots()">Calcul des impots</button> `,
  styles: [],
})
export class AppComponent {
  revenuDeBase = 110;

  calculImpots() {
    const impots = this.revenuDeBase + 500;
    console.log(impots);
  }

  onRevenusChange(value: number) {
    this.revenuDeBase = value;
  }
}
