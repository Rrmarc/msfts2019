import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appDotcreator]'
})
export class DotcreatorDirective {
 

  constructor() { }

  @HostListener('click') makeDot(){
    alert("there should be a dot here.....");
  //  this.circle = document.createElement("div");
  //   console.dir(circle);

  }
}
