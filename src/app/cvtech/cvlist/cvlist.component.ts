import {Component, EventEmitter, Input, Output, inject} from '@angular/core';
import {Person} from "../../Model/Person";
import { CvService } from '../cv.service';

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
  buttonClicked = new EventEmitter();

  cvServie = inject(CvService)

  setJunior(){
    this.buttonClicked.emit(true)
  }
  setSenior(){
    this.buttonClicked.emit(false)
  }
}
