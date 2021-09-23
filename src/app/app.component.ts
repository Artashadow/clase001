import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'clase001';
  contador: number;
  
  constructor() {
    console.log("Constructor inicializando contador ... ");
    this.contador = 0;
  }

  ngOnInit() {
    this.contador++;
    console.log("Ciclo de vida, entrando al ... ngOnInit", this.contador);
  }

  ngOnChange() {
    this.contador++;
    console.log("Ciclo de vida, entrando al ... ngOnChange", this.contador);
  }

  ngAfterContentInit() {
    this.contador++;
    console.log("Ciclo de vida, entrando al ... ngAfterContentInit", this.contador);
  }

  ngAfterContentChecked() {
    this.contador++;
    console.log("Ciclo de vida, entrando al ... ngAfterContentChecked", this.contador);
  }

  ngAfterViewInit() {
    this.contador++;
    console.log("Ciclo de vida, entrando al ... ngAfterViewInit", this.contador);
  }

  ngAfterViewChecked() {
    this.contador++;
    console.log("Ciclo de vida, entrando al ... ngAfterViewChecked", this.contador);
  }

  ngOnDestroy() {
    this.contador++;
    console.log("Ciclo de vida, entrando al ... ngOnDestroy", this.contador);
  }

}
