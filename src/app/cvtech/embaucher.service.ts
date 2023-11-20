import { Injectable, inject } from '@angular/core';
import {Person} from "../Model/Person";
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class EmbaucherService {
  private toastr = inject(ToastrService);
  private personnes : Person[] = [];
  constructor() { }
  getPersonnes() : Person[] {
    return this.personnes;
  }
  embaucherPersonne(item : Person) {
    let index = this.personnes.indexOf(item);
    if(index == -1)
      this.personnes.push(item);
    else
      this.toastr.error(`${item.name} ${item.firstname} is already embauched`)
  }
  debaucherPersonne(item: Person){
    let index = this.personnes.indexOf(item);
    this.personnes.splice(index,1);
  }
}
