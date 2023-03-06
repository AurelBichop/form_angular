import {
  Component,
  TemplateRef,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<h1>Découverte Angular</h1>

    <ul>
      <li *loop="let personne of personnes; let numero = index">
        {{ personne.prenom }} {{ personne.nom }} (numéro {{ numero + 1 }})
      </li>
    </ul>

    <button (click)="addPersonne()">Ajouter</button>

    <div *if="age >= 18; else autre">
      <h2>Vous êtes Majeur !</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
        repellendus delectus quod, natus sapiente aliquid consequuntur,
        voluptatem deserunt tempore quaerat laboriosam enim ea incidunt,
        provident id explicabo vitae eum dolorem.
      </p>
      <button>Voir le site</button>
    </div>

    <ng-template #autre>
      <h2>Vous n'êtes pas Majeur</h2>
      <p>Merci de sortir du Site</p>
    </ng-template>

    <input type="number" placeholder="Votre age" #ageInput />
    <button (click)="age = ageInput.valueAsNumber">Modifier l'age</button> `,
  styles: [``],
})
export class AppComponent {
  age = 35;

  personnes = [
    { prenom: 'Aurel', nom: 'bichop' },
    { prenom: 'Aby', nom: 'bouldog' },
  ];

  addPersonne() {
    this.personnes.push({
      prenom: 'Jean',
      nom: 'Fontaine',
    });
  }
}
