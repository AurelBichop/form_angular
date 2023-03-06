import {
  Component,
  TemplateRef,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';


@Component({
  selector: 'app-root',
  template: `<h1>Découverte Angular</h1>
    <ng-template #monTemplate let-prenom="firstname" let-age="age">
      <h2>Hello-{{ prenom }}</h2>
      Vous avez {{ age }}
    </ng-template>

    <ng-container #monContainer>
      <h3>Je suis le Container</h3>
    </ng-container>

    <button (click)="onClick()">Tester</button> `,
  styles: [``],
})
export class AppComponent {
  @ViewChild('monTemplate')
  monTemplate?: TemplateRef<any>;

  @ViewChild('monContainer', { read: ViewContainerRef })
  monContainer?: ViewContainerRef;

  onClick() {
    if (this.monTemplate) {
      this.monContainer?.clear();
      const ref = this.monContainer?.createEmbeddedView(this.monTemplate, {
        firstname: 'Aurel',
        age: 35,
      });
    }
  }

  ngAfterViewInit() {
    console.log(this.monContainer, this.monTemplate);
  }
}
