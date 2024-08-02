import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: 'counter.component.html'
})

export class CounterComponent {

  constructor() { }

  contador: number = 0;

  incrementarEnUno(): void {
    this.contador++;
  }

  decrementarEnUno(): void {
    this.contador--;
  }

  resetearContador(): void {
    this.contador = 0;
  }
}
