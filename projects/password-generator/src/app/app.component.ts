import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="container">
      <h1>Générez un mot de passe fort !</h1>
      <div class="grid">
        <div>
          <h3>Votre futur mot de passe :</h3>
          <article>{{ message }}</article>
        </div>
        <div>
          <label for="length">Longueur du mot de passe :</label>
          <input id="length" type="range" min="10" max="50" name="length" />

          <label>
            <input
              role="switch"
              type="checkbox"
              name="uppercase"
              id="uppercase"
            />
            Contiendra des majuscules
          </label>

          <label>
            <input role="switch" type="checkbox" name="numbers" id="numbers" />
            Contiendra des nombres
          </label>

          <label>
            <input role="switch" type="checkbox" name="symbols" id="symbols" />
            Contiendra des caractères spéciaux
          </label>
          <hr />
          <button>Générer</button>
        </div>
      </div>
    </div>
  `,
  styles: [],
})
export class AppComponent {
  message = 'Cliquez sur le bouton "Générer"';
}
