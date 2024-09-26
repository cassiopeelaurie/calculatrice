import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { max } from 'rxjs';

@Component({
  selector: 'app-calculatrice',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './calculatrice.component.html',
  styleUrls: ['./calculatrice.component.scss'],
})
export class CalculatriceComponent {
  randomNumber1: number = 0;
  randomNumber2: number = 0;
  result: number | null = null; 

  generateNumber(): void {
    this.randomNumber1 = Math.floor(Math.random() * 100) + 1;
    this.randomNumber2 = Math.floor(Math.random() * 100) + 1;
    this.result = null;
  }

  calculateSum(): void {
    this.result = this.randomNumber1 + this.randomNumber2;
  }

  calculateSoustraction(): void {
    this.result = this.randomNumber1 - this.randomNumber2;
  }

calculateDivision(): void {
  this.result = this.randomNumber1 / this.randomNumber2;
}

calculateMultiplication(): void {
  this.result = this.randomNumber1 * this.randomNumber2;
}
}
