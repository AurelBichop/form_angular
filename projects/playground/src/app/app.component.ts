import {
  Component,
  TemplateRef,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<h1>Découverte Angular</h1>

    <h2 *if="age > 18; else other">Le If avec etoile fonctionne</h2>

    <ng-template #monTemplate [if]="age > 18" [ifElse]="autre">
      <h2>Le IF Fonctionne</h2>
    </ng-template>

    <ng-template #other>
      <h2>Le ELSE avec If* Fonctionne</h2>
    </ng-template>

    <ng-template #autre>
      <h2>Le ELSE Fonctionne</h2>
    </ng-template>

    <input type="number" placeholder="Votre age" #ageInput />
    <button (click)="age = ageInput.valueAsNumber">Modifier l'age</button> `,
  styles: [``],
})
export class AppComponent {
  age = 36;
}
