import {Component, EventEmitter, Input, Output, inject} from '@angular/core';
import {Person} from "../../Model/Person";
import { CvService } from '../cv.service';

@Component({
  selector: 'app-cvitem',
  templateUrl: './cvitem.component.html',
  styleUrls: ['./cvitem.component.css']
})
export class CvitemComponent {
  cvService = inject(CvService)
  @Input()
  personne : Person = new Person();
  @Input()
  bgintcolor:number = 0;

  sendperson(){    
    this.cvService.changeSelectedPerson(this.personne)
  }
}
