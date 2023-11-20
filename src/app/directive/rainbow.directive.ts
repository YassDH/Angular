import {Directive, HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: '[appRainbow]'
})
export class RainbowDirective {

  colors = [
    'blue',
    "brown",
    'yellow',
    'pink',
    'green',
    'purple',
    'gray',
]
  @HostBinding('style.color') color = 'green';
  @HostBinding('style.borderColor') bcolor = 'yellow'
  constructor() { }
  @HostListener('keypress') change(){
      this.color = this.colors[Math.floor((this.colors.length-1)* Math.random())]
      this.bcolor = this.colors[Math.floor((this.colors.length-1)* Math.random())]
  }
}
