import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'newsletter',
  template: `
    <h3>{{ title }}</h3>
    <input #email type="email" placeholder="{{ placeholder }}" />
    <ng-content select="p"></ng-content>
    <button (click)="onConfirmNewsLetter(email.value)">{{ buttonText }}</button>
    <ng-content select="h2"></ng-content>

    <ng-content></ng-content>
  `,
})
export class NewsletterComponent {
  @Input()
  title: string = 'Inscription newsletter';

  @Input('button-text')
  buttonText: string = "Je m'inscris";

  @Input()
  placeholder: string = 'Adresse email';

  @Output('confirm')
  onConfirmEvent = new EventEmitter<string>();

  onConfirmNewsLetter(email: string) {
    console.log("Depuis l'instérieur du composant , click sur le boutton");
    this.onConfirmEvent.emit(email);
  }
}
