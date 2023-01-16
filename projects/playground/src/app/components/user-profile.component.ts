import {
  Component,
  Directive,
  ElementRef,
  Input,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'user-profile',
  template: `
    <h3 [class.hired]="isHired">{{ firstname }} {{ lastName | uppercase }}</h3>
    <img [src]="avatar" alt="avatar" />
    Métier : <strong>{{ job }}</strong>
    <button (click)="onClickButton($event.clientX)">{{ action }}</button>
    <input
      #prenom
      type="text"
      (keydown.control.enter)="onFrappeAuClavier($event)"
      placeholder="Nouveau Prénom"
    />
    <button (click)="changePrenom()">change Prenom</button>
  `,
  styles: [
    `
      .hired {
        background-color: green;
      }
      h3 {
        color: blue;
      }
    `,
  ],
})
export class UserProfileComponent {
  @ViewChild('prenom')
  prenom?: ElementRef;

  @Input('first-name')
  firstname = '';

  @Input('last-name')
  lastName = '';

  @Input()
  job = '';

  @Input('hired')
  isHired = false;

  revenue = 1200;

  avatar = 'https://via.placeholder.com/30';

  action = this.isHired ? 'Virer' : 'Embaucher';

  onClickButton(coordX: number) {
    console.log(coordX);
    this.isHired = !this.isHired;
    this.action = this.isHired ? 'Virer' : 'Embaucher';
  }

  onFrappeAuClavier(event: Event) {
    console.log('Input touché');
  }

  changePrenom() {
    if (!this.prenom) {
      return;
    }

    this.firstname = this.prenom.nativeElement.value;
  }

  ngAfterViewInit() {
    if (this.prenom) {
      this.prenom.nativeElement.value = 'Raph';
    }
  }
}

// Cycle de vie
//1. Construire le composent
// *** const com = new Component();
//2. les Input vont se mettre en place
//3. Appeler le ngOnInit
// *** com.ngOnInit();
//4. La vue s'affiche (impact dans le DOM)
// *** com.ngAfterViewInit()
