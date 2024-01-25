import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import { MystyleComponent } from './directive/mystyle/mystyle.component';
import { RainbowDirective } from './directive/rainbow.directive';
import {ROUTING} from "./app.routing";
import { NavbarComponent } from './navbar/navbar.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { SliderComponent } from './slider/slider.component';
import { HttpComponent } from './http/http.component';
import {HttpClientModule} from "@angular/common/http";
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { ProductsListComponent } from './products/products-list/products-list.component';
import { MergeComponent } from './merge/merge.component';

@NgModule({
  declarations: [
    AppComponent,
    MystyleComponent,
    RainbowDirective,
    NavbarComponent,
    NotfoundComponent,
    SliderComponent,
    HttpComponent,
    ProductsListComponent,
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
