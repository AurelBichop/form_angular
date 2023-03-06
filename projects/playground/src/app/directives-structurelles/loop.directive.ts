import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[loop]',
})
export class LoopDirective {
  @Input('loop')
  arr: any[] = [];

  constructor(
    private templateRef: TemplateRef<any>,
    private containerRef: ViewContainerRef
  ) {}

  ngOnInit() {
    this.arr.forEach((item, index) => {
      this.containerRef.createEmbeddedView(this.templateRef, {
        item,
        index,
      });
    });
  }
}
