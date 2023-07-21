import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'password';
  password = '';

  length:number = 0;
  includeLetters:boolean = false;
  includeNumbers:boolean = false;
  includeSymbols:boolean = false;

  modifyLengths(value: string) {
    const parsedValue = parseInt(value);

    if(!isNaN(parsedValue)) {
      debugger;
      this.length = parsedValue;
    }
  }

  modifyLetters() {
    this.includeLetters = !this.includeLetters;
  }

  modifyNumbers() {
    this.includeNumbers = !this.includeNumbers;
  }

  modifySymbols() {
    this.includeSymbols = !this.includeSymbols;
  }

  buttonClick() {
    const numbers = '1234567890';
    const letters = 'abcdefghijklmnopqrstuvwyz';
    const symbols = '!@#$%^&*()';

    let startingCharacter = ''

    if(this.includeLetters)
    {
      startingCharacter+= letters;
    }

    if(this.includeNumbers)
    {
      startingCharacter+= numbers;
    }

    if(this.includeSymbols)
    {
      startingCharacter+= symbols;
    }

    let randomlyGeneratedPassword = ''

    for(let i=0; i < this.length; i++)
    {
      const index = Math.floor(Math.random() * startingCharacter.length);
      randomlyGeneratedPassword += startingCharacter[index];
    }

    this.password = randomlyGeneratedPassword;
  }
}
