import {
  Directive,
  EventEmitter,
  HostBinding,
  HostListener,
  Input,
  Output,
} from '@angular/core';

@Directive({
  selector: 'p[highlight]',
  exportAs: 'hl',
})
export class HighlightDirective {
  @HostBinding('style.backgroundColor')
  color = 'transparent';

  @Output('color-change')
  colorChangeEvent = new EventEmitter<string>();

  ngOnInit() {
    this.color = this.basecolor;
  }

  @Input('background-color')
  backgroundColor = 'purple';

  @Input('base-color')
  basecolor = 'transparent';

  @HostListener('mouseenter')
  onMouseEnter() {
    this.color = this.backgroundColor;
    this.colorChangeEvent.emit(this.color);
  }

  @HostListener('mouseout')
  onMouseOut() {
    this.color = this.basecolor;
    this.colorChangeEvent.emit(this.color);
  }
}
