import { Component, inject } from '@angular/core';
import {EmbaucherService} from "../embaucher.service";
import {Person} from "../../Model/Person";
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-embauche',
  templateUrl: './embauche.component.html',
  styleUrls: ['./embauche.component.css']
})
export class EmbaucheComponent {

  private toastr = inject(ToastrService);

  constructor(private embaucheservice : EmbaucherService) {
  }
  personnes : Person [] = this.embaucheservice.getPersonnes();

  debaucher(item : Person){
    this.embaucheservice.debaucherPersonne(item);
    this.toastr.success(item.name+" "+item.firstname+" débauché !")
  }
}
