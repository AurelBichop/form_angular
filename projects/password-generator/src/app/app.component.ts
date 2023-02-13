import { Component } from '@angular/core';
import { Settings } from './types';

@Component({
  selector: 'app-root',
  template: `
    <div class="container">
      <h1>Générez un mot de passe fort !</h1>
      <div class="grid">
        <password-display [message]="message"></password-display>
        <div>
          <password-settings
            [default-length]="settings.length"
            [default-uppercase]="settings.uppercase"
            [default-numbers]="settings.numbers"
            [default-symbols]="settings.symbols"
            (settings-change)="onSettingsChange($event)"
          ></password-settings>
          <hr />
          <password-controls (generate)="onClickGenerate()"></password-controls>
        </div>
      </div>
    </div>
  `,
  styles: [],
})
export class AppComponent {
  message = 'Cliquez sur le bouton "Générer"';

  settings: Settings = {
    length: 30,
    uppercase: false,
    numbers: false,
    symbols: false,
  };

  onSettingsChange(obj: Settings) {
    this.settings = obj;

    console.table(this.settings);
  }

  onClickGenerate() {
    this.message = 'MON MDPde_OUF';
    console.log('Génération du Mot de passe');
    console.table(this.settings);
  }
}
