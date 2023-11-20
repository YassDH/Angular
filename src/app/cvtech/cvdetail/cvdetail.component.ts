import {Component, inject, Input} from '@angular/core';
import {Person} from "../../Model/Person";
import {EmbaucherService} from "../embaucher.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-cvdetail',
  templateUrl: './cvdetail.component.html',
  styleUrls: ['./cvdetail.component.css']
})
export class CvdetailComponent {
  @Input()
  personne : Person = new Person();
  constructor() {
  }
  embaucheservice = inject(EmbaucherService)
  route = inject(Router)
  embaucher(){
    this.embaucheservice.embaucherPersonne(this.personne);
  }

  getmoreinfo(){
    this.route.navigate(['cv/detail',this.personne.id]);
  }

}
