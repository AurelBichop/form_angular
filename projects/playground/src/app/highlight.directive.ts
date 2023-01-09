import { Directive, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: 'p[highlight]',
})
export class HighlightDirective {
  @HostBinding('style.backgroundColor')
  color = 'transparent';

  @Input('background-color')
  backgroundColor = 'purple';

  @Input('base-color')
  basecolor = 'transparent';

  @HostListener('mouseenter')
  onMouseEnter(element: HTMLElement) {
    this.color = this.backgroundColor;
  }

  @HostListener('mouseout')
  onMouseOut(element: HTMLElement) {
    this.color = this.basecolor;
  }
}
