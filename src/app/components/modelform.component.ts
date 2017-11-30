import { Component, Input, ViewChild } from '@angular/core';
import { SignupModel } from '../_models/signupModel';

@Component({
  selector: 'model-form',
  templateUrl: './modelform.component.html',
  styles: [`h1 { font-family: Lato; }`]
})
export class ModelFormComponent {
  @Input() name: string;
  @ViewChild('f') form: any;

  model: SignupModel = new SignupModel();

  langs: string[] = [
    'English',
    'French',
    'German'
  ]

  onSubmit() {
    if(this.form.valid){
      console.log("form submitted", this.form.value)
      this.form.reset();
    }
  }

 
}
