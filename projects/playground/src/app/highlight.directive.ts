import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
} from '@angular/core';

@Directive({
  selector: 'p[highlight]',
})
export class HighlightDirective {
  @HostBinding('style.backgroundColor')
  color = 'transparent';

  @HostListener('mouseenter')
  onMouseEnter(element: HTMLElement) {
    this.color = 'blue';
  }

  @HostListener('mouseout')
  onMouseOut(element: HTMLElement) {
    this.color = 'transparent';
  }
}
