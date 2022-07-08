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
  @HostBinding('style.color') textcolor!:string;
  @HostListener('mouseenter') setMouseEnter() {
    this.color = 'rgb(35, 52, 211)';
    this.textcolor = "white";
  }
  @HostListener('mouseleave') setMouseLeave() {
    this.color = 'white';
    this.textcolor = "black";
  }
  
  constructor() {}
  ngOnInit() {
    this.color = 'white';
    this.textcolor = "black";
  }
}
