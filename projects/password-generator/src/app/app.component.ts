import { Component } from '@angular/core';
import { Settings } from './types';
import { PasswordGeneratorService } from './password-generator.service';

@Component({
  selector: 'app-root',
  template: `
    <div class="container">
      <h1>Générez un mot de passe fort !</h1>
      <div class="grid">
        <password-display [password]="password"></password-display>
        <div>
          <password-settings
            [default-settings]="settingsCopy"
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
  password?: string;

  settings: Settings = {
    length: 20,
    uppercase: false,
    numbers: false,
    symbols: false,
  };

  constructor(private service: PasswordGeneratorService) {}

  get settingsCopy() {
    return { ...this.settings };
  }

  onSettingsChange(obj: Settings) {
    this.settings = obj;

    console.table(this.settings);
  }

  onClickGenerate() {
    this.password = this.service.generate({
      length: this.settings.length,
      numbers: this.settings.numbers,
      uppercase: this.settings.uppercase,
      symbols: this.settings.symbols,
    });
    console.log('Génération du Mot de passe');
    //console.table(this.settings);
  }
}
