import {Component, inject} from '@angular/core';
import {Person} from "../../Model/Person";
import {CvService} from "../cv.service";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent{
  cvservice : CvService = inject(CvService)
  route = inject(ActivatedRoute);

  personnes : Person[] = []
  filtredList : Person[] = []
  personne : any = false;

  constructor() {
    const personnes : Person[] = this.route.snapshot.data['personnes'];
    this.personnes = personnes
    this.filtredList = this.personnes.filter((person)=> person.age < 40)
  }

  
  
  
  filterItems(event : boolean){
    if(event){
      this.filtredList = this.personnes.filter((person)=> person.age < 40)
    }else{
      this.filtredList = this.personnes.filter((person)=> person.age >= 40)
    }
  }

  sendperson(item : Person){
    this.personne = item;
  }
}
