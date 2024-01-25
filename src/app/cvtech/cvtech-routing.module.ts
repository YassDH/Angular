import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CvComponent } from './cv/cv.component';
import { cvResolver } from './resolvers/cv.resolver';
import { MasterDetailsComponent } from './master-details/master-details.component';
import { DetailComponent } from './detail/detail.component';
import { detailsResolver } from './resolvers/details.resolver';
import { AddComponent } from './add/add.component';
import { isLoggedInGuard } from '../Guards/is-logged-in.guard';
import { exitAddCvGuard } from '../Guards/exit-add-cv.guard';


const routes: Routes = [
    {path : '' , component: CvComponent, resolve: { personnes : cvResolver}},
    {
      path: 'list',
      component: MasterDetailsComponent,
      children: [
        {
          path: ':id',
          component: DetailComponent,
          resolve: { personnes: detailsResolver },
        },
      ],
    },
    {path : 'add' , component: AddComponent, canActivate : [isLoggedInGuard], canDeactivate : [exitAddCvGuard]},
    {path : 'detail/:id' , component: DetailComponent, resolve: { personnes: detailsResolver }}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CvTechRoutingModule { }