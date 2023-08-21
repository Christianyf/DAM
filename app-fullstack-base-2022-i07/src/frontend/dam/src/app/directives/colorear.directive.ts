import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appColorear]'
})
export class ColorearDirective {

  private originalColor: string;

  constructor(private el:ElementRef) {
    this.originalColor = el.nativeElement.style.backgroundColor || 'transparent';
   }

  @HostListener('mouseenter')mouseEnter(){
    this.colorear('#dadce2');
  }
  @HostListener('mouseleave') mouseLeave() {
    this.colorear(this.originalColor);
  }
  colorear(color: string){
    this.el.nativeElement.style.backgroundColor = color;
  }

}
