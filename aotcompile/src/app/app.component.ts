
import {Component} from '@angular/core';
@Component({
  moduleId : module.id,
  selector: 'my-app',
  templateUrl: './app.component.html',
})
export class AppComponent  { 
  showHeading = true;
  heroes = ['superman','spiderman','camerica'];
  toggleHeading(){
    this.showHeading=!this.showHeading;
  }
  name = 'Angular'; 
}
