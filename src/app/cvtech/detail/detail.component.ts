import {Component, inject} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Person} from "../../Model/Person";
import {CvService} from "../cv.service";
import {EmbaucherService} from "../embaucher.service";

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent {
  personne: Person = new Person();
  activerouter = inject(ActivatedRoute)
  cvservice = inject(CvService)
  embaucheservice = inject(EmbaucherService)
  router = inject(Router)

  constructor() {
    this.activerouter.data.subscribe((data) => {
      if (data['personnes'] == null) {
        this.router.navigate(['notfound']);  
      }
      this.personne = data['personnes'];
    });             
  }

  supprimercv() {
    this.cvservice.deletehttpPersonne$(this.personne.id).subscribe(
      (result) => {
        console.log(result)
      },
      (error) => {
        console.log(error)
      },
    )
    this.cvservice.deletePersonne(this.personne);
    this.embaucheservice.debaucherPersonne(this.personne);
    this.router.navigate(['cv']);
  }

}
