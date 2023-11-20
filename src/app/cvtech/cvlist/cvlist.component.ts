import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Person} from "../../Model/Person";

@Component({
  selector: 'app-cvlist',
  templateUrl: './cvlist.component.html',
  styleUrls: ['./cvlist.component.css']
})
export class CvlistComponent {
  @Input()
  showButtons : Boolean = true
  @Input()
  personnes : Person[] | null = [];
  @Output()
  sendedperson = new EventEmitter();
  @Output()
  buttonClicked = new EventEmitter();

  setJunior(){
    this.buttonClicked.emit(true)
  }
  setSenior(){
    this.buttonClicked.emit(false)
  }
  sendperson(item : Person){
    console.log(item)
    this.sendedperson.emit(item);
  }
}
