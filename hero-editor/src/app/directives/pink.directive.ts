import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appPink]'
})
export class PinkDirective {
  
  //elementRef!: ElementRef;

  constructor(private elementRef: ElementRef,  private renderer: Renderer2) { 
  }

  @HostListener("mouseenter") onMouseEnter() {
    this.renderer.setStyle(this.elementRef.nativeElement, 'color' , 'pink');
    this.renderer.setStyle(this.elementRef.nativeElement, 'font-size' , '25px');
    this.toggle = !this.toggle;
  }

  @HostListener("mouseleave") onMouseLeave() {
    this.renderer.setStyle(this.elementRef.nativeElement, 'color' , 'black');
    this.renderer.setStyle(this.elementRef.nativeElement, 'font-size' , '2em');
    this.toggle = !this.toggle;
  }

  @HostBinding("style.cursor") get getCursor(){
    return "pointer";
  }

  @HostBinding("class.mouseenter") toggle: boolean = false;;

}
