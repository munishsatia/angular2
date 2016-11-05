import { Component } from '@angular/core';
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//import { AppComponent }   from './app.component';
@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ App ],
  bootstrap:    [ App ]
})
export class AppModule { }

@Component({
  selector: 'app',
  template: '<h1>My First Angular App</h1>'
})
export class App { }