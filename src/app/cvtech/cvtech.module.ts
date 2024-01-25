import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CvComponent } from './cv/cv.component';
import { MasterDetailsComponent } from './master-details/master-details.component';
import { DetailComponent } from './detail/detail.component';
import { AddComponent } from './add/add.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CvTechRoutingModule } from './cvtech-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { CvlistComponent } from './cvlist/cvlist.component';
import { SearchComponent } from './search/search.component';
import { DefaultthumbnailPipe } from './defaultthumbnail.pipe';
import { CvdetailComponent } from './cvdetail/cvdetail.component';
import { CvitemComponent } from './cvitem/cvitem.component';
import { EmbaucheComponent } from './embauche/embauche.component';



@NgModule({
  declarations: [
    CvComponent,
    MasterDetailsComponent,
    DetailComponent,
    AddComponent,
    CvlistComponent,
    SearchComponent,
    DefaultthumbnailPipe,
    CvdetailComponent,
    CvitemComponent,
    EmbaucheComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    CvTechRoutingModule
  ]
})
export class CvtechModule { }
