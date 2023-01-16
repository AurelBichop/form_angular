import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: 'a[no-open]',
})
export class NoOpenDirective {
  @HostListener('click', ['$event'])
  onClickLink(event: Event) {
    event.preventDefault();
    console.log("J'empeche le lien");
  }
}
