import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'password-controls',
  template: `
    <button id="generate" (click)="onClickGenerate()">Générer</button>
    <button id="copy" (click)="onClickCopy()" *ngIf="password">
      Copier le mot de passe
    </button>
    <span id="message-copy-password" *ngIf="message">{{ message }}</span>
  `,
  styles: [],
})
export class PasswordControlsComponent {
  @Output('generate')
  onGenerateEvent = new EventEmitter();

  @Input()
  password?: string;

  @Input()
  message?: string;

  onClickGenerate() {
    this.message = '';
    this.onGenerateEvent.emit();
  }

  onClickCopy() {
    if (!this.password) {
      return;
    }
    navigator.clipboard.writeText(this.password);
    this.message = 'Le mot de passe a été copié';
  }
}
