import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  passwordLength = 0;
  useAlphabet = false;
  useNumbers = false;
  useSpecial = false;
  finalPassword = '';

  onClickHandler = () => {
    let lookUp = '';
    let pass = '';
    if (this.useAlphabet) {
      lookUp += 'abcdefghijklmnopqrstuvwxyz';
    }

    if (this.useNumbers) {
      lookUp += '1234567890';
    }

    if (this.useSpecial) {
      lookUp += '!@#$%^&*()';
    }

    for (let i = 0; i < this.passwordLength; i++) {
      pass += lookUp[Math.floor(Math.random() * lookUp.length)];
    }

    console.log(
      `The length of the password generated is: ${this.passwordLength}
        Using alphabet allowed: ${this.useAlphabet}
        using numbers allowed: ${this.useNumbers}
        using special characters: ${this.useSpecial}
        the final password: ${pass}
      `
    );

    this.finalPassword = pass;
  };

  includeAlphabetsHandler = () => {
    this.useAlphabet = !this.useAlphabet;
  };

  includeNumbersHandler = () => {
    this.useNumbers = !this.useNumbers;
  };

  includeSpecialHandler = () => {
    this.useSpecial = !this.useSpecial;
  };

  onInputChange = (event: Event) => {
    this.passwordLength = Number((<HTMLInputElement>event.target).value);
  };
}
