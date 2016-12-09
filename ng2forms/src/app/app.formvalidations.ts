import { Component } from '@angular/core';
import {FormGroup,FormBuilder,Validators} from '@angular/forms';
@Component({
  selector: 'form-validation',
  templateUrl : './app.formvalidation.html'  
})
export class FormValidationComponent {
    //complexForm : FormGroup;
    complexForm : FormGroup;
    constructor(fb:FormBuilder){
            this.complexForm = fb.group({
                         'firstName' : [null,Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(10)])],
                            'lastName': [null, Validators.required],
                            'gender' : 'Female',
                            'hiking' : false,
                            'running' : false,
                            'swimming' : false
                
            });
    }
    submitForm(value:any){
        console.log(value);
    }
}