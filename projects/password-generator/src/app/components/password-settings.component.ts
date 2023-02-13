import { Settings } from '../types';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'password-settings',
  template: `
    <label for="length">Longueur du mot de passe : {{ length }}</label>
    <input
      [(ngModel)]="length"
      (change)="onSettingsChange()"
      id="length"
      type="range"
      min="10"
      max="50"
      name="length"
    />

    <label>
      <input
        [(ngModel)]="uppercase"
        (change)="onSettingsChange()"
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
        (change)="onSettingsChange()"
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
        (change)="onSettingsChange()"
        role="switch"
        type="checkbox"
        name="symbols"
        id="symbols"
      />
      Contiendra des caractères spéciaux
    </label>
  `,
  styles: [],
})
export class PasswordSettingsComponent {
  @Input('default-length')
  length = 20;
  @Input('default-uppercase')
  uppercase = false;
  @Input('default-numbers')
  numbers = false;
  @Input('default-symbols')
  symbols = false;

  @Output('settings-change')
  onSettingsChangeEvent = new EventEmitter<Settings>();

  onSettingsChange() {
    this.onSettingsChangeEvent.emit({
      length: this.length,
      uppercase: this.uppercase,
      numbers: this.numbers,
      symbols: this.symbols,
    });
    console.table({
      length: this.length,
      uppercase: this.uppercase,
      numbers: this.numbers,
      symbols: this.symbols,
    });
  }
}
