import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title: string = 'mi primer componente';

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
