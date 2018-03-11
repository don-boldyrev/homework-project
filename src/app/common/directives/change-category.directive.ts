import { Directive, Input, ElementRef } from '@angular/core';
import { Place } from '../../places';

@Directive({
  selector: '[appChangeCategory]'
})
export class ChangeCategoryDirective {

  constructor(private _elementRef: ElementRef) { }

  @Input()
  public set appChangeCategory(place: Place) {
    if (!place) {
      return;
    }
    setTimeout(() => {
      this._elementRef.nativeElement.click();
    }, 0);
  }
}
