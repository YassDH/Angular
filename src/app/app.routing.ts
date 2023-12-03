import {RouterModule, Routes} from "@angular/router";
import {CvComponent} from "./cvtech/cv/cv.component";
import {MystyleComponent} from "./directive/mystyle/mystyle.component";
import {DetailComponent} from "./cvtech/detail/detail.component";
import {NotfoundComponent} from "./notfound/notfound.component";
import {AddComponent} from "./cvtech/add/add.component";
import { ProductsListComponent } from "./products/products-list/products-list.component";
import { MasterDetailsComponent } from "./cvtech/master-details/master-details.component";
import { detailsResolver } from "./cvtech/resolvers/details.resolver";
import { cvResolver } from "./cvtech/resolvers/cv.resolver";
import { MergeComponent } from "./merge/merge.component";
import { loginGuard } from "./login.guard";
import { isLoggedInGuard } from "./Guards/is-logged-in.guard";
import { exitAddCvGuard } from "./Guards/exit-add-cv.guard";
import { CustomPreloadingStrategy } from "./custom-preloading-strategy";


const routes: Routes = [
  {path: '', component: CvComponent, resolve: { personnes : cvResolver}},
  {path: 'style', component: MystyleComponent},
  {path: 'merge', component: MergeComponent},
  {path: 'login', loadChildren : ()=> import('./login/login.module').then((m) => m.LoginModule) , canActivate : [loginGuard]},
  {path: 'products', component: ProductsListComponent},
  {path: 'cv', data: { 'preload': true }, children : [
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
    ]},
  {path: '**', component: NotfoundComponent}
]

export const ROUTING = RouterModule.forRoot(routes, { preloadingStrategy : CustomPreloadingStrategy})
