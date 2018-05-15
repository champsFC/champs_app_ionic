import { Component } from '@angular/core';

@Component({
  selector: 'login-input',
  templateUrl: 'login-input.html'
})
export class LoginInputComponent {

  text: string;

  constructor() {
    console.log('Hello LoginInputComponent Component');
    this.text = 'Hello World';
  }

}
