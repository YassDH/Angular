import {RouterModule, Routes} from "@angular/router";
import {CvComponent} from "./cvtech/cv/cv.component";
import {MystyleComponent} from "./directive/mystyle/mystyle.component";
import {DetailComponent} from "./cvtech/detail/detail.component";
import {NotfoundComponent} from "./notfound/notfound.component";
import {AddComponent} from "./cvtech/add/add.component";
import {LoginComponent} from "./login/login.component";
import { ProductsListComponent } from "./products/products-list/products-list.component";
import { MasterDetailsComponent } from "./cvtech/master-details/master-details.component";
import { detailsResolver } from "./cvtech/resolvers/details.resolver";
import { cvResolver } from "./cvtech/resolvers/cv.resolver";
import { MergeComponent } from "./merge/merge.component";


const APP_ROUTING: Routes = [
  {path: '', component: CvComponent, resolve: { personnes : cvResolver}},
  {path: 'style', component: MystyleComponent},
  {path: 'merge', component: MergeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'products', component: ProductsListComponent},
  {path: 'cv', children : [
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
      {path : 'add' , component: AddComponent},
      {path : 'detail/:id' , component: DetailComponent, resolve: { personnes: detailsResolver }}
    ]},
  {path: '**', component: NotfoundComponent}
]

export const ROUTING = RouterModule.forRoot(APP_ROUTING)
