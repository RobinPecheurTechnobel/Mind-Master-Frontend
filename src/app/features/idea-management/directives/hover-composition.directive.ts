import { Directive, ElementRef, HostListener, OnChanges, Renderer2, SimpleChanges } from '@angular/core';

@Directive({
  selector: '.concept,.idea',
  inputs : ['isVisibilityActivate']
})
export class HoverCompositionDirective implements OnChanges {
  isVisibilityActivate : boolean;

  backgroundColor = 'transparent';
  color = '#000000';

  conceptLight = '#aaffaa';
  ideaLight = '#aaaaf6';

  conceptDark = '#66bb66';
  ideaDark = '#6666bb';

  black = '#000000';
  white = '#ffffff';

  // ElementRef -> Pour récupérer l'élément sur lequel est la directive
  constructor(private _elem : ElementRef,
    private renderer: Renderer2) { 
      this.isVisibilityActivate =false;
    }

  ngOnChanges(changes: SimpleChanges): void {
    if(!changes['isVisibilityActivate'])
    {
      this.backgroundColor = 'transparent';
    }
    else
    {
      this.notFocus();
    }
    this.changeStyle();
  }
  

  changeStyle():void{
    this.renderer.setStyle(this._elem.nativeElement, 'background-color', this.backgroundColor);
    this.renderer.setStyle(this._elem.nativeElement, 'color', this.color);
  }

  @HostListener('mouseover')
  onMouseOver() {
    this.focus();
  }

  @HostListener('mouseout')
  onMouseOut() {
    this.notFocus();
  } 
  focus():void{
    if(!this.isVisibilityActivate){
      this.backgroundColor = 'transparent';
      this.color = this.black;
    }
    else if(this._elem.nativeElement.classList.contains('concept'))
    {
      this.backgroundColor = this.conceptDark;
      this.color = this.white;
    }
    else if(this._elem.nativeElement.classList.contains('idea'))
    {
      this.backgroundColor = this.ideaDark;
      this.color = this.white;
    }
    this.changeStyle();
  }
  notFocus(): void{
    if(!this.isVisibilityActivate){
      this.backgroundColor = 'transparent';
      this.color = this.black;
    }
    else if(this._elem.nativeElement.classList.contains('concept'))
    {
      this.backgroundColor = this.conceptLight;
      this.color = this.black;
    }
    else if(this._elem.nativeElement.classList.contains('idea'))
    {
      this.backgroundColor = this.ideaLight;
      this.color = this.black;
    }
    this.changeStyle();
  }

}
