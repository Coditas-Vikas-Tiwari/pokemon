import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
} from '@angular/core';

@Directive({
  selector: '[appCustomStyle]',
})
export class CustomStyleDirective {
  @HostBinding('style.backgroundColor') color!: string;
  @HostListener('mouseenter') setMouseEnter() {
    this.color = 'rgb(35, 52, 211)';
  }
  @HostListener('mouseleave') setMouseLeave() {
    this.color = 'white';
  }
  constructor() {}
  ngOnInit() {
    this.color = 'white';
  }
}
