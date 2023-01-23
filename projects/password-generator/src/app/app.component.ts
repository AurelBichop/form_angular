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
            id="length"
            type="range"
            min="10"
            max="50"
            name="length"
            (input)="onChangeLength($event)"
          />

          <label>
            <input
              #uppercaseInput
              (change)="
                onChangeSetting(uppercaseInput.name, uppercaseInput.checked)
              "
              role="switch"
              type="checkbox"
              name="uppercase"
              id="uppercase"
            />
            Contiendra des majuscules
          </label>

          <label>
            <input
              #numbersInput
              (change)="
                onChangeSetting(numbersInput.name, numbersInput.checked)
              "
              role="switch"
              type="checkbox"
              name="numbers"
              id="numbers"
            />
            Contiendra des nombres
          </label>

          <label>
            <input
              #symbolsInput
              (change)="
                onChangeSetting(symbolsInput.name, symbolsInput.checked)
              "
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

  onChangeLength(event: Event) {
    const element = event.target as HTMLInputElement;
    this.length = +element.value;
  }

  onChangeSetting(settingName: string, checked: boolean) {
    if (
      settingName !== 'uppercase' &&
      settingName !== 'numbers' &&
      settingName !== 'symbols'
    ) {
      return;
    }

    this[settingName] = checked;
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
}
