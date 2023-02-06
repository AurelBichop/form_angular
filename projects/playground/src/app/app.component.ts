import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<h1>Découverte Angular</h1>

    <input force-lower value="LIOR" type="text" placeholder="Prenom" />

    <p
      [ngClass]="{
        red: this.age >= 18,
        bold: this.nationalite === 'Suisse'
      }"
      [ngStyle]="{ backgroundColor: getBgColor() }"
    >
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum quaerat
      libero nobis sed blanditiis est.
    </p>

    <button (click)="prenom = 'Raph'">Changer l'exemple</button>
    <button (click)="age = 12">Changer l'âge</button>
    <button (click)="nationalite = 'Francaise'">
      Changer la Nationalité
    </button> `,
  styles: [
    `
      .red {
        color: red;
      }
      .bold {
        font-weight: bold;
      }
    `,
  ],
})
export class AppComponent {
  prenom = 'Aurel';
  age = 40;
  nationalite = 'Suisse';

  cssClasses = {
    red: this.age >= 18,
    bold: this.nationalite === 'Suisse',
  };

  getBgColor() {
    return this.age < 18 ? 'green' : 'transparent';
  }
}
