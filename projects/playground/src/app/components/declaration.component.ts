import { Component } from '@angular/core';
import { TaxesService } from '../services/taxes.service';

@Component({
  selector: 'declaration-impots',
  template: `
    <h3>Déclaration</h3>
    <input #revenu type="number" placeholder="Déclarez vos revenus" />
    <button (click)="onClickDeclaration(revenu.valueAsNumber)">Déclarer</button>
    <article>Vos impots : {{ resultats }}€</article>
  `,
  providers: [
    // TaxesService,
  ],
})
export class DeclarationComponent {
  resultats: number = 0;

  constructor(private service: TaxesService) {}

  onClickDeclaration(revenu: number) {
    this.resultats = this.service.calculate(revenu);
  }
}
