import {RouterModule, Routes} from "@angular/router";
import {CvComponent} from "./cvtech/cv/cv.component";
import {MystyleComponent} from "./directive/mystyle/mystyle.component";
import {NotfoundComponent} from "./notfound/notfound.component";
import { ProductsListComponent } from "./products/products-list/products-list.component";
import { cvResolver } from "./cvtech/resolvers/cv.resolver";
import { MergeComponent } from "./merge/merge.component";
import { loginGuard } from "./login.guard";
import { CustomPreloadingStrategy } from "./custom-preloading-strategy";


const routes: Routes = [
  {path: '', component: CvComponent, resolve: { personnes : cvResolver}},
  {path: 'style', component: MystyleComponent},
  {path: 'merge', component: MergeComponent},
  {path: 'login', loadChildren : ()=> import('./login/login.module').then((m) => m.LoginModule) , canActivate : [loginGuard]},
  {path: 'products', component: ProductsListComponent},
  {path: 'cv', data: { 'preload': true }, loadChildren : ()=> import('./cvtech/cvtech.module').then((m) => m.CvtechModule)},
  {path: '**', component: NotfoundComponent}
]

export const ROUTING = RouterModule.forRoot(routes, { preloadingStrategy : CustomPreloadingStrategy})
