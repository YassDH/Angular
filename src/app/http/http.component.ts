import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.css']
})
export class HttpComponent {
  constructor(private http : HttpClient) {
    this.http.get('https://apilb.tridevs.net/api/personnes').subscribe(
      (result)=>{
        console.log(result)
      },
    (erreur)=>{
        console.log(erreur)
    },
      ()=>{
        console.log('completed')
      }
    )
  }

}
