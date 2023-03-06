import {
  Component,
  TemplateRef,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<h1>Découverte Angular</h1>
    <ng-template #monTemplate>
      <h2>Hello-World</h2>
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
      this.monContainer?.createEmbeddedView(this.monTemplate);
    }
  }

  ngAfterViewInit() {
    console.log(this.monContainer, this.monTemplate);
  }
}
