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
          <label for="length">Longueur du mot de passe : {{ length }}</label>
          <input
            [(ngModel)]="length"
            id="length"
            type="range"
            min="10"
            max="50"
            name="length"
          />

          <label>
            <input
              [(ngModel)]="uppercase"
              role="switch"
              type="checkbox"
              name="uppercase"
              id="uppercase"
            />
            Contiendra des majuscules
          </label>

          <label>
            <input
              [(ngModel)]="numbers"
            
              role="switch"
              type="checkbox"
              name="numbers"
              id="numbers"
            />
            Contiendra des nombres
          </label>

          <label>
            <input
              [(ngModel)]="symbols"
              role="switch"
              type="checkbox"
              name="symbols"
              id="symbols"
            />
            Contiendra des caractères spéciaux
          </label>
          <hr />
          <button (click)="onClickGenerate()">Générer</button>
        </div>
      </div>
    </div>
  `,
  styles: [],
})
export class AppComponent {
  message = 'Cliquez sur le bouton "Générer"';

  length = 20;
  uppercase = false;
  numbers = false;
  symbols = false;

  onClickGenerate() {
    this.message = 'MON MDPde_OUF';
    console.log('Génération du Mot de passe');
    console.table({
      length: this.length,
      uppercase: this.uppercase,
      numbers: this.numbers,
      symbols: this.symbols,
    });
  }
}

/*
  onChangeUppercase(event: Event) {
    const element = event.target as HTMLInputElement;
    this.uppercase = element.checked;
  }

  onChangeNumbers(event: Event) {
    const element = event.target as HTMLInputElement;
    this.numbers = element.checked;
  }

  onChangeSymbols(event: Event) {
    const element = event.target as HTMLInputElement;
    this.symbols = element.checked;
  }
  */
