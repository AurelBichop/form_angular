import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<h1>Découverte Angular</h1>
    <newsletter
      (confirm)="onConfirm($event)"
      title="Recevez nos courriers"
      button-text="confirmer"
      placeholder="votre adresse mail svp"
    >
      <h2>Hello H2</h2>
      <p>Vous recevrez l'ensemble de nos informations</p>
      <a href="">en savoir plus</a>
    </newsletter>

    <card title="Ma carte">
      <p>Lorem Ipsum dolor sit ..</p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate
        nesciunt ipsum minus voluptas, repudiandae debitis!
      </p>
      <footer><a href="#">en savoir plus</a></footer>
    </card> `,
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
  onConfirm(email: string) {
    console.log("Boutton cliqué depuis l'extérieur :", email);
  }
}
