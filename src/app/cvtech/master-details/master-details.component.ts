import { Component, OnDestroy, inject } from '@angular/core';
import { Observable, catchError, map, of, switchMap } from 'rxjs';
import { Person } from 'src/app/Model/Person';
import { CvService } from '../cv.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-master-details',
  templateUrl: './master-details.component.html',
  styleUrls: ['./master-details.component.css']
})
export class MasterDetailsComponent  implements OnDestroy{
  personnes$: Observable<Person[]>
  cvService = inject(CvService);
  toaster = inject(ToastrService);
  router = inject(Router);
  subscription

  constructor(){
    this.personnes$ = this.cvService.getPersonnes$().pipe(
      catchError((res)=> {
        this.toaster.error('Erreur de récupération de donnés');
        return of(res);
      })
    )

    this.subscription = this.cvService.getSelectedPersonListner$().subscribe(
      (value)=>{        
        if(value.id > 0)
          this.router.navigate(['cv','list',value.id])
      }
    )
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }

}
