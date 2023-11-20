import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { CvService } from '../cv.service';
import { Person } from 'src/app/Model/Person';
import { of } from 'rxjs';

export const detailsResolver: ResolveFn<Person | null> = (route, state) => {
  const cvService = inject(CvService);
  const id = route.params['id'];
  if (isNaN(+id)) {
      console.log(`Product id was not a number: ${id}`);
      return of(null);
  }
  return cvService.getPersonneById(id)
};
