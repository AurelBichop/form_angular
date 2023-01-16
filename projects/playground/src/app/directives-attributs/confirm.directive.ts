import { Directive, HostListener, Input } from '@angular/core';

@Directive({
  selector: 'a[confirm]',
})
export class ConfirmDirective {
  @Input('confirm-message')
  message = 'Hello toi';

  @HostListener('click')
  onClickConfirm(): boolean {
    return window.confirm(this.message);
  }
}
