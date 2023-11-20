import { Component, inject } from '@angular/core';
import { Observable, catchError, of } from 'rxjs';
import { Person } from 'src/app/Model/Person';
import { CvService } from '../cv.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-master-details',
  templateUrl: './master-details.component.html',
  styleUrls: ['./master-details.component.css']
})
export class MasterDetailsComponent {
  personnes$: Observable<Person[]>
  cvService = inject(CvService);
  toaster = inject(ToastrService);
  router = inject(Router);

  constructor(){
    this.personnes$ = this.cvService.getPersonnes$().pipe(
      catchError((res)=> {
        this.toaster.error('Erreur de récupération de donnés');
        return of(res);
      })
    )
  }

  showDetails(person: Person){
    this.router.navigate(['cv', 'list', person.id]);
  }

}
