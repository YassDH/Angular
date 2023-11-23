import { Component, inject } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, debounceTime, distinctUntilChanged, map, switchMap } from 'rxjs';
import { Person } from 'src/app/Model/Person';
import { CvService } from '../cv.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  name = new FormControl();
  personnes$: Observable<Person[]> = new Observable(); 
  cvService = inject(CvService);
  router = inject(Router)

  ngOnInit(): void {
    this.personnes$ = this.name.valueChanges.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap(searchTerm => this.cvService.getPersonneByName(searchTerm))
    );
  }

  redirectToDetails(){
    this.cvService.getSelectedPersonListner$().pipe(
      map((personne) =>{
        this.router.navigate(['cv','detail', personne.id])
      })
    )
  }

}
