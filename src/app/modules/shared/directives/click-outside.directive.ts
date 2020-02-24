import { Directive, Output, HostListener, EventEmitter, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[clickOutside]'
})
export class ClickOutsideDirective {

  @Input() enableEsc: boolean = true;
  @Output()
  public clickOutside = new EventEmitter();

  constructor(private _elementRef: ElementRef) { }


  @HostListener('document:click', ['$event.target'])
  public onClick(targetElement) {
    const clickedInside = this._elementRef.nativeElement.contains(targetElement);
    if (!clickedInside) {
      this.clickOutside.emit(null);
    }
  }

  @HostListener('document:keyup', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    const key = event.keyCode;
    if (key === 27 && this.enableEsc) {
      this.clickOutside.emit(null);
    }
  }

}
