import { Component } from '@angular/core';
import {Observable} from "rxjs";

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent {
  data = [
    "wissem.jpg",
    "me.jpg",
    "mahdi.jpg",
    "notfound.jpg"
  ]
  currentImg : string = "";
  myObservalble : Observable<string> = new Observable<string>(
    (observer)=>{
      let i = 0;
      setInterval(
        ()=>{
          observer.next(this.data[i]);
          i++;
          i%=this.data.length;
        }
        ,1000)
    }
  )
  constructor() {
    this.myObservalble.subscribe(
      (result)=>{
        this.currentImg = result;
      }
    )
  }
}
