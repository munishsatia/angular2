import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule  } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {SimpleFormComponent } from "./app.simpleform";
import {ComplexFormComponent} from "./app.complexform";
import {FormValidationComponent} from "./app.formvalidations";

@NgModule({
  declarations: [
    AppComponent,
    SimpleFormComponent
    ,ComplexFormComponent
    ,FormValidationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
 // bootstrap:[SimpleFormComponent]
 //bootstrap:[AppComponent,SimpleFormComponent]
})
export class AppModule { }
