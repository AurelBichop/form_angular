import {
  Component,
  TemplateRef,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<h1>Découverte Angular</h1>

    <h2 *if="age > 18">Le If avec etoile fonctionne</h2>

    <ng-template #monTemplate [if]="age > 18">
      <h2>Le IF Fonctionne</h2>
    </ng-template>

    <input type="number" placeholder="Votre age" #ageInput />
    <button (click)="age = ageInput.valueAsNumber">Modifier l'age</button> `,
  styles: [``],
})
export class AppComponent {
  age = 36;
}
