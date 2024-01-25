import { Component, ViewChild } from '@angular/core';
import {NgForm} from "@angular/forms";
import {CvService} from "../cv.service";
import {Router} from "@angular/router";
import { CanComponentDeactivate } from 'src/app/Guards/exit-add-cv.guard';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements CanComponentDeactivate {
  @ViewChild('formulaire') formulaire!: NgForm;
  constructor(private cvservice : CvService,private router : Router) {
  }

  createcv(item : NgForm){
    this.cvservice.addPersonne(item.value);
    this.router.navigate(['cv']);
  }

  canDeactivate(){
    let empty = true
    let values = Object.values(this.formulaire.value)
    for(const value of values){
      if(value){
        empty = false
        break
      }
    }
    if (!empty && !this.formulaire.submitted) {
      return window.confirm(
        'You have unsaved changes. Do you really want to leave?'
      );
    }
    return true;
  }
}
