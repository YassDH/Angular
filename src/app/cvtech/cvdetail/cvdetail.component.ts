import {Component, inject, Input} from '@angular/core';
import {Person} from "../../Model/Person";
import {EmbaucherService} from "../embaucher.service";
import {Router} from "@angular/router";
import { CvService } from '../cv.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cvdetail',
  templateUrl: './cvdetail.component.html',
  styleUrls: ['./cvdetail.component.css']
})
export class CvdetailComponent {
  cvService = inject(CvService)
  personne$ : Observable<Person>
  

  constructor() {
    this.personne$ = this.cvService.getSelectedPersonListner$()
  }

  embaucheservice = inject(EmbaucherService)
  route = inject(Router)
  embaucher(person : Person){
    this.embaucheservice.embaucherPersonne(person);
  }

  getmoreinfo(id : number){
    this.route.navigate(['cv/detail',id ]);
  }

}
