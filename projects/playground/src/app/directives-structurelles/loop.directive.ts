import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[loopOf]',
})
export class LoopDirective {
  @Input('loopOf')
  arr: any[] = [];

  constructor(
    private templateRef: TemplateRef<any>,
    private containerRef: ViewContainerRef
  ) {}

  ngOnInit() {
    this.arr.forEach((item, index) => {
      this.containerRef.createEmbeddedView(this.templateRef, {
        index,
        $implicit: item,
      });
    });
  }
}
