import { Component } from '@angular/core';

@Component({
  selector: 'app-mystyle',
  templateUrl: './mystyle.component.html',
  styleUrls: ['./mystyle.component.css']
})
export class MystyleComponent {
 color  = "red";
 font = 'arial';
 size = '15px';

 sizechanged(val : string){
    this.size = val + 'px';
 }
 selectedfont(font : HTMLSelectElement){
   this.font = font.value;
 }
}
