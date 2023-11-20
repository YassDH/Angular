import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { CvService } from '../cv.service';
import { Person } from 'src/app/Model/Person';

export const cvResolver: ResolveFn<Person[] | null> = (route, state) => {
  const cvService = inject(CvService);

  return cvService.getPersonnes$();
};
