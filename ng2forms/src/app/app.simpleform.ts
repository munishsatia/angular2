import { Component } from '@angular/core';
@Component({
    selector : 'simple-form',
    templateUrl : './app.simpleform.html'
})
export class SimpleFormComponent{
    submitForm(form:any):void{
        console.log('Form Data');
        console.log(form);
    }
}
// We’ll import our dependencies
//import { Component } from '@angular/core';

// @Component({
//   selector: 'simple-form',
//   // We’ll inline the template of our form
//   templateUrl : './app.simpleform.html'
// //   template : `
// //     <h1>Simple Form</h1>
// //   `
// })
// export class SimpleFormComponent {
// }