import { Component } from '@angular/core';
import {NgForm} from "@angular/forms";
import {CvService} from "../cv.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {
  constructor(private cvservice : CvService,private router : Router) {
  }
  createcv(item : NgForm){
    this.cvservice.addPersonne(item.value);
    this.router.navigate(['cv']);
  }
}
