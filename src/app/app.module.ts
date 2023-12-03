import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import { CvComponent } from './cvtech/cv/cv.component';
import { CvdetailComponent } from './cvtech/cvdetail/cvdetail.component';
import { CvlistComponent } from './cvtech/cvlist/cvlist.component';
import { CvitemComponent } from './cvtech/cvitem/cvitem.component';
import { MystyleComponent } from './directive/mystyle/mystyle.component';
import { RainbowDirective } from './directive/rainbow.directive';
import { DefaultthumbnailPipe } from './cvtech/defaultthumbnail.pipe';
import { EmbaucheComponent } from './cvtech/embauche/embauche.component';
import {ROUTING} from "./app.routing";
import { NavbarComponent } from './navbar/navbar.component';
import { DetailComponent } from './cvtech/detail/detail.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { AddComponent } from './cvtech/add/add.component';
import { SliderComponent } from './slider/slider.component';
import { HttpComponent } from './http/http.component';
import {HttpClientModule} from "@angular/common/http";
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';

import { ToastrModule } from 'ngx-toastr';
import { SearchComponent } from './cvtech/search/search.component';
import { ProductsListComponent } from './products/products-list/products-list.component';
import { MasterDetailsComponent } from './cvtech/master-details/master-details.component';
import { MergeComponent } from './merge/merge.component';

@NgModule({
  declarations: [
    AppComponent,
    CvComponent,
    CvdetailComponent,
    CvlistComponent,
    CvitemComponent,
    MystyleComponent,
    RainbowDirective,
    DefaultthumbnailPipe,
    EmbaucheComponent,
    NavbarComponent,
    DetailComponent,
    NotfoundComponent,
    AddComponent,
    SliderComponent,
    HttpComponent,
    SearchComponent,
    ProductsListComponent,
    MasterDetailsComponent,
    MergeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ROUTING,
    HttpClientModule,
    CommonModule,
    ReactiveFormsModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
